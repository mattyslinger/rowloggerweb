import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, copyFile, readdir } from "fs/promises";
import { join } from "path";
import sharp from "sharp";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Copy public assets to docs
  console.log("copying public assets...");
  const publicDir = join(process.cwd(), "client", "public");
  const docsDir = join(process.cwd(), "docs");

  try {
    const files = await readdir(publicDir);
    for (const file of files) {
      if (file !== "404.html") { // Skip 404.html as it's handled separately
        await copyFile(join(publicDir, file), join(docsDir, file));
      }
    }

    // Convert favicon.png to favicon.ico
    console.log("generating favicon.ico...");
    await sharp(join(publicDir, "favicon.png"))
      .resize(32, 32)
      .toFile(join(docsDir, "favicon.ico"));
  } catch (error) {
    console.error("Error copying public assets:", error);
  }


  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
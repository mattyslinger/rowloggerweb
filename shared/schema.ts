import { z } from "zod";

export const insertVideoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  url: z.string().url("Must be a valid URL"),
  thumbnailUrl: z.string().url("Must be a valid URL").optional().nullable(),
  category: z.string().default("training"),
});

export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type Video = InsertVideo & { id: number };

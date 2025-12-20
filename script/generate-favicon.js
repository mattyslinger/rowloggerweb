
const fs = require('fs');
const path = require('path');

// Read the PNG file
const pngPath = path.join(__dirname, '../client/public/favicon.png');
const icoPath = path.join(__dirname, '../docs/favicon.ico');

// For a basic ICO file, we can just copy the PNG with ICO headers
// This creates a simple ICO that wraps the PNG
fs.readFile(pngPath, (err, pngData) => {
  if (err) {
    console.error('Error reading PNG:', err);
    process.exit(1);
  }

  // ICO file format header
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type: 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Number of images

  // ICO directory entry (16 bytes)
  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(0, 0);  // Width (0 = 256)
  dirEntry.writeUInt8(0, 1);  // Height (0 = 256)
  dirEntry.writeUInt8(0, 2);  // Color palette
  dirEntry.writeUInt8(0, 3);  // Reserved
  dirEntry.writeUInt16LE(1, 4);  // Color planes
  dirEntry.writeUInt16LE(32, 6); // Bits per pixel
  dirEntry.writeUInt32LE(pngData.length, 8); // Size of image data
  dirEntry.writeUInt32LE(22, 12); // Offset to image data (6 + 16)

  // Combine all parts
  const icoFile = Buffer.concat([icoHeader, dirEntry, pngData]);

  fs.writeFile(icoPath, icoFile, (err) => {
    if (err) {
      console.error('Error writing ICO:', err);
      process.exit(1);
    }
    console.log('favicon.ico generated successfully!');
  });
});

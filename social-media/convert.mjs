import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = [
  { input: 'email-signature.svg', output: 'email-signature.png', width: 500, height: 120 },
  { input: 'linkedin-banner.svg', output: 'linkedin-banner.png', width: 1584, height: 396 },
  { input: 'linkedin-profile-picture.svg', output: 'linkedin-profile-picture.png', width: 400, height: 400 },
];

for (const file of files) {
  const svgBuffer = readFileSync(join(__dirname, file.input));
  await sharp(svgBuffer, { density: 300 })
    .resize(file.width, file.height)
    .png()
    .toFile(join(__dirname, file.output));
  console.log(`Created ${file.output}`);
}

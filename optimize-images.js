/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

const path = require('path');

const fse = require('fs-extra');

const sharp = require('sharp');

const processImage = async (file, directoryPath, optimizedDirectoryPath) => {
  const filePath = path.join(directoryPath, file);
  const outputPath = path.join(optimizedDirectoryPath, file);
  const image = sharp(filePath);

  let options = { quality: 80 };
  let imageProcessor = 'jpeg';

  if (path.extname(file) === '.png') {
    options = { quality: 80 };
    imageProcessor = 'png';
  }

  try {
    await image[imageProcessor](options).toFile(outputPath);
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
};

const optimizeImages = async () => {
  const directoryPath = path.join(process.cwd(), 'public/images');
  const optimizedDirectoryPath = path.join(directoryPath, 'optimized');

  try {
    await fse.ensureDir(optimizedDirectoryPath);
    const files = await fse.readdir(directoryPath);

    const imageFiles = files.filter((file) => {
      const filePath = path.join(directoryPath, file);
      return file !== 'optimized' && fse.statSync(filePath).isFile() && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));
    });

    const processImagePromises = imageFiles.map((file) => processImage(file, directoryPath, optimizedDirectoryPath));
    await Promise.all(processImagePromises);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

optimizeImages();

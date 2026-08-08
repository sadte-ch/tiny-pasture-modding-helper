import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Delete new folder if it already exists to avoid errors when creating a new mod
export const deleteDuplicateExistingFolder = (newFolderName, folderPath) => {
  const modInnerPath = path.join(__dirname, `../../${folderPath}/${newFolderName}`);
  if (fs.existsSync(modInnerPath)) {
    fs.rmSync(modInnerPath, { recursive: true, force: true });
  }
};

// Create mod duplicate folder and rename it with the new authorName and modName
export const duplicateModFolderWithNewName = (newFolderName, oldFolderName, pathname) => {
  const modStarterPath = path.join(__dirname, `../../${pathname}/${oldFolderName}`);
  const newModPath = path.join(__dirname, `../../${pathname}/${newFolderName}`);

  // Copy the background-mod-starter folder to the new mod folder
  fs.cpSync(modStarterPath, newModPath, { recursive: true });

  // update inner folder name in the new mod folder
  const newModInnerPath = path.join(newModPath, `/mods-unpacked/${oldFolderName}`);
  const newModInnerPathRenamed = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  fs.renameSync(newModInnerPath, newModInnerPathRenamed);

  return newModPath;
};

// find and replace all instances of the old mod path with the new mod path in the new mod folder
export const updateLinksWithOldPath = (newFolderName, oldFolderName, newFolderPath, oldCodeName, newCodeName) => {
  // Get all files in the new mod folder
  const files = fs.readdirSync(newFolderPath, { withFileTypes: true });

  // Loop through all files and update the links
  files.forEach((file) => {
    const filePath = path.join(newFolderPath, file.name);

    if (file.isDirectory()) {
      // If the file is a directory, recursively call this function
      updateLinksWithOldPath(newFolderName, oldFolderName, filePath, oldCodeName, newCodeName);
    } else {
      // If the file is a file, read it and replace the old mod path with the new mod path
      let fileContents = fs.readFileSync(filePath, 'utf8');
      fileContents = fileContents.replace(new RegExp(oldFolderName, 'g'), newFolderName);
      fileContents = fileContents.replace(new RegExp(oldCodeName, 'g'), newCodeName);
      fs.writeFileSync(filePath, fileContents, 'utf8');
    }
  });
};

// Rename folders with oldFolderName to newFolderName in the new mod folder
// Rename the .tres files in the new mod folder to match the new modId
// Rename files with oldCodeName to newCodeName in the new mod folder
export const renameFiles = (oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName) => {
  // loop through files and rename any files with the oldFolderName or oldCodeName
  const files = fs.readdirSync(newModPath, { withFileTypes: true });
  files.forEach((file) => {
    const filePath = path.join(newModPath, file.name);

    if (file.isDirectory()) {
      // If the file is a directory, recursively call this function
      renameFiles(oldModId, newModId, filePath, newFolderName, oldFolderName, oldCodeName, newCodeName);
    } else {
      // If the file is a file, rename it if it contains the oldFolderName or oldCodeName
      if (file.name.includes(oldFolderName)) {
        const newFilePath = path.join(newModPath, file.name.replace(oldFolderName, newFolderName));
        fs.renameSync(filePath, newFilePath);
      } else if (file.name.includes(oldCodeName)) {
        const newFilePath = path.join(newModPath, file.name.replace(oldCodeName, newCodeName));
        fs.renameSync(filePath, newFilePath);
      } else if (file.name.includes(oldModId)) {
        const newFilePath = path.join(newModPath, file.name.replace(oldModId, newModId));
        fs.renameSync(filePath, newFilePath);
      }
    }
  });
};

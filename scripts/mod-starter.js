/**
 * Automates as much of the process of creating a new mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 * This is developed based off the instructions in the Tiny Pastures Modding Guide, which can be found here: https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb
 */

// Get the data from the data.json file
const getModData = () => {
  return require('../create-mod/data.json');
};

// Create mod duplicate folder and rename it with the new authorName and modName
const duplicateModFolderWithNewName = (newFolderName, oldFolderName) => {
  const fs = require('fs');
  const path = require('path');
  const modStarterPath = path.join(__dirname, `../create-mod/${oldFolderName}`);
  const newModPath = path.join(__dirname, `../create-mod/${newFolderName}`);

  // Copy the mod-starter folder to the new mod folder
  fs.cpSync(modStarterPath, newModPath, { recursive: true });

  // update inner folder name in the new mod folder
  const newModInnerPath = path.join(newModPath, `/mods-unpacked/${oldFolderName}`);
  const newModInnerPathRenamed = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  fs.renameSync(newModInnerPath, newModInnerPathRenamed);

  return newModPath;
};

// find and replace all instances of the old mod path with the new mod path in the new mod folder
const updateLinksWithOldPath = (newFolderName, oldFolderName, newFolderPath, oldCodeName, newCodeName) => {
  const fs = require('fs');
  const path = require('path');

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
}

// Rename folders with oldFolderName to newFolderName in the new mod folder
// Rename the .tres files in the new mod folder to match the new modId
// Rename files with oldCodeName to newCodeName in the new mod folder
const renameFiles = (oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName) => {
  const fs = require('fs');
  const path = require('path');

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
}

// move images from new-assets folder to the new mod folder
const moveNewAssetsToModFolder = (newModInnerPath) => {
  const fs = require('fs');
  const path = require('path');

  const newAssetsPath = path.join(__dirname, '../create-mod/new-assets');
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // animal spritesheets
  const animalSpritesheetsPath = path.join(newAssetsPath, 'animal-spritesheets');
  const modAnimalSpritesheetsPath = path.join(newModAssetsPath, 'Animals');
  const animalSpritesheetsFiles = fs.readdirSync(animalSpritesheetsPath);
  animalSpritesheetsFiles.forEach((file) => {
    const oldPath = path.join(animalSpritesheetsPath, file);
    const newPath = path.join(modAnimalSpritesheetsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // animal idle spritesheets
  const animalIdleSpritesheetsPath = path.join(newAssetsPath, 'animal-idle-spritesheets');
  const modAnimalIdleSpritesheetsPath = path.join(newModAssetsPath, 'UI/PopupUI/AnimalIdle');
  const animalIdleSpritesheetsFiles = fs.readdirSync(animalIdleSpritesheetsPath);
  animalIdleSpritesheetsFiles.forEach((file) => {
    const oldPath = path.join(animalIdleSpritesheetsPath, file);
    const newPath = path.join(modAnimalIdleSpritesheetsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // portraits
  const portraitsPath = path.join(newAssetsPath, 'portraits');
  const modPortraitsPath = path.join(newModAssetsPath, 'UI/PopupUI/Portrait');
  const portraitFiles = fs.readdirSync(portraitsPath);
  portraitFiles.forEach((file) => {
    const oldPath = path.join(portraitsPath, file);
    const newPath = path.join(modPortraitsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // shop
  const shopPath = path.join(newAssetsPath, 'shop');
  const modShopPath = path.join(newModAssetsPath, 'UI/PopupUI/Shop/animal');
  const shopFiles = fs.readdirSync(shopPath);
  shopFiles.forEach((file) => {
    const oldPath = path.join(shopPath, file);
    const newPath = path.join(modShopPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });
}

const createNewModFromData = () => {
  const path = require('path');
  const data = getModData();

  const oldModId = '2989'
  const newModId = data.modId;
  const oldCodeName = 'alveus_cow';
  const newCodeName = data.codeName;
  const oldFolderName = 'Sad_Tech-AlveusCow';
  const newFolderName = `${data.authorName}-${data.modName}`;
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  const modInnerPath = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  moveNewAssetsToModFolder(modInnerPath);

  // update tres files
  // manifest.json file
  // do translations
  // new_cow.tscn + new_cow.res
  console.log(`New mod created at ${newModPath}`);
};

createNewModFromData();

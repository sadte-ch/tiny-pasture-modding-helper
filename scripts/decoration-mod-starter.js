/**
 * Automates as much of the process of creating a new decoration mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import { updateTranslations } from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';

const DECORATION_MOD_FOLDER_NAME = 'create-decoration-mod';
const oldModId = '1000';
const oldCodeName = 'new_deco';
const oldFolderName = 'Your_Name-NewDecoration';
const oldPrice = '100';

// move images from new-assets folder to the new mod folder
const moveNewAssetsToModFolder = (newModInnerPath, newCodeName) => {
  const newAssetsPath = path.join(__dirname, `../${DECORATION_MOD_FOLDER_NAME}/new-assets`);
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // decoration images
  const decorationPath = path.join(newAssetsPath, 'decoration');
  const modDecorationFolderPath = path.join(newModAssetsPath, `Deco/Buildings`);
  const decorationFiles = fs.readdirSync(decorationPath);
  decorationFiles.forEach((file) => {
    const oldPath = path.join(decorationPath, file);
    const newPath = path.join(modDecorationFolderPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // shop
  const shopPath = path.join(newAssetsPath, 'shop');
  const modShopPath = path.join(newModAssetsPath, 'UI/PopupUI/Shop/Deco');
  const shopFiles = fs.readdirSync(shopPath);
  shopFiles.forEach((file) => {
    const oldPath = path.join(shopPath, file);
    const newPath = path.join(modShopPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });
}

const updateOverwritesGdFile = (modInnerPath, data) => {
  const overwritesGdPath = path.join(modInnerPath, 'overwrites.gd');
  let overwritesGdContents = fs.readFileSync(overwritesGdPath, 'utf8');

  // replace the old modId with the new modId
  overwritesGdContents = overwritesGdContents.replace(new RegExp(oldModId, 'g'), data.modId);

  fs.writeFileSync(overwritesGdPath, overwritesGdContents, 'utf8');
  console.log(`Updated overwrites.gd file: ${overwritesGdPath}`);
};

// update ui_shop_page_decoration.gd with stuff from data.json
const updateShopPageDecorationFile = (modInnerPath, data) => {
  const shopPageDecorationPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_decoration.gd');
  let shopPageDecorationContents = fs.readFileSync(shopPageDecorationPath, 'utf8');

  // replace the old modId with the new modId
  shopPageDecorationContents = shopPageDecorationContents.replace(new RegExp(oldModId, 'g'), data.modId);
  shopPageDecorationContents = shopPageDecorationContents.replace(new RegExp(oldPrice, 'g'), data.price);

  fs.writeFileSync(shopPageDecorationPath, shopPageDecorationContents, 'utf8');
  console.log(`Updated shop page decoration file: ${shopPageDecorationPath}`);
};

const updateBuildManagerFile = (modInnerPath, data) => {
  const buildManagerFilePath = path.join(modInnerPath, 'extension/Manager/build_manager.gd');
  let buildManagerFileContents = fs.readFileSync(buildManagerFilePath, 'utf8');
  
  // replace the old modId with the new modId
  buildManagerFileContents = buildManagerFileContents.replace(new RegExp(oldModId, 'g'), data.modId);
  buildManagerFileContents = buildManagerFileContents.replace(new RegExp(oldCodeName, 'g'), data.codeName);

  fs.writeFileSync(buildManagerFilePath, buildManagerFileContents, 'utf8');
  console.log(`Updated build manager file: ${buildManagerFilePath}`);
};

const updateTscnForDecoration = (modInnerPath, data) => {
  const tscnFilePath = path.join(modInnerPath, 'overwrites/Scene/Level/Buildings/Decos', `${data.codeName}.tscn`);
  let tscnFileContents = fs.readFileSync(tscnFilePath, 'utf8');

  // replace the old modId with the new modId
  tscnFileContents = tscnFileContents.replace(new RegExp(oldModId, 'g'), data.modId);
  tscnFileContents = tscnFileContents.replace(new RegExp(oldCodeName, 'g'), data.codeName);

  fs.writeFileSync(tscnFilePath, tscnFileContents, 'utf8');
  console.log(`Updated tscn file for decoration: ${tscnFilePath}`);
};

const createNewDecorationModFromData = () => {
  const data = getModData(DECORATION_MOD_FOLDER_NAME);

  const newModId = data.modId;
  const newCodeName = data.codeName;
  const newFolderName = `${data.authorName}-${data.modName}`;

  deleteDuplicateExistingFolder(newFolderName, DECORATION_MOD_FOLDER_NAME);
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName, DECORATION_MOD_FOLDER_NAME);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  const modInnerPath = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  moveNewAssetsToModFolder(modInnerPath, newCodeName);
  updateManifestFile(modInnerPath, data);
  updateOverwritesGdFile(modInnerPath, data);

  updateTranslations(modInnerPath, data, 'DECO', 'NORMAL');

  updateBuildManagerFile(modInnerPath, data);
  updateShopPageDecorationFile(modInnerPath, data);
  updateTscnForDecoration(modInnerPath, data);
};

createNewDecorationModFromData();

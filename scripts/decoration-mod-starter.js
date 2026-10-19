/**
 * Automates as much of the process of creating a new decoration mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

import fs from 'fs';
import path from 'path';

import { updateTranslations } from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';
import {
  moveNewAssetsToModFolder, updateBuildManagerFile,
  updateDecorationShopPageFileForOneItemMod,
  updateOverwritesGdFile
} from "./shared/decoration.js";

const DECORATION_MOD_FOLDER_NAME = 'create-decoration-mod';
const oldModId = '1000';
const oldCodeName = 'new_deco';
const oldFolderName = 'Your_Name-NewDecoration';
const oldPrice = '100';

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

  moveNewAssetsToModFolder(newModPath, DECORATION_MOD_FOLDER_NAME);
  updateManifestFile(newModPath, data);
  updateOverwritesGdFile(newModPath, data, oldModId);

  updateTranslations(newModPath, data, 'DECO', 'NORMAL');

  updateBuildManagerFile(newModPath, data, oldModId, oldCodeName);
  updateDecorationShopPageFileForOneItemMod(newModPath, data, oldModId, oldPrice);
  updateTscnForDecoration(newModPath, data);
};

createNewDecorationModFromData();

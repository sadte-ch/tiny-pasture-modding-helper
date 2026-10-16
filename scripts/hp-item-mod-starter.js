/**
 * Automates as much of the process of creating a new hp item mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

import { updateTranslations } from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';
import {
  moveNewAssetsToModFolder,
  updateItemsShopPageFileForOneItemMod
} from "./shared/item.js";

const ITEM_MOD_FOLDER_NAME = 'create-hp-item-mod';
const oldModId = '1000';
const oldCodeName = 'new_hp_item';
const oldFolderName = 'Your_Name-NewHPItem';
const oldPrice = '100';
const oldHpValue = '10';

const createNewDecorationModFromData = () => {
  const data = getModData(ITEM_MOD_FOLDER_NAME);

  const newModId = data.modId;
  const newCodeName = data.codeName;
  const newFolderName = `${data.authorName}-${data.modName}`;

  deleteDuplicateExistingFolder(newFolderName, ITEM_MOD_FOLDER_NAME);
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName, ITEM_MOD_FOLDER_NAME);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  moveNewAssetsToModFolder(newModPath, ITEM_MOD_FOLDER_NAME);
  updateManifestFile(newModPath, data);

  updateTranslations(newModPath, data, 'ITEM', 'HP');

  updateItemsShopPageFileForOneItemMod(newModPath, data, oldModId, oldPrice, oldHpValue);
};

createNewDecorationModFromData();

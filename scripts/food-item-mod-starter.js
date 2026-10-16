/**
 * Automates as much of the process of creating a new food item mod for tiny pasture as possible.
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
  moveNewAssetsToModFolder,
  updateItemsShopPageFileForOneItemMod
} from "./shared/item.js";

const ITEM_MOD_FOLDER_NAME = 'create-food-item-mod';
const oldModId = '1000';
const oldCodeName = 'new_food';
const oldFolderName = 'Your_Name-NewFoodItem';
const oldPrice = '100';

const updateTresForItem = (modInnerPath, data) => {
  const foodDataPath = 'overwrites/Data/food_data'
  const tresFilePath = path.join(modInnerPath, foodDataPath, `${data.modId}.tres`) // already renamed with new id
  const tresFileContents = fs.readFileSync(tresFilePath, 'utf8')

  // add tres for food item
  let newTresContents = `${tresFileContents}\n`
  newTresContents = newTresContents.replace(new RegExp(oldModId, 'g'), data.modId)
  newTresContents = newTresContents.replace(new RegExp(oldCodeName, 'g'), data.codeName)
  newTresContents = newTresContents.replace(/price = .*/, `price = ${data.price}`)
  newTresContents = newTresContents.replace(/food_name = .*/, `food_name = "${data.translations.en.name}"`)
  if (data.food_value) {
    newTresContents = newTresContents.replace(/food_value = .*/, `food_value = ${data.food_value}`)
  }
  fs.writeFileSync(tresFilePath, newTresContents, 'utf8');
  console.log(`Updated tres file for food: ${tresFilePath}`);
};

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

  updateTranslations(newModPath, data, 'ITEM', 'FOOD');

  updateTresForItem(newModPath, data);
  updateItemsShopPageFileForOneItemMod(newModPath, data, oldModId, oldPrice);
};

createNewDecorationModFromData();

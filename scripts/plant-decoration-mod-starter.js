/**
 * Automates as much of the process of creating a new plant decoration mod for tiny pasture as possible.
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

const DECORATION_MOD_FOLDER_NAME = 'create-plant-decoration-mod';
const oldModId = '1000';
const oldCodeName = 'new_plant_deco';
const oldFolderName = 'Your_Name-NewPlantDecoration';
const oldPrice = '100';

const updateTscnForDecoration = (modInnerPath, data) => {
  const tscnFilePath = path.join(modInnerPath, 'overwrites/Scene/Level/Buildings/Decos', `${data.codeName}.tscn`);
  let tscnFileContents = fs.readFileSync(tscnFilePath, 'utf8');
  const foodDataPath = 'overwrites/Data/food_data'
  const tresFilePath = path.join(modInnerPath, foodDataPath, `${data.modId}.tres`) // already renamed with new id
  const tresFileContents = fs.readFileSync(tresFilePath, 'utf8')

  // replace the old modId with the new modId
  tscnFileContents = tscnFileContents.replace(new RegExp(oldModId, 'g'), data.modId);
  tscnFileContents = tscnFileContents.replace(new RegExp(oldCodeName, 'g'), data.codeName);

  if (data.edible_plant.width) {
    tscnFileContents = tscnFileContents.replace('size = Vector2(28, 50)', `size = Vector2(${data.edible_plant.width}, 50)`)
  }
  // remove sway animation if sway is false
  if (data.edible_plant.sway === false) {
    tscnFileContents = tscnFileContents.replace('autoplay = "sway"', '')
  }
  // update drop no (line 171)
  if (data.edible_plant.drop_no) {
    tscnFileContents = tscnFileContents.replace(/fruit_num = .*/, `fruit_num = ${data.edible_plant.drop_no}`)
  }
  // update plant stage times (line 169)
  if (data.edible_plant.plant_stage_time) {
    tscnFileContents = tscnFileContents.replace(/plant_stage_time = .*/, `plant_stage_time = [${data.edible_plant.plant_stage_time.join(', ')}]`)
  }
  fs.writeFileSync(tscnFilePath, tscnFileContents, 'utf8');
  console.log(`Updated tscn file for decoration: ${tscnFilePath}`);

  // add tres for plant food
  let newTresContents = `${tresFileContents}\n`
  newTresContents = newTresContents.replace(new RegExp(oldModId, 'g'), data.modId)
  newTresContents = newTresContents.replace(new RegExp(oldCodeName, 'g'), data.codeName)
  newTresContents = newTresContents.replace(/food_name = .*/, `food_name = "${data.translations.en.name}"`)
  if (data.edible_plant.food_value) {
    newTresContents = newTresContents.replace(/food_value = .*/, `food_value = ${data.edible_plant.food_value}`)
  }
  const foodPath = path.join(modInnerPath, foodDataPath, `${data.modId}.tres`);
  fs.writeFileSync(foodPath, newTresContents, 'utf8');
  console.log(`Updated tres file for plant food: ${foodPath}`);
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

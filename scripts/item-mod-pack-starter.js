/**
 * Automates as much of the process of creating a new food item mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

import fs from 'fs';
import path from 'path';

import {updateTranslations, updateTranslationsPack} from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';
import {
  moveNewAssetsToModFolder,
  updateItemsShopPageFileForOneItemMod
} from "./shared/item.js";

const ITEM_MOD_FOLDER_NAME = 'create-item-mod-pack';
const oldModId = '1000';
const oldCodeName = 'new_food_items_pack';
const oldFolderName = 'NewFoodItemsPack';

const updateTresForItem = (modInnerPath, data) => {
  const foodDataPath = 'overwrites/Data/food_data'
  const oldName = `${data.codeName}_0`
  const oldId = `${oldModId}0`
  const tresFilePath = path.join(modInnerPath, foodDataPath, `${data.modId}0.tres`) // already renamed with new id
  const tresFileContents = fs.readFileSync(tresFilePath, 'utf8')

  data.pack_items.forEach((item, index) => {
    const newName = `${data.codeName}_${index}`
    const newId = `${data.modId}${index}`
    let newContents = tresFileContents
    // replace the old modId with the new modId
    newContents = newContents.replace(new RegExp(oldId, 'g'), newId);
    newContents = newContents.replace(new RegExp(oldName, 'g'), newName);
    newContents = newContents.replace(/price = .*/, `price = ${item.price}`)
    newContents = newContents.replace(/food_name = .*/, `food_name = "${item.translations.en.name}"`)
    if (item.food_value) {
      newContents = newContents.replace(/food_value = .*/, `food_value = ${item.food_value}`)
    }

    const itemPath = path.join(modInnerPath, foodDataPath, `${newId}.tres`);
    fs.writeFileSync(itemPath, newContents, 'utf8');
  })
  console.log(`Updated tres files for food mod pack`);
};

const updateItemsShopPageFile = (modInnerPath, data, newFolderName) => {
  const shopPageItemsPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_items.gd');

  const shopPageItemsContents = `extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_items.gd"

@export var ${data.codeName}_new_fi = preload("res://Scene/UI/PopupUI/UIShop/Items/ui_shop_item_food.tscn")

${data.pack_items.map((item, index) => {
    const name = `${data.codeName}_${index}`
    return `const ${name} = preload("res://mods-unpacked/${newFolderName}/overwrites/Assets/UI/PopupUI/Shop/item/${name}.png")
const ${name}_item_price = ${item.price}
`
  }).join('\n')}

func _ready() -> void:
\tsuper()
${data.pack_items.map((item, index) => {
    const name = `${data.codeName}_${index}`
    const fiName = `FI${data.modId}_${index}`
    const id = `${data.modId}${index}`
    return `\tvar ${fiName} = ${data.codeName}_new_fi.instantiate()
\tfood_box.add_child(${fiName})
\t${fiName}.type_id = ${id}
\t${fiName}.item_tex.texture = ${name}
\t${fiName}.txt_price.text = str(roundi(${name}_item_price))
\t${fiName}.item_name.text = tr("ITEM_NAME_FOOD_${id}")
\t${fiName}.use_item.connect(_on_bt_food_pressed)
`
  }).join('\n')}`

  fs.writeFileSync(shopPageItemsPath, shopPageItemsContents, 'utf8');
  console.log(`Updated shop page items file: ${shopPageItemsPath}`);
}

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

  updateTranslationsPack(newModPath, data, 'ITEM', 'FOOD');

  updateTresForItem(newModPath, data);
  updateItemsShopPageFile(newModPath, data, newFolderName);
};

createNewDecorationModFromData();

/**
 * Automates as much of the process of creating a new decoration mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import { updateTranslationsPack } from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';

const DECORATION_MOD_FOLDER_NAME = 'create-decoration-mod-pack';
const oldModId = '1000';
const oldCodeName = 'new_deco_pack';
const oldFolderName = 'Your_Name-NewDecorationPack';
const oldPrice = '1000';

// move images from new-assets folder to the new mod folder
const moveNewAssetsToModFolder = (newModInnerPath) => {
  const newAssetsPath = path.join(__dirname, `../${DECORATION_MOD_FOLDER_NAME}/new-assets`);
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // decoration images
  const decorationPath = path.join(newAssetsPath, 'decoration')
  const modDecorationFolderPath = path.join(newModAssetsPath, `Deco/Buildings`)
  const decorationFiles = fs.readdirSync(decorationPath)
  decorationFiles.forEach((file) => {
    const oldPath = path.join(decorationPath, file)
    const newPath = path.join(modDecorationFolderPath, file)
    fs.cpSync(oldPath, newPath, { recursive: true })
  })
  
  // food items
  const foodPath = path.join(newAssetsPath, 'food')
  const foodFiles = fs.readdirSync(foodPath)
  foodFiles.forEach((file) => {
    const oldPath = path.join(foodPath, file)
    const newPath = path.join(modDecorationFolderPath, file)
    fs.cpSync(oldPath, newPath, { recursive: true })
  })

  // shop
  const shopPath = path.join(newAssetsPath, 'shop')
  const modShopPath = path.join(newModAssetsPath, 'UI/PopupUI/Shop/Deco')
  const shopFiles = fs.readdirSync(shopPath)
  shopFiles.forEach((file) => {
    const oldPath = path.join(shopPath, file)
    const newPath = path.join(modShopPath, file)
    fs.cpSync(oldPath, newPath, { recursive: true })
  })
}

const updateOverwritesGdFile = (modInnerPath, data, newFolderName) => {
  const overwritesGdPath = path.join(modInnerPath, 'overwrites.gd');
  const overwritesGdContents = `extends Node

const MOD_DIR = "res://mods-unpacked/${newFolderName}/overwrites/"

var overwrites_path = [
\t${data.pack_items.map((item, index) => `"res://mods-unpacked/${newFolderName}/overwrites/Scene/Level/Buildings/Decos/${data.codeName}_${index}_preview.tscn"`).join(',\n\t')}
]

func _init() -> void:
\t${data.pack_items.map((item, index) => {
  const name = `${data.codeName}_${index}`
  const id = `${data.modId}${index}`
  return `var ${name}_preview = preload("res://mods-unpacked/${newFolderName}/overwrites/Scene/Level/Buildings/Decos/${name}_preview.tscn")
\t${name}_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_${id}.tscn")`
}).join('\n\n\t')}
`

  fs.writeFileSync(overwritesGdPath, overwritesGdContents, 'utf8');
  console.log(`Updated overwrites.gd file: ${overwritesGdPath}`);
};

// update ui_shop_page_decoration.gd with stuff from data.json
const updateShopPageDecorationFile = (modInnerPath, data, newFolderName) => {
  const shopPageDecorationPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_decoration.gd');
  const shopPageDecorationContents = `extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var ${data.codeName}_new_bd = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_normal.tscn")

${data.pack_items.map((item, index) => {
  const name = `${data.codeName}_${index}`
  return `const ${name} = preload("res://mods-unpacked/${newFolderName}/overwrites/Assets/UI/PopupUI/Shop/Deco/${name}.png")
const ${name}_deco_path = "res://mods-unpacked/${newFolderName}/overwrites/Scene/Level/Buildings/Decos/${name}_preview.tscn"
const ${name}_item_price = ${item.price}
`
}).join('\n')}

func _ready() -> void:
\tsuper()
${data.pack_items.map((item, index) => {
  const name = `${data.codeName}_${index}`
  const bdName = `BD${data.modId}_${index}`
  const id = `${data.modId}${index}`
  return `\tvar ${bdName} = ${data.codeName}_new_bd.instantiate()
\tnormal_box.add_child(${bdName})
\t${bdName}.type_id = ${id}
\t${bdName}.item_price = ${name}_item_price
\t${bdName}.item_tex.texture = ${name}
\t${bdName}.txt_price.text = str(roundi(${name}_item_price))
\t${bdName}.unlock_condition = 0
\t${bdName}.deco_path = ${name}_deco_path
\t${bdName}.item_name.text = tr("DECO_NAME_NORMAL_${id}")
\t${bdName}.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_${id}")
`
}).join('\n')}`

  fs.writeFileSync(shopPageDecorationPath, shopPageDecorationContents, 'utf8');
  console.log(`Updated shop page decoration file: ${shopPageDecorationPath}`);
};

const updateBuildManagerFile = (modInnerPath, data, newFolderName) => {
  const buildManagerFilePath = path.join(modInnerPath, 'extension/Manager/build_manager.gd');
  
  const importLines = data.pack_items.map((item, index) => `const ${data.codeName}_${index} = preload("res://mods-unpacked/${newFolderName}/overwrites/Scene/Level/Buildings/Decos/${data.codeName}_${index}.tscn")`)
  const addDecoLines = data.pack_items.map((item, index) => `Decos[${data.modId}${index}] = ${data.codeName}_${index}`)
  const buildManagerFileContents = `extends "res://Scene/Level/build_manager.gd"

${importLines.join('\n')}

func _ready() -> void:
\tsuper()
\t${addDecoLines.join('\n\t')}
`
  
  fs.writeFileSync(buildManagerFilePath, buildManagerFileContents, 'utf8');
  console.log(`Updated build manager file: ${buildManagerFilePath}`);
};

const updateTscnForDecoration = (modInnerPath, data) => {
  const decoPath = 'overwrites/Scene/Level/Buildings/Decos'
  const oldName = `${data.codeName}_0`
  const oldId = `${oldModId}0`
  const tscnFilePath = path.join(modInnerPath, decoPath, `${oldName}.tscn`);
  const tscnFileContents = fs.readFileSync(tscnFilePath, 'utf8');
  const tscnPlantFilePath = path.join(modInnerPath, decoPath, `${oldName}_plant.tscn`);
  const tscnPlantFileContents = fs.readFileSync(tscnPlantFilePath, 'utf8');
  const tscnPreviewFilePath = path.join(modInnerPath, decoPath, `${oldName}_preview.tscn`);
  const tscnPreviewFileContents = fs.readFileSync(tscnPreviewFilePath, 'utf8');
  const foodDataPath = 'overwrites/Data/food_data'
  const tresFilePath = path.join(modInnerPath, foodDataPath, `${data.modId}0.tres`) // already renamed with new id
  const tresFileContents = fs.readFileSync(tresFilePath, 'utf8')
  
  data.pack_items.forEach((item, index) => {
    const newName = `${data.codeName}_${index}`
 
    const newId = `${data.modId}${index}`
    let newContents = `${item.edible_plant ? tscnPlantFileContents : tscnFileContents}`
    // replace the old modId with the new modId
    newContents = newContents.replace(new RegExp(oldId, 'g'), newId);
    newContents = newContents.replace(new RegExp(oldName, 'g'), newName);
    
    if (item.edible_plant) {
      // update size (line 12)
      if (item.edible_plant.width) {
        newContents = newContents.replace('size = Vector2(28, 50)', `size = Vector2(${item.edible_plant.width}, 50)`)
      }
      
      // remove sway animation if sway is false
      if (item.edible_plant.sway === false) {
        newContents = newContents.replace('autoplay = "sway"', '')
      }
      // update drop no (line 171)
      if (item.edible_plant.drop_no) {
        newContents = newContents.replace(/fruit_num = .*/, `fruit_num = ${item.edible_plant.drop_no}`)
      }
      
      // update plant stage times (line 169)
      if (item.edible_plant.plant_stage_time) {
        newContents = newContents.replace(/plant_stage_time = .*/, `plant_stage_time = [${item.edible_plant.plant_stage_time.join(', ')}]`)
      }
      
      // add tres for plant food
      let newTresContents = `${tresFileContents}\n`
      newTresContents = newTresContents.replace(new RegExp(oldId, 'g'), newId)
      newTresContents = newTresContents.replace(new RegExp(oldName, 'g'), newName)
      newTresContents = newTresContents.replace(/food_name = .*/, `food_name = "${item.translations.en.name}"`)
      if (item.edible_plant.food_value) {
        newTresContents = newTresContents.replace(/food_value = .*/, `food_value = ${item.edible_plant.food_value}`)
      }
      const foodPath = path.join(modInnerPath, foodDataPath, `${newId}.tres`);
      fs.writeFileSync(foodPath, newTresContents, 'utf8');
    }

    const itemPath = path.join(modInnerPath, decoPath, `${newName}.tscn`);
    fs.writeFileSync(itemPath, newContents, 'utf8');

    let newPreviewContents = `${tscnPreviewFileContents}`
    if (item.edible_plant) {
      const fruitedName = `${newName}_3.png`
      newPreviewContents = newPreviewContents.replace(new RegExp(`${oldName}.png`, 'g'), fruitedName)
    }
    newPreviewContents = newPreviewContents.replace(new RegExp(oldName, 'g'), newName)
    const itemPreviewPath = path.join(modInnerPath, decoPath, `${newName}_preview.tscn`)
    fs.writeFileSync(itemPreviewPath, newPreviewContents, 'utf8')
  })
  console.log(`Updated tscn file for decoration: ${tscnFilePath}`)
  
  // delete excess plant tres tscn file at the end
  if (!data.pack_items[0]?.edible_plant) { // only delete tres if first item isn't a plant
    fs.rmSync(tresFilePath, {recursive: true, force: true})
  }
  fs.rmSync(tscnPlantFilePath, { recursive: true, force: true })
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
  moveNewAssetsToModFolder(modInnerPath);
  updateManifestFile(modInnerPath, data);
  updateOverwritesGdFile(modInnerPath, data, newFolderName);

  updateTranslationsPack(modInnerPath, data, 'DECO', 'NORMAL');

  updateBuildManagerFile(modInnerPath, data, newFolderName);
  updateShopPageDecorationFile(modInnerPath, data, newFolderName);
  updateTscnForDecoration(modInnerPath, data);
};

createNewDecorationModFromData();

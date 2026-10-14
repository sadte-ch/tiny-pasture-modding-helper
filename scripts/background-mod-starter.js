/**
 * Automates as much of the process of creating a new background mod for tiny pasture as possible.
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
import {moveNewAssetsToModFolder} from "./shared/background.js";
import {updateDecorationShopPageFileForOneItemMod} from "./shared/decoration.js";

const BACKGROUND_MOD_FOLDER_NAME = 'create-background-mod';

const oldModId = '1000'
const oldCodeName = 'bg_new'
const oldFolderName = 'Your_Name-NewBackground'
const oldPrice = 2000

const createTscnFileForBackground = (modInnerPath, data) => {
  const tscnFilePath = path.join(modInnerPath, 'overwrites/Scene/Level/background', `${data.codeName}.tscn`);

  const scriptId = randomUUID();

  const textureImports = [];
  const backgroundAssetsPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/new-assets/background`);
  const backgroundFiles = fs.readdirSync(backgroundAssetsPath);
  const layers = [];

  const layersData = data?.layers;
  const orderedFiles = backgroundFiles.filter((file) => file.includes(data.codeName));
  if (layersData) {
    orderedFiles.sort((a, b) => {
      const layerA = layersData[a];
      const layerB = layersData[b];
      return layerA.order - layerB.order;
    });
  }

  orderedFiles.forEach((file, index) => {
    textureImports.push(`[ext_resource type="Texture2D" path="res://mods-unpacked/${data.authorName}-${data.modName}/overwrites/Assets/Deco/Background/${data.codeName}/${file}" id="${index}"]`);

    const layer = `[node name="Layer_${index}" type="Parallax2D" parent="."] 
scroll_offset = Vector2(0, 25)
repeat_size = Vector2(960, 0)
repeat_times = 5
${layersData[file]?.autoscroll ? `autoscroll = Vector2(${layersData[file].autoscroll.x}, ${layersData[file].autoscroll.y})` : ''}

[node name="Sprite2D" type="Sprite2D" parent="Layer_${index}"]
position = Vector2(0, 2)
texture = ExtResource("${index}")
`;
    layers.push(layer);
  });

  const tscnFileContents = `[gd_scene load_steps=8 format=3]

[ext_resource type="Script" path="res://Scene/Level/background/bg.gd" id="${scriptId}"]
${textureImports.join('\n')}

[node name="${data.codeName}" type="Node2D"]
script = ExtResource("${scriptId}")
bg_type = ${data.modId}

${layers.join('\n')}`;

  fs.writeFileSync(tscnFilePath, tscnFileContents, 'utf8');
  console.log(`Created new tscn file at ${tscnFilePath}`);
};

const createNewBackgroundModFromData = () => {
  const data = getModData(BACKGROUND_MOD_FOLDER_NAME);

  const newModId = data.modId;
  const newCodeName = data.codeName;
  const newFolderName = `${data.authorName}-${data.modName}`;

  deleteDuplicateExistingFolder(newFolderName, BACKGROUND_MOD_FOLDER_NAME);
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName, BACKGROUND_MOD_FOLDER_NAME);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  moveNewAssetsToModFolder(newModPath, newCodeName, BACKGROUND_MOD_FOLDER_NAME);
  updateManifestFile(newModPath, data);

  updateTranslations(newModPath, data, 'DECO', 'BG');

  updateDecorationShopPageFileForOneItemMod(newModPath, data, oldModId, oldPrice);

  createTscnFileForBackground(newModPath, data);
};

createNewBackgroundModFromData();

/**
 * Automates as much of the process of creating a new background mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 */

const BACKGROUND_MOD_FOLDER_NAME = 'create-background-mod';

const { randomUUID } = require('crypto');
const fs = require('fs');
const path = require('path');

// Get the data from the data.json file
const getModData = () => {
  return require(`../${BACKGROUND_MOD_FOLDER_NAME}/data.json`);
};

const deleteDuplicateExistingFolder = (newFolderName) => {
  const modInnerPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/${newFolderName}`);
  if (fs.existsSync(modInnerPath)) {
    fs.rmSync(modInnerPath, { recursive: true, force: true });
  }
};

// Create mod duplicate folder and rename it with the new authorName and modName
const duplicateModFolderWithNewName = (newFolderName, oldFolderName) => {
  const modStarterPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/${oldFolderName}`);
  const newModPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/${newFolderName}`);

  // Copy the background-mod-starter folder to the new mod folder
  fs.cpSync(modStarterPath, newModPath, { recursive: true });

  // update inner folder name in the new mod folder
  const newModInnerPath = path.join(newModPath, `/mods-unpacked/${oldFolderName}`);
  const newModInnerPathRenamed = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  fs.renameSync(newModInnerPath, newModInnerPathRenamed);

  return newModPath;
};

// find and replace all instances of the old mod path with the new mod path in the new mod folder
const updateLinksWithOldPath = (newFolderName, oldFolderName, newFolderPath, oldCodeName, newCodeName) => {
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
// Rename files with oldCodeName to newCodeName in the new mod folder
const renameFiles = (oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName) => {
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
const moveNewAssetsToModFolder = (newModInnerPath, newCodeName) => {
  const newAssetsPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/new-assets`);
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // background images
  const backgroundPath = path.join(newAssetsPath, 'background');
  const modBackgroundPath = path.join(newModAssetsPath, `Deco/Background/${newCodeName}`);
  const backgroundFiles = fs.readdirSync(backgroundPath);
  backgroundFiles.forEach((file) => {
    const oldPath = path.join(backgroundPath, file);
    const newPath = path.join(modBackgroundPath, file);
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

// update the manifest.json file with the new mod data
const updateManifestFile = (newModInnerPath, data) => {
  const manifestPath = path.join(newModInnerPath, 'manifest.json');
  const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  manifestData.name = data.modName;
  manifestData.namespace = data.authorName;
  manifestData.description = data.description;
  manifestData.extra.godot.authors = [data.authorName];

  fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2), 'utf8');
};

// update translations
const updateTranslations = (newModInnerPath, data) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv');
  // generate a csv file
  const csvContent = `key,zh,zh-HK,en
DECO_NAME_BG_${data.modId},${data.translations.zh.name},${data.translations['zh-HK'].name},${data.translations.en.name}
DECO_DESC_BG_${data.modId},${data.translations.zh.description},${data.translations['zh-HK'].description},${data.translations.en.description}
  `;

  fs.writeFileSync(translationsPath, csvContent, 'utf8');
  console.log(`Updated translations file: ${translationsPath}`);
};

// update ui_shop_page_decoration.gd with stuff from data.json
const updateShopPageDecorationFile = (modInnerPath, data) => {
  const shopPageDecorationPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_decoration.gd');
  let shopPageDecorationContents = fs.readFileSync(shopPageDecorationPath, 'utf8');

  // replace the old modId with the new modId
  shopPageDecorationContents = shopPageDecorationContents.replace(/DECO_NAME_BG_1000/g, `DECO_NAME_BG_${data.modId}`);
  shopPageDecorationContents = shopPageDecorationContents.replace(/DECO_DESC_BG_1000/g, `DECO_DESC_BG_${data.modId}`);
  shopPageDecorationContents = shopPageDecorationContents.replace(/BG1000_01/g, `BG${data.modId}_01`);
  shopPageDecorationContents = shopPageDecorationContents.replace(/2000/g, data.price);

  fs.writeFileSync(shopPageDecorationPath, shopPageDecorationContents, 'utf8');
  console.log(`Updated shop page decoration file: ${shopPageDecorationPath}`);
};

const createTtscnFileForBackground = (modInnerPath, data) => {
  const tscnFilePath = path.join(modInnerPath, 'overwrites/Scene/Level/background', `${data.codeName}.tscn`);

  const scriptId = randomUUID();

  const textureImports = [];
  const backgroundAssetsPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/new-assets/background`);
  const backgroundFiles = fs.readdirSync(backgroundAssetsPath);
  const layers = [];

  // autoscroll = Vector2(0.5, 0)

  backgroundFiles.forEach((file, index) => {
    const textureId = randomUUID();
    textureImports.push(`[ext_resource type="Texture2D" path="res://mods-unpacked/${data.authorName}-${data.modName}/overwrites/Assets/Deco/Background/${data.codeName}/${file}" id="${textureId}"]`);

    const layer = `[node name="Layer_${index}" type="Parallax2D" parent="."] 
scroll_offset = Vector2(0, 25)
repeat_size = Vector2(960, 0)
repeat_times = 5

[node name="Sprite2D" type="Sprite2D" parent="Layer_${index}"]
position = Vector2(0, 2)
texture = ExtResource("${textureId}")
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
  const data = getModData();

  const oldModId = '1000'
  const newModId = data.modId;
  const oldCodeName = 'bg_new';
  const newCodeName = data.codeName;
  const oldFolderName = 'Sad_Tech-NewBackground';
  const newFolderName = `${data.authorName}-${data.modName}`;

  deleteDuplicateExistingFolder(newFolderName);
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  const modInnerPath = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  moveNewAssetsToModFolder(modInnerPath, newCodeName);
  updateManifestFile(modInnerPath, data);

  updateTranslations(modInnerPath, data);

  updateShopPageDecorationFile(modInnerPath, data);

  createTtscnFileForBackground(modInnerPath, data);
};

createNewBackgroundModFromData();

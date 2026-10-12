import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const updateOverwritesGdFile = (modInnerPath, data, oldModId) => {
  const overwritesGdPath = path.join(modInnerPath, 'overwrites.gd');
  let overwritesGdContents = fs.readFileSync(overwritesGdPath, 'utf8');

  // replace the old modId with the new modId
  overwritesGdContents = overwritesGdContents.replace(new RegExp(oldModId, 'g'), data.modId);

  fs.writeFileSync(overwritesGdPath, overwritesGdContents, 'utf8');
  console.log(`Updated overwrites.gd file: ${overwritesGdPath}`);
};

export const updateBuildManagerFile = (modInnerPath, data, oldModId, oldCodeName) => {
  const buildManagerFilePath = path.join(modInnerPath, 'extension/Manager/build_manager.gd');
  let buildManagerFileContents = fs.readFileSync(buildManagerFilePath, 'utf8');

  // replace the old modId with the new modId
  buildManagerFileContents = buildManagerFileContents.replace(new RegExp(oldModId, 'g'), data.modId);
  buildManagerFileContents = buildManagerFileContents.replace(new RegExp(oldCodeName, 'g'), data.codeName);

  fs.writeFileSync(buildManagerFilePath, buildManagerFileContents, 'utf8');
  console.log(`Updated build manager file: ${buildManagerFilePath}`);
};

// move images from new-assets folder to the new mod folder
export const moveNewAssetsToModFolder = (newModInnerPath, DECORATION_MOD_FOLDER_NAME) => {
  const newAssetsPath = path.join(__dirname, `../../${DECORATION_MOD_FOLDER_NAME}/new-assets`);
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
  try {
    const foodFiles = fs.readdirSync(foodPath)
    foodFiles.forEach((file) => {
      const oldPath = path.join(foodPath, file)
      const newPath = path.join(modDecorationFolderPath, file)
      fs.cpSync(oldPath, newPath, {recursive: true})
    })
  } catch (error) {
    console.log('no food items found for decoration - expected if not a plant')
  }

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

// update ui_shop_page_decoration.gd with stuff from data.json (when the file already consists the item stuff and it just needs to be changes, rather than adding more items)
export const updateDecorationShopPageFileForOneItemMod = (modInnerPath, data, oldModId, oldPrice) => {
  const shopPageDecorationPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_decoration.gd');
  let shopPageDecorationContents = fs.readFileSync(shopPageDecorationPath, 'utf8');

  // replace the old modId with the new modId
  shopPageDecorationContents = shopPageDecorationContents.replace(new RegExp(oldModId, 'g'), data.modId);
  shopPageDecorationContents = shopPageDecorationContents.replace(new RegExp(oldPrice, 'g'), data.price);

  fs.writeFileSync(shopPageDecorationPath, shopPageDecorationContents, 'utf8');
  console.log(`Updated shop page decoration file: ${shopPageDecorationPath}`);
};

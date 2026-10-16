import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// move images from new-assets folder to the new mod folder
export const moveNewAssetsToModFolder = (newModInnerPath, ITEM_MOD_FOLDER_NAME) => {
  const newAssetsPath = path.join(__dirname, `../../${ITEM_MOD_FOLDER_NAME}/new-assets`);
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // food items
  const modDropsFolderPath = path.join(newModAssetsPath, `Drops`)
  const foodPath = path.join(newAssetsPath, 'drop')
  try {
    const foodFiles = fs.readdirSync(foodPath)
    foodFiles.forEach((file) => {
      const oldPath = path.join(foodPath, file)
      const newPath = path.join(modDropsFolderPath, file)
      fs.cpSync(oldPath, newPath, {recursive: true})
    })
  } catch (error) {
    console.log('no drop image/s found for item/s')
  }

  // food icons
  const iconPath = path.join(newAssetsPath, 'icon')
  try {
    const iconFiles = fs.readdirSync(iconPath)
    iconFiles.forEach((file) => {
      const oldPath = path.join(iconPath, file)
      const newPath = path.join(modDropsFolderPath, file)
      fs.cpSync(oldPath, newPath, {recursive: true})
    })
  } catch (error) {
    console.log('no icon image/s found for item/s')
  }

  // shop
  const shopPath = path.join(newAssetsPath, 'shop')
  const modShopPath = path.join(newModAssetsPath, 'UI/PopupUI/Shop/item')
  const shopFiles = fs.readdirSync(shopPath)
  shopFiles.forEach((file) => {
    const oldPath = path.join(shopPath, file)
    const newPath = path.join(modShopPath, file)
    fs.cpSync(oldPath, newPath, { recursive: true })
  })
}

// update ui_shop_page_items.gd with stuff from data.json (when the file already consists the item stuff and it just needs to be changes, rather than adding more items)
export const updateItemsShopPageFileForOneItemMod = (modInnerPath, data, oldModId, oldPrice) => {
  const shopPageItemsPath = path.join(modInnerPath, 'extension/Manager/ui_shop_page_items.gd');
  let shopPageItemsContents = fs.readFileSync(shopPageItemsPath, 'utf8');

  // replace the old modId with the new modId
  shopPageItemsContents = shopPageItemsContents.replace(new RegExp(oldModId, 'g'), data.modId);
  shopPageItemsContents = shopPageItemsContents.replace(new RegExp(oldPrice, 'g'), data.price);

  fs.writeFileSync(shopPageItemsPath, shopPageItemsContents, 'utf8');
  console.log(`Updated shop page items file: ${shopPageItemsPath}`);
};

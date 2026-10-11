import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// move images from new-assets folder to the new mod folder
export const moveNewAssetsToModFolder = (newModInnerPath, newCodeName, BACKGROUND_MOD_FOLDER_NAME) => {
  // delete bg_new folder from Assets/Deco/Background if it exists
  const modBackgroundPath = path.join(newModInnerPath, '/overwrites/Assets/Deco/Background');
  const oldBackgroundPath = path.join(modBackgroundPath, 'bg_new');
  if (fs.existsSync(oldBackgroundPath)) {
    fs.rmSync(oldBackgroundPath, { recursive: true, force: true });
  }

  const newAssetsPath = path.join(__dirname, `../${BACKGROUND_MOD_FOLDER_NAME}/new-assets`);
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // background images
  const backgroundPath = path.join(newAssetsPath, 'background');
  const modBackgroundFolderPath = path.join(newModAssetsPath, `Deco/Background/${newCodeName}`);
  const backgroundFiles = fs.readdirSync(backgroundPath);
  backgroundFiles.forEach((file) => {
    const oldPath = path.join(backgroundPath, file);
    const newPath = path.join(modBackgroundFolderPath, file);
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

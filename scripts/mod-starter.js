/**
 * Automates as much of the process of creating a new mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 * This is developed based off the instructions in the Tiny Pastures Modding Guide, which can be found here: https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb
 */

// Get the data from the data.json file
const getModData = () => {
  return require('../create-mod/data.json');
};

// Create mod duplicate folder and rename it with the new authorName and modName
const duplicateModFolderWithNewName = (data) => {
  const fs = require('fs');
  const path = require('path');
  const modStarterPath = path.join(__dirname, '../create-mod/Sad_Tech-AlveusCow');
  const newModPath = path.join(__dirname, `../create-mod/${data.authorName}-${data.modName}`);

  // Copy the mod-starter folder to the new mod folder
  fs.cpSync(modStarterPath, newModPath, { recursive: true });
  return newModPath;
};

const createNewModFromData = () => {
  const data = getModData();

  const newModPath = duplicateModFolderWithNewName(data);

  console.log(`New mod created at ${newModPath}`);
};

createNewModFromData();

/**
 * Automates as much of the process of creating a new mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 * This is developed based off the instructions in the Tiny Pastures Modding Guide, which can be found here: https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb
 */

const fs = require('fs');
const path = require('path');

// Get the data from the data.json file
const getModData = () => {
  return require('../create-mod/data.json');
};

// Create mod duplicate folder and rename it with the new authorName and modName
const duplicateModFolderWithNewName = (newFolderName, oldFolderName) => {
  const modStarterPath = path.join(__dirname, `../create-mod/${oldFolderName}`);
  const newModPath = path.join(__dirname, `../create-mod/${newFolderName}`);

  // Copy the mod-starter folder to the new mod folder
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
}

// Rename folders with oldFolderName to newFolderName in the new mod folder
// Rename the .tres files in the new mod folder to match the new modId
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
const moveNewAssetsToModFolder = (newModInnerPath) => {
  const newAssetsPath = path.join(__dirname, '../create-mod/new-assets');
  const newModAssetsPath = path.join(newModInnerPath, '/overwrites/Assets');
  // move files from new-assets to new mod assets folder

  // animal spritesheets
  const animalSpritesheetsPath = path.join(newAssetsPath, 'animal-spritesheets');
  const modAnimalSpritesheetsPath = path.join(newModAssetsPath, 'Animals');
  const animalSpritesheetsFiles = fs.readdirSync(animalSpritesheetsPath);
  animalSpritesheetsFiles.forEach((file) => {
    const oldPath = path.join(animalSpritesheetsPath, file);
    const newPath = path.join(modAnimalSpritesheetsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // animal idle spritesheets
  const animalIdleSpritesheetsPath = path.join(newAssetsPath, 'animal-idle-spritesheets');
  const modAnimalIdleSpritesheetsPath = path.join(newModAssetsPath, 'UI/PopupUI/AnimalIdle');
  const animalIdleSpritesheetsFiles = fs.readdirSync(animalIdleSpritesheetsPath);
  animalIdleSpritesheetsFiles.forEach((file) => {
    const oldPath = path.join(animalIdleSpritesheetsPath, file);
    const newPath = path.join(modAnimalIdleSpritesheetsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // portraits
  const portraitsPath = path.join(newAssetsPath, 'portraits');
  const modPortraitsPath = path.join(newModAssetsPath, 'UI/PopupUI/Portrait');
  const portraitFiles = fs.readdirSync(portraitsPath);
  portraitFiles.forEach((file) => {
    const oldPath = path.join(portraitsPath, file);
    const newPath = path.join(modPortraitsPath, file);
    fs.cpSync(oldPath, newPath, { recursive: true });
  });

  // shop
  const shopPath = path.join(newAssetsPath, 'shop');
  const modShopPath = path.join(newModAssetsPath, 'UI/PopupUI/Shop/animal');
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

// update tres files
const updateTresFiles = (newModInnerPath, newModId, data) => {
  const animalDataTresFilePath = path.join(newModInnerPath, `overwrites/Data/animal_data/${newModId}.tres`);
  const packDataTresFilePath = path.join(newModInnerPath, `overwrites/Data/pack_data/${newModId}.tres`);

  // pack data
  let packDataTresFileContents = fs.readFileSync(packDataTresFilePath, 'utf8');
  packDataTresFileContents = packDataTresFileContents.replace(/type_id = .*/, `type_id = ${data.modId}`);
  packDataTresFileContents = packDataTresFileContents.replace(/name = ".*"/, `name = "${data.modName}"`);
  packDataTresFileContents = packDataTresFileContents.replace(/animal_id = .*/, `animal_id = ${data.modId}`);
  packDataTresFileContents = packDataTresFileContents.replace(/price = .*/, `price = ${data.price}`);
  console.log(`Updated pack data tres file: ${packDataTresFilePath}`);
  fs.writeFileSync(packDataTresFilePath, packDataTresFileContents, 'utf8');

  // animal data
  let animalDataTresFileContents = fs.readFileSync(animalDataTresFilePath, 'utf8');
  animalDataTresFileContents = animalDataTresFileContents.replace(/name = ".*"/, `name = "${data.modName}"`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/code_name = ".*"/, `code_name = "${data.codeName}"`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/type_id = .*/, `type_id = ${data.modId}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/adult_price = .*/, `adult_price = [${data.adult_price}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/child_price = .*/, `child_price = [${data.child_price}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/adult_time = .*/, `adult_time = [${data.adult_time}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/drop_time = .*/, `drop_time = [${data.drop_time}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/second_coin = .*/, `second_coin = [${data.second_coin}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/poop_time = .*/, `poop_time = ${data.poop_time}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/max_hunger = .*/, `max_hunger = ${data.max_hunger}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/hungry_speed = .*/, `hungry_speed = ${data.hungry_speed}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/poop_endure = .*/, `poop_endure = ${data.poop_endure}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/max_move_speed = .*/, `max_move_speed = ${data.max_move_speed}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/min_move_speed = .*/, `min_move_speed = ${data.min_move_speed}`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/color_pool = .*/, `color_pool = [${data.color_pool}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/is_fish = .*/, `is_fish = ${data.is_fish}`);
  fs.writeFileSync(animalDataTresFilePath, animalDataTresFileContents, 'utf8');
};

// update translations
const updateTranslations = (newModInnerPath, data) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv');
  // generate a csv file
  const csvContent = `key,zh,zh-HK,en
ANIMAL_NAME_${data.modId},${data.translations.zh.name},${data.translations['zh-HK'].name},${data.translations.en.name}
ANIMAL_DESC_${data.modId},${data.translations.zh.description},${data.translations['zh-HK'].description},${data.translations.en.description}
  `;

  fs.writeFileSync(translationsPath, csvContent, 'utf8');
  console.log(`Updated translations file: ${translationsPath}`);
};

const getPngSize = (filePath) => {
  // We only need the first 24 bytes of the file to get PNG dimensions
  const buffer = Buffer.alloc(24); 
  
  // Open the file in read mode
  const fileDescriptor = fs.openSync(filePath, 'r');
  
  // Read the first 24 bytes into our buffer, then close the file
  fs.readSync(fileDescriptor, buffer, 0, 24, 0);
  fs.closeSync(fileDescriptor);

  // Verify the file is actually a PNG by checking its magic number (signature)
  const pngSignature = '89504e470d0a1a0a';
  if (buffer.toString('hex', 0, 8) !== pngSignature) {
      throw new Error('Not a valid PNG file!');
  }

  // In a PNG, width is stored at byte 16 (4 bytes long) 
  // and height is stored at byte 20 (4 bytes long) in Big Endian format.
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);

  return { width, height };
};

const getIndexFromFrameCoordinates = (frame, spritesX) => {
  const x = frame[0];
  const y = frame[1];
  return y * spritesX + x;
};

const getAnimationDataFromData = (animData, spritesX) => {
  let lengthLine, stepLine, timesLine, transitionsLine, valuesLine;
  if(animData?.startFrame && animData?.endFrame) {
    const startX = animData.startFrame[0];
    const endX = animData.endFrame[0];
    const startY = animData.startFrame[1];
    const endY = animData.endFrame[1];
    const xLength = endX - startX + 1;
    const yLength = endY - startY + 1;
    const framesNo = (spritesX * yLength) - startX - (spritesX - endX - 1);
    const lengthSeconds = framesNo / animData.fps;
    const step = 1 / animData.fps;
    const startIndex = getIndexFromFrameCoordinates(animData.startFrame, spritesX);

    lengthLine = `length = ${lengthSeconds}`;
    stepLine = `step = ${step}`;
    timesLine = `"times": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => (i * step).toFixed(2)).join(', ')}),`;
    transitionsLine = `"transitions": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => 1).join(', ')}),`;
    valuesLine = `"values": [${Array.from({ length: framesNo }, (_, i) => startIndex + i).join(', ')}]`;
  } else if (animData?.frames) {
    const framesNo = animData.frames.length;
    const lengthSeconds = framesNo / animData.fps;
    const step = 1 / animData.fps;

    lengthLine = `length = ${lengthSeconds}`;
    stepLine = `step = ${step}`;
    timesLine = `"times": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => (i * step).toFixed(2)).join(', ')}),`;
    transitionsLine = `"transitions": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => 1).join(', ')}),`;
    valuesLine = `"values": [${animData.frames.map((frame) => getIndexFromFrameCoordinates(frame, spritesX)).join(', ')}]`;
  }
  return { lengthLine, stepLine, timesLine, transitionsLine, valuesLine };
}

// update scene .tscn file (config for animal animations)
const updateAnimalAnimations = (newModInnerPath, data) => {
  const animationsPath = path.join(newModInnerPath, `overwrites/Scene/Level/Animals/${data.codeName}.tscn`);
  let contents = fs.readFileSync(animationsPath, 'utf8');

  const spritesheet = path.join(newModInnerPath, `overwrites/Assets/Animals/${data.codeName}_0_0.png`);
  // get width and height of the spritesheet
  const dimensions = getPngSize(spritesheet);
  const width = dimensions.width;
  const height = dimensions.height;
  const spritesX = width/data.sprite.width;
  const spritesY = height/data.sprite.height;

  const lines = contents.split(/\r?\n/);

  // replace "Cow" with the new mod name in the node name line
  lines[762] = `[node name="${data.modName}" type="Node2D" groups=["ANIMAL"]]`;

  // eat
  const eat = data.animations.eat;
  const eatLines = getAnimationDataFromData(eat, spritesX);
  lines[69] = eatLines.lengthLine;
  lines[70] = eatLines.stepLine;
  lines[78] = eatLines.timesLine;
  lines[79] = eatLines.transitionsLine;
  lines[81] = eatLines.valuesLine;

  // idle_0
  const idle_0 = data.animations.idle_0;
  const idle0Lines = getAnimationDataFromData(idle_0, spritesX);
  lines[86] = idle0Lines.lengthLine;
  lines[88] = idle0Lines.stepLine;
  lines[96] = idle0Lines.timesLine;
  lines[97] = idle0Lines.transitionsLine;
  lines[99] = idle0Lines.valuesLine;

  // idle_1_end
  const idle_1_end = data.animations.idle_1_end;
  const idle1EndLines = getAnimationDataFromData(idle_1_end, spritesX);
  lines[104] = idle1EndLines.lengthLine;
  lines[105] = idle1EndLines.stepLine;
  lines[113] = idle1EndLines.timesLine;
  lines[114] = idle1EndLines.transitionsLine;
  lines[116] = idle1EndLines.valuesLine;

  // idle_1_loop
  const idle_1_loop = data.animations.idle_1_loop;
  const idle1LoopLines = getAnimationDataFromData(idle_1_loop, spritesX);
  lines[121] = idle1LoopLines.lengthLine;
  lines[123] = idle1LoopLines.stepLine;
  lines[131] = idle1LoopLines.timesLine;
  lines[132] = idle1LoopLines.transitionsLine;
  lines[134] = idle1LoopLines.valuesLine;

  // idle_1_pre
  const idle_1_pre = data.animations.idle_1_pre;
  const idle1PreLines = getAnimationDataFromData(idle_1_pre, spritesX);
  lines[139] = idle1PreLines.lengthLine;
  lines[140] = idle1PreLines.stepLine;
  lines[148] = idle1PreLines.timesLine;
  lines[149] = idle1PreLines.transitionsLine;
  lines[151] = idle1PreLines.valuesLine;

  // interact_0
  const interact_0 = data.animations.interact_0;
  const interact0Lines = getAnimationDataFromData(interact_0, spritesX);
  lines[156] = interact0Lines.lengthLine;
  lines[157] = interact0Lines.stepLine;
  lines[165] = interact0Lines.timesLine;
  lines[166] = interact0Lines.transitionsLine;
  lines[168] = interact0Lines.valuesLine;

  // move
  const move = data.animations.move;
  const moveLines = getAnimationDataFromData(move, spritesX);
  lines[173] = moveLines.lengthLine;
  lines[175] = moveLines.stepLine;
  lines[183] = moveLines.timesLine;
  lines[184] = moveLines.transitionsLine;
  lines[186] = moveLines.valuesLine;

  // sleep_end
  const sleep_end = data.animations.sleep_end;
  const sleepEndLines = getAnimationDataFromData(sleep_end, spritesX);
  lines[191] = sleepEndLines.lengthLine;
  lines[192] = sleepEndLines.stepLine;
  lines[200] = sleepEndLines.timesLine;
  lines[201] = sleepEndLines.transitionsLine;
  lines[203] = sleepEndLines.valuesLine;

  // sleep_loop
  const sleep_loop = data.animations.sleep_loop;
  const sleepLoopLines = getAnimationDataFromData(sleep_loop, spritesX);
  lines[208] = sleepLoopLines.lengthLine;
  lines[210] = sleepLoopLines.stepLine;
  lines[218] = sleepLoopLines.timesLine;
  lines[219] = sleepLoopLines.transitionsLine;
  lines[221] = sleepLoopLines.valuesLine;

  // sleep_pre
  const sleep_pre = data.animations.sleep_pre;
  const sleepPreLines = getAnimationDataFromData(sleep_pre, spritesX);
  lines[226] = sleepPreLines.lengthLine;
  lines[227] = sleepPreLines.stepLine;
  lines[235] = sleepPreLines.timesLine;
  lines[236] = sleepPreLines.transitionsLine;
  lines[238] = sleepPreLines.valuesLine;

  fs.writeFileSync(animationsPath, lines.join('\n'), 'utf8');
}

const createNewModFromData = () => {
  const data = getModData();

  const oldModId = '2989'
  const newModId = data.modId;
  const oldCodeName = 'alveus_cow';
  const newCodeName = data.codeName;
  const oldFolderName = 'Sad_Tech-AlveusCow';
  const newFolderName = `${data.authorName}-${data.modName}`;
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  const modInnerPath = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  moveNewAssetsToModFolder(modInnerPath);
  updateManifestFile(modInnerPath, data);
  updateTresFiles(modInnerPath, newModId, data);
  updateTranslations(modInnerPath, data);
  updateAnimalAnimations(modInnerPath, data);

  // new_cow.res - generate a gd file to run inside godot (creates idle animation and saves it to the overwrites/Animation folder) or do it in godot
  console.log(`New mod created at ${newModPath}`);
};

createNewModFromData();

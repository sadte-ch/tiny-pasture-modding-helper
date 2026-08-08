/**
 * Automates as much of the process of creating a new animal mod for tiny pasture as possible.
 * It requires that you put all your new assets in the "new-assets" folder and that you have filled out the data.json file with the correct information for your mod.
 * It will create a new folder with the updated files that you can then open in Godot to finish off the mod and test it.
 * This is developed based off the instructions in the Tiny Pastures Modding Guide, which can be found here: https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb
 */

import { updateTranslations } from './shared/translations.js';
import { getModData, updateManifestFile } from './shared/data.js';
import { deleteDuplicateExistingFolder } from './shared/files.js';
import { updateLinksWithOldPath, renameFiles, duplicateModFolderWithNewName } from './shared/files.js';

const ANIMAL_MOD_FOLDER_NAME = 'create-animal-mod';

const fs = require('fs');
const path = require('path');

const addLinksForAdditionalVariations = (newModInnerPath, data) => {
  const variationsNo = data.variations_no;
  const codeName = data.codeName;
  const newModId = data.modId;

  const ogAssetsPath = `res://Assets/`;
  const assetsPath = `res://mods-unpacked/${data.authorName}-${data.modName}/overwrites/Assets/`;
  const animalsPath = `${assetsPath}Animals/`;
  const idlePath = `${assetsPath}UI/PopupUI/AnimalIdle/`;
  const portraitPath = `${assetsPath}UI/PopupUI/Portrait/`;
  const ogAnimalsPath = `${ogAssetsPath}Animals/`;
  const ogIdlePath = `${ogAssetsPath}UI/PopupUI/AnimalIdle/`;
  const ogPortraitPath = `${ogAssetsPath}UI/PopupUI/Portrait/`;

  const overwritesFilePath = path.join(newModInnerPath, 'overwrites.gd');
  let overwritesFileContents = fs.readFileSync(overwritesFilePath, 'utf8');
  const lines = overwritesFileContents.split(/\r?\n/);

  const newOverwritesPathLines = [];
  const animalVariableLines = [];

  for (let i = 1; i <= variationsNo - 1; i++) {
    const variationNameJuvenile = `${codeName}_${i}_0`;
    const variationNameAdult = `${codeName}_${i}_1`;

    const animalJuvenilePath = `"${animalsPath}${variationNameJuvenile}.png"`;
    const animalAdultPath = `"${animalsPath}${variationNameAdult}.png"`;
    const animalIdleJuvenilePath = `"${idlePath}idle_${variationNameJuvenile}.png"`;
    const animalIdleAdultPath = `"${idlePath}idle_${variationNameAdult}.png"`;
    const animalPortraitJuvenilePath = `"${portraitPath}portrait_${variationNameJuvenile}.png"`;
    const animalPortraitAdultPath = `"${portraitPath}portrait_${variationNameAdult}.png"`;
    const ogAnimalJuvenilePath = `"${ogAnimalsPath}${variationNameJuvenile}.png"`;
    const ogAnimalAdultPath = `"${ogAnimalsPath}${variationNameAdult}.png"`;
    const ogAnimalIdleJuvenilePath = `"${ogIdlePath}idle_${variationNameJuvenile}.png"`;
    const ogAnimalIdleAdultPath = `"${ogIdlePath}idle_${variationNameAdult}.png"`;
    const ogAnimalPortraitJuvenilePath = `"${ogPortraitPath}portrait_${variationNameJuvenile}.png"`;
    const ogAnimalPortraitAdultPath = `"${ogPortraitPath}portrait_${variationNameAdult}.png"`;

    // overwrites_path array
    newOverwritesPathLines.push(`\t${animalJuvenilePath},`);
    newOverwritesPathLines.push(`\t${animalAdultPath},`);
    newOverwritesPathLines.push(`\t${animalIdleJuvenilePath},`);
    newOverwritesPathLines.push(`\t${animalIdleAdultPath},`);
    newOverwritesPathLines.push(`\t${animalPortraitJuvenilePath},`);
    newOverwritesPathLines.push(`\t${animalPortraitAdultPath},`);

    // animal
    animalVariableLines.push(`\tvar animal_${i}_0 = preload(${animalJuvenilePath})`);
    animalVariableLines.push(`\tvar animal_${i}_1 = preload(${animalAdultPath})`);
    animalVariableLines.push(`\tanimal_${i}_0.take_over_path(${ogAnimalJuvenilePath})`);
    animalVariableLines.push(`\tanimal_${i}_1.take_over_path(${ogAnimalAdultPath})`);

    // portrait
    animalVariableLines.push(`\tvar animal_portrait_${i}_0 = preload(${animalPortraitJuvenilePath})`);
    animalVariableLines.push(`\tvar animal_portrait_${i}_1 = preload(${animalPortraitAdultPath})`);
    animalVariableLines.push(`\tanimal_portrait_${i}_0.take_over_path(${ogAnimalPortraitJuvenilePath})`);
    animalVariableLines.push(`\tanimal_portrait_${i}_1.take_over_path(${ogAnimalPortraitAdultPath})`);

    // idle
    animalVariableLines.push(`\tvar animal_idle_${i}_0 = preload(${animalIdleJuvenilePath})`);
    animalVariableLines.push(`\tvar animal_idle_${i}_1 = preload(${animalIdleAdultPath})`);
    animalVariableLines.push(`\tanimal_idle_${i}_0.take_over_path(${ogAnimalIdleJuvenilePath})`);
    animalVariableLines.push(`\tanimal_idle_${i}_1.take_over_path(${ogAnimalIdleAdultPath})`);
  }
  // update overwrites_path, append path to every variation asset (animal, idle, portrait)
  lines.splice(12, 0, ...newOverwritesPathLines);
  lines.push(...animalVariableLines);
  fs.writeFileSync(overwritesFilePath, lines.join('\n'), 'utf8');
};

// move images from new-assets folder to the new mod folder
const moveNewAssetsToModFolder = (newModInnerPath) => {
  const newAssetsPath = path.join(__dirname, `../${ANIMAL_MOD_FOLDER_NAME}/new-assets`);
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
  animalDataTresFileContents = animalDataTresFileContents.replace(/color_pool = .*/, `color_pool = [${Array.from({ length: data.variations_no }, (_, i) => i).join(', ')}]`);
  animalDataTresFileContents = animalDataTresFileContents.replace(/is_fish = .*/, `is_fish = ${data.is_fish}`);
  fs.writeFileSync(animalDataTresFilePath, animalDataTresFileContents, 'utf8');
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

const getFramesDataFromAnimationData = (animData, spritesX) => {
  let framesNo, lengthSeconds, step, startIndex;
  if(animData?.startFrame && animData?.endFrame) {
    const startX = animData.startFrame[0];
    const endX = animData.endFrame[0];
    const startY = animData.startFrame[1];
    const endY = animData.endFrame[1];
    const xLength = endX - startX + 1;
    const yLength = endY - startY + 1;
    framesNo = (spritesX * yLength) - startX - (spritesX - endX - 1);
    startIndex = getIndexFromFrameCoordinates(animData.startFrame, spritesX);
  } else if (animData?.frames) {
    framesNo = animData.frames.length;
    startIndex = getIndexFromFrameCoordinates(animData.frames[0], spritesX);
  }
  lengthSeconds = framesNo / animData.fps;
  step = 1 / animData.fps;
  return {framesNo, lengthSeconds, step, startIndex};
}

const getAnimationLinesFromData = (animData, spritesX) => {
  const {framesNo, lengthSeconds, step, startIndex} = getFramesDataFromAnimationData(animData, spritesX);
  const lengthLine = `length = ${lengthSeconds}`;
  const stepLine = `step = ${step}`;
  const timesLine = `"times": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => (i * step).toFixed(2)).join(', ')}),`;
  const transitionsLine = `"transitions": PackedFloat32Array(${Array.from({ length: framesNo }, (_, i) => 1).join(', ')}),`;
  const valuesLine = `"values": [${Array.from({ length: framesNo }, (_, i) => animData?.frames ? getIndexFromFrameCoordinates(animData.frames[i], spritesX) : startIndex + i).join(', ')}]`;
  return { lengthLine, stepLine, timesLine, transitionsLine, valuesLine };
}

const getSpritesheetDimensions = (newModInnerPath, data, filePath) => {
  const spritesheet = path.join(newModInnerPath, filePath);
  // get width and height of the spritesheet
  const dimensions = getPngSize(spritesheet);
  const width = dimensions.width;
  const height = dimensions.height;
  const spritesX = width/data.sprite.width;
  const spritesY = height/data.sprite.height;
  return { width, height, spritesX, spritesY };
};

// update scene .tscn file (config for animal animations)
const updateAnimalAnimations = (newModInnerPath, data) => {
  const animationsPath = path.join(newModInnerPath, `overwrites/Scene/Level/Animals/${data.codeName}.tscn`);
  let contents = fs.readFileSync(animationsPath, 'utf8');

  const { spritesX, spritesY } = getSpritesheetDimensions(newModInnerPath, data, `overwrites/Assets/Animals/${data.codeName}_0_0.png`);

  const lines = contents.split(/\r?\n/);

  // replace "Cow" with the new mod name in the node name line
  lines[762] = `[node name="${data.modName}" type="Node2D" groups=["ANIMAL"]]`;
  lines[781] = `hframes = ${spritesX}` // hframes
  lines[782] = `vframes = ${spritesY}` // vframes

  // eat
  const eat = data.animations.eat;
  const eatLines = getAnimationLinesFromData(eat, spritesX);
  lines[69] = eatLines.lengthLine;
  lines[70] = eatLines.stepLine;
  lines[78] = eatLines.timesLine;
  lines[79] = eatLines.transitionsLine;
  lines[81] = eatLines.valuesLine;

  // idle_0
  const idle_0 = data.animations.idle_0;
  const idle0Lines = getAnimationLinesFromData(idle_0, spritesX);
  lines[86] = idle0Lines.lengthLine;
  lines[88] = idle0Lines.stepLine;
  lines[96] = idle0Lines.timesLine;
  lines[97] = idle0Lines.transitionsLine;
  lines[99] = idle0Lines.valuesLine;

  // idle_1_end
  const idle_1_end = data.animations.idle_1_end;
  const idle1EndLines = getAnimationLinesFromData(idle_1_end, spritesX);
  lines[104] = idle1EndLines.lengthLine;
  lines[105] = idle1EndLines.stepLine;
  lines[113] = idle1EndLines.timesLine;
  lines[114] = idle1EndLines.transitionsLine;
  lines[116] = idle1EndLines.valuesLine;

  // idle_1_loop
  const idle_1_loop = data.animations.idle_1_loop;
  const idle1LoopLines = getAnimationLinesFromData(idle_1_loop, spritesX);
  lines[121] = idle1LoopLines.lengthLine;
  lines[123] = idle1LoopLines.stepLine;
  lines[131] = idle1LoopLines.timesLine;
  lines[132] = idle1LoopLines.transitionsLine;
  lines[134] = idle1LoopLines.valuesLine;

  // idle_1_pre
  const idle_1_pre = data.animations.idle_1_pre;
  const idle1PreLines = getAnimationLinesFromData(idle_1_pre, spritesX);
  lines[139] = idle1PreLines.lengthLine;
  lines[140] = idle1PreLines.stepLine;
  lines[148] = idle1PreLines.timesLine;
  lines[149] = idle1PreLines.transitionsLine;
  lines[151] = idle1PreLines.valuesLine;

  // interact_0
  const interact_0 = data.animations.interact_0;
  const interact0Lines = getAnimationLinesFromData(interact_0, spritesX);
  lines[156] = interact0Lines.lengthLine;
  lines[157] = interact0Lines.stepLine;
  lines[165] = interact0Lines.timesLine;
  lines[166] = interact0Lines.transitionsLine;
  lines[168] = interact0Lines.valuesLine;

  // move
  const move = data.animations.move;
  const moveLines = getAnimationLinesFromData(move, spritesX);
  lines[173] = moveLines.lengthLine;
  lines[175] = moveLines.stepLine;
  lines[183] = moveLines.timesLine;
  lines[184] = moveLines.transitionsLine;
  lines[186] = moveLines.valuesLine;

  // sleep_end
  const sleep_end = data.animations.sleep_end;
  const sleepEndLines = getAnimationLinesFromData(sleep_end, spritesX);
  lines[191] = sleepEndLines.lengthLine;
  lines[192] = sleepEndLines.stepLine;
  lines[200] = sleepEndLines.timesLine;
  lines[201] = sleepEndLines.transitionsLine;
  lines[203] = sleepEndLines.valuesLine;

  // sleep_loop
  const sleep_loop = data.animations.sleep_loop;
  const sleepLoopLines = getAnimationLinesFromData(sleep_loop, spritesX);
  lines[208] = sleepLoopLines.lengthLine;
  lines[210] = sleepLoopLines.stepLine;
  lines[218] = sleepLoopLines.timesLine;
  lines[219] = sleepLoopLines.transitionsLine;
  lines[221] = sleepLoopLines.valuesLine;

  // sleep_pre
  const sleep_pre = data.animations.sleep_pre;
  const sleepPreLines = getAnimationLinesFromData(sleep_pre, spritesX);
  lines[226] = sleepPreLines.lengthLine;
  lines[227] = sleepPreLines.stepLine;
  lines[235] = sleepPreLines.timesLine;
  lines[236] = sleepPreLines.transitionsLine;
  lines[238] = sleepPreLines.valuesLine;

  fs.writeFileSync(animationsPath, lines.join('\n'), 'utf8');
}

// generate a gd file to run inside godot (add a shop idle animation animation to opened_pack.tscn) which you can then export as a .res file to put in the mod folder
const updateGdForAnimalResFile = (newModInnerPath, data, newFolderName) => {
  const gdFilePath = path.join(__dirname, `../${ANIMAL_MOD_FOLDER_NAME}/generate_res_file.gd`);

  // update the gd file with the new mod data
  let gdFileContents = fs.readFileSync(gdFilePath, 'utf8');
  const spriteWidth = data.sprite.width;
  const spriteHeight = data.sprite.height;
  gdFileContents = gdFileContents.replace(/var tex_path = ".*"/, `var tex_path = "res://mods-unpacked/${newFolderName}/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_${data.codeName}_0_0.png"`);
  gdFileContents = gdFileContents.replace(/atlas_tex.region = Rect2\(.*\)/, `atlas_tex.region = Rect2(0, 0, ${spriteWidth}, ${spriteHeight})`);
  gdFileContents = gdFileContents.replace(/var anim_name = ".*"/, `var anim_name = "${data.codeName}"`);
  gdFileContents = gdFileContents.replace(/new_anim.resource_name = ".*"/, `new_anim.resource_name = "${data.codeName}"`);
  const { spritesX, width, height } = getSpritesheetDimensions(newModInnerPath, data, `overwrites/Assets/UI/PopupUI/AnimalIdle/idle_${data.codeName}_0_0.png`);
  const {step, lengthSeconds, framesNo} = getFramesDataFromAnimationData(data.shop_idle_animation, spritesX);
  gdFileContents = gdFileContents.replace(/new_anim.length = .*/, `new_anim.length = ${lengthSeconds}`);
  gdFileContents = gdFileContents.replace(/new_anim.step = .*/, `new_anim.step = ${step}`);
  const timesLine = `var times = [${Array.from({ length: framesNo }, (_, i) => (i * step).toFixed(2)).join(', ')}]`;
  const positionsLine = `var rect_x_positions = [${!data.shop_idle_animation.frames ? Array.from({ length: framesNo }, (_, i) => i*spriteWidth).join(', ') : data.shop_idle_animation.frames.map(f => f[0] * spriteWidth).join(', ')}]`;
  const rectLine = `var rect = Rect2(rect_x_positions[i], 0, ${spriteWidth}, ${spriteHeight})`;
  gdFileContents = gdFileContents.replace(/var times = .*/, timesLine);
  gdFileContents = gdFileContents.replace(/var rect_x_positions = .*/, positionsLine);
  gdFileContents = gdFileContents.replace(/var rect = .*/, rectLine);
  fs.writeFileSync(gdFilePath, gdFileContents, 'utf8');
}

const createNewAnimalModFromData = () => {
  const data = getModData(ANIMAL_MOD_FOLDER_NAME);

  const oldModId = '2989'
  const newModId = data.modId;
  const oldCodeName = 'alveus_cow';
  const newCodeName = data.codeName;
  const oldFolderName = 'Sad_Tech-AlveusCow';
  const newFolderName = `${data.authorName}-${data.modName}`;
  deleteDuplicateExistingFolder(newFolderName, ANIMAL_MOD_FOLDER_NAME);
  const newModPath = duplicateModFolderWithNewName(newFolderName, oldFolderName, ANIMAL_MOD_FOLDER_NAME);
  updateLinksWithOldPath(newFolderName, oldFolderName, newModPath, oldCodeName, newCodeName);
  renameFiles(oldModId, newModId, newModPath, newFolderName, oldFolderName, oldCodeName, newCodeName);

  const modInnerPath = path.join(newModPath, `/mods-unpacked/${newFolderName}`);
  moveNewAssetsToModFolder(modInnerPath);
  addLinksForAdditionalVariations(modInnerPath, data);
  updateManifestFile(modInnerPath, data);
  updateTresFiles(modInnerPath, newModId, data);
  updateTranslations(modInnerPath, data, 'ANIMAL');
  updateAnimalAnimations(modInnerPath, data);
  updateGdForAnimalResFile(modInnerPath, data, newFolderName);

  console.log(`New mod created at ${newModPath}`);
};

createNewAnimalModFromData();

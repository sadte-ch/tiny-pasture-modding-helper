
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Get the data from the data.json file
export const getModData = (pathname) => {
  const dataPath = path.join(__dirname, `../../${pathname}/data.json`);
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};

// update the manifest.json file with the new mod data
export const updateManifestFile = (newModInnerPath, data) => {
  const manifestPath = path.join(newModInnerPath, 'manifest.json');
  const manifestData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  manifestData.name = data.modName;
  manifestData.namespace = data.authorName;
  manifestData.description = data.description;
  manifestData.extra.godot.authors = [data.authorName];

  fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2), 'utf8');
};
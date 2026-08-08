// Get the data from the data.json file
export const getModData = (path) => {
  return require(`../${path}/data.json`);
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
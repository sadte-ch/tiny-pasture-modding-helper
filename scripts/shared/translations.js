// update translations
const updateTranslations = (newModInnerPath, data, prefix, suffix) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv');
  // generate a csv file
  const nameKey = `${prefix}_NAME${suffix ? `_${suffix}` : ''}_${data.modId}`;
  const descKey = `${prefix}_DESC${suffix ? `_${suffix}` : ''}_${data.modId}`;
  const csvContent = `key,zh,zh-HK,en
${nameKey},${data.translations.zh.name},${data.translations['zh-HK'].name},${data.translations.en.name}
${descKey},${data.translations.zh.description},${data.translations['zh-HK'].description},${data.translations.en.description}`;

  fs.writeFileSync(translationsPath, csvContent, 'utf8');
  console.log(`Updated translations file: ${translationsPath}`);
};

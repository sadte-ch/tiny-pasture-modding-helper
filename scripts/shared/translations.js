import fs from 'fs';
import path from 'path';

// update translations
export const updateTranslations = (newModInnerPath, data, prefix, suffix) => {
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

// update translations for a mod containing multiple items
export const updateTranslationsPack = (newModInnerPath, data, prefix, suffix) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv');
  // generate a csv file
  const csvContent = `key,zh,zh-HK,en
${data.pack_items.map((item, index) => {
  const nameKey = `${prefix}_NAME${suffix ? `_${suffix}` : ''}_${data.modId}${index}`
  const descKey = `${prefix}_DESC${suffix ? `_${suffix}` : ''}_${data.modId}${index}`
  
  return `${nameKey},${item.translations.zh.name},${item.translations['zh-HK'].name},${item.translations.en.name}
${descKey},${item.translations.zh.description},${item.translations['zh-HK'].description},${item.translations.en.description}`  
}).join('\n')}`

  fs.writeFileSync(translationsPath, csvContent, 'utf8');
  console.log(`Updated pack translations file: ${translationsPath}`);
};

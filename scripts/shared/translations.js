import fs from 'fs'
import path from 'path'

export const localeKeys = ['zh', 'zh_HK', 'en', 'de', 'es', 'fr', 'ja', 'ko', 'la', 'pl', 'pt', 'pt_BR', 'ru', 'th', 'tr']

// update translations
export const updateTranslations = (newModInnerPath, data, prefix, suffix) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv')
  
  const translations = data.translations
  
  if (Object.values(translations).length < 1) {
    console.error('No translations found.')
    return
  }
  
  // generate a csv file
  const nameKey = `${prefix}_NAME${suffix ? `_${suffix}` : ''}_${data.modId}`
  const descKey = `${prefix}_DESC${suffix ? `_${suffix}` : ''}_${data.modId}`
  const nameValues = localeKeys.map(key => translations[key]?.name || '')
  const descValues = localeKeys.map(key => translations[key]?.description || '')
  
  const csvContent = `key,${localeKeys.join(',')}
${nameKey},${nameValues.join(',')}
${descKey},${descValues.join(',')}`

  fs.writeFileSync(translationsPath, csvContent, 'utf8')
  console.log(`Updated translations file: ${translationsPath}`)
};

// update translations for a mod containing multiple items
export const updateTranslationsPack = (newModInnerPath, data, prefix, suffix) => {
  const translationsPath = path.join(newModInnerPath, 'translations/translations.csv')

  if (Object.values(translations).length < 1) {
    console.error('No translations found.')
    return
  }
  
  // generate a csv file
  const csvContent = `key,${localeKeys.join(',')}
${data.pack_items.map((item, index) => {
  const translations = item.translations
  const nameKey = `${prefix}_NAME${suffix ? `_${suffix}` : ''}_${data.modId}${index}`
  const descKey = `${prefix}_DESC${suffix ? `_${suffix}` : ''}_${data.modId}${index}`
  const nameValues = localeKeys.map(key => translations[key]?.name || '')
  const descValues = localeKeys.map(key => translations[key]?.description || '')
  
  return `${nameKey},${nameValues.join(',')}
${descKey},${descValues.join(',')}`
}).join('\n')}`

  fs.writeFileSync(translationsPath, csvContent, 'utf8');
  console.log(`Updated pack translations file: ${translationsPath}`);
};

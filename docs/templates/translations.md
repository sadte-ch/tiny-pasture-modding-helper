# A quick guide to adding translations to the data.json file

It is stated in the Tiny Pasture [official modding docs](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#BITfd04tqowbH9xgAHscTLC2nK6) that they recommend adding at least translations for both English and Chinese, but you can only add translations for one language if you really want.

## Adding translations
In my mods I usually do en, zh and zh_HK (as seen in my data.json templates)
You can choose to do the same or delete/add more as you wish

```
"translations": {
  "en": {
    "name": "Decoration 1",
    "description": "Add decoration 1"
  },
  "zh": {
    "name": "装饰 1",
    "description": "添加装饰 1"
  },
  "zh-HK": {
    "name": "装饰 1",
    "description": "添加装饰 1"
  }
}
```

If you wanted to do just English, the json would look like this:
```
"translations": {
  "en": {
    "name": "Decoration 1",
    "description": "Add decoration 1"
  }
}
```

If you wanted to do German and French, the json would look like this:
```
"translations": {
  "de": {
    "name": "Dekoration 1",
    "description": "Dekoration 1 hinzufügen"
  },
  "fr": {
    "name": "Décoration 2",
    "description": "Ajouter la décoration 2"
  }
}
```

You can switch these values out and add as many localizations as you want to the json


## Languages supported by Tiny Pasture:

- en - English
- zh - Chinese
- zh_HK - Chinese (Hong Kong)
- de - German
- es - Spanish
- fr - French
- ja - Japanese 
- ko - Korean 
- la - Latin 
- pl - Polish 
- pt - Portuguese 
- pt_BR - Portuguese (Brazil)
- ru - Russian 
- th - Thai 
- tr - Turkish

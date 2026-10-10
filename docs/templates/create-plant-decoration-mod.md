# Create Plant Decoration Mod
Add a single plant decoration to the game. Plant decorations grow in 4 stages and produce an edible food item when it's ready.
It doesn't actually need to be a plant. You could also use this mod to create, for example, a bee hive that produces honey.

## Steps:

1. [Choose your mod name and ID](#choose-your-mod-name-and-id)
2. [Create your plant decoration assets](#create-your-plant-decoration-assets)
3. [Add your assets](#add-your-assets)
4. [Update data.json](#update-datajson)
5. [Run the script](#run-the-script)
6. [Copy the exported folder](#copy-the-exported-folder)
7. [Add your mod to your decompiled game files](#add-your-mod-to-your-decompiled-game-files)
8. [Open decompiled files in Godot](#open-decompiled-files-in-godot)
9. [Run the game](#run-the-game)


## Choose your mod name and ID

### Choose a mod ID (minimum 4 numbers):
- This needs to be a unique number identifier that no other mod uses (the longer the number, the more likely it will be unique)

### Choose a mod name:
- Your mod name should be in PascalCase: ie `MyNewPlantDecorationMod`
- The code name will be the snake_case version of your mod name: ie `my_new_plant_decoration_mod`

You will need the mod code name for naming all your assets in the next step

## Create your plant decoration assets
Follow [these instructions](../assets/plant-decoration-assets.md) to create the images requires to add a plant decoration to the game

At the end of this you should end up with the following assets:
- 4 images with the stage index at the end of the file name, ie: 
  - `my_new_plant_decoration_mod_0.png`
  - `my_new_plant_decoration_mod_1.png`
  - `my_new_plant_decoration_mod_2.png`
  - `my_new_plant_decoration_mod_3.png`
- a single shop image, ie: `my_new_plant_decoration_mod.png`
- a single food image, ie: `my_new_plant_decoration_mod.png`

## Create and configure your mod
Once your assets are ready you can create your mod.

### Using my script
In order to use this script, make sure you have done this repo [setup](../setup.md) first. I promise the setup will be worth it, it will save you so much time and headaches!

You will paste your plant decoration assets into this repo, edit one data file to fill in all the required info about your plant decoration and then run the script.
You can then copy the new mod folder created by the script and open it in Godot to test it, before exporting it.

### Add your assets
1. Find and open the `tiny-pastures-modding-helper` folder in your file system
2. Go to the `create-decoration-mod` folder > [new-assets](/create-plant-decoration-mod/new-assets)
3. Delete the assets in each of the folders
4. Paste your new correctly named [assets](../assets/plant-decoration-assets.md) into the correct folders (make sure the file names use the code_name value you will be using in data.json)

### Update data.json
1. Open the [data.json](../../create-plant-decoration-mod/data.json) file in the `create-plant-decoration-mod` folder
2. Update the values you want to change
3. I have tried to add as much info about these values below:

**modName** - choose a name for your mod, needs to be in PascalCase
**modId** - choose a unique id for your mod, needs to be different from all other mods. (The longer the number, the more likely it will be unique)
**authorName** - your author name
**codeName** - should be your mod name in snake_case
**description** - add a short description for what's included in the mod
**translations** - an object containing values (name and description) for each language you want to support [more info here](./translations.md)
**edible plant** - an object containing values to configure your plant
    - **width** - the width (in px) of your plant decoration images (the ones you put [here](/create-plant-decoration-mod/new-assets/decoration))
    - **sway** - true or false - whether you want your plant decoration to use the sway animation (I turn this off for things like trees, etc)
    - **drop_no** - a number to indicate how many food items you want your plant to drop when you click on it
    - **plant_stage_time** - an array of 3 numbers (each indicates the amount of time it takes for the plant to progress to the next stage in seconds)
    - **food_value** - a number to indicate how much fullness each food item should provide to an animal when eaten
**price** - a number for how much you want your item to cost in the Tiny Pasture shop

```
{
  "modName": "NewPlantDecoration",
  "modId": "1000",
  "authorName": "Your_Name",
  "codeName": "new_plant_deco",
  "description": "Add a new plant decoration to the game.",
  "translations": {
    "en": {
      "name": "New Plant Decoration",
      "description": "Add a new plant decoration to the game. Produces edible food when ready."
    },
    "zh": {
      "name": "新款植物装饰",
      "description": "为游戏添加一个新的植物装饰。成熟后可产出可食用食物。"
    },
    "zh-HK": {
      "name": "新款植物装饰",
      "description": "为游戏添加一个新的植物装饰。成熟后可产出可食用食物。"
    }
  },
  "edible_plant": {
    "width": 20,
    "sway": true,
    "drop_no": 1,
    "plant_stage_time": [100, 100, 100],
    "food_value": 20
  },
  "price": 300.0
}
```

You can look at my example data.json files that I used to create my decoration mods via this script for help [here](../../create-plant-decoration-mod/examples)

### Run the script
1. If you are using a native terminal/cli/shell tool, open the terminal and then navigate to the correct directory
    - `cd {enter path to this repo, ie: 'Users/Me/Downloads/tiny-pastures-modding-helper'}`
2. If you are using a code editor with a terminal built in (ie: VSCode), open it
3. Open the `tiny-pasture-modding-helper` folder
4. Type the following command to run the script (make sure you are working within the `tiny-pasture-modding-helper` directory
    - `npm run create-plant-decoration-mod`
    - or if you don't have npm installed: `node scripts/plant-decoration-mod-starter.js`

### Copy the exported folder
1. Hopefully you didn't get any errors in the terminal (if you did you might have to adjust data.json or your assets and try again)
2. Open the repo in your file system
3. Inside the folder [create-plant-decoration-mod](../../create-plant-decoration-mod), you should see a new folder with your authorName and modName ie: AuthorName-ModName
4. Inside the AuthorName-ModName folder, open the `mods-unpacked` folder and copy the folder inside with the name that matches your new mod (AuthorName-ModName)

### Add your mod to your decompiled game files
1. Find your decompiled files folder in your files
2. Open the `mods-unpacked` folder
3. Paste your version of the `AuthorName-ModName` folder into the `mods-unpacked` folder

### Open decompiled files in Godot
1. Open the Godot app
2. Select the correct decompiled project with your files added

### Run the game
You're all done! Now it's time to test it.

Run the game locally in Godot with your new mod added. Go to the shop and locate your newly added item. Check placing the plant decoration, moving the decoration and removing the decoration work as expected. Wait for it to grow and check the stages are correct and that it drops food correctly (you can reduce the stage time in the data.json to make this easier to test).

1. Make sure you have Steam open
2. Click the run/play button in the top right of the Godot game engine
3. This should launch another instance of the game
4. If it doesn't, check the output/error console to see if there are any issues you need to resolve
5. If you are still experiencing issues, delete the mod folder from `mods-unpacked` and try again
6. You can also try adding another mod that you know works to try to get to the bottom of the issue (which you can find by browsing your local Steam files `steamapps > workshop > content > 3167550 > copy one of the zips, unpack it and put it into your mods-unpacked folder`). Gradually change things in data.json, run the script and repeat the process until the issue is resolved
7. Once its working, it's time to export your mod so you can publish it on the Steam Workshop

## Next steps [Export your mod](../export-mod.md)

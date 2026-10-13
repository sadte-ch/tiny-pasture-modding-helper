# Create Background Mod
Add a single background to the shop. Backgrounds can have multiple layers and animations for clouds, etc.

## Steps:

1. [Choose your mod name and ID](#choose-your-mod-name-and-id)
2. [Create your background assets](#create-your-background-assets)
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
- Your mod name should be in PascalCase: ie `MyNewBackgroundMod`
- The code name will be the snake_case version of your mod name: ie `my_new_background_mod`

You will need the mod code name for naming all your assets in the next step

## Create your background assets
Follow [these instructions](../assets/background-assets.md) to create the images requires to add a background to the game

At the end of this you should end up with the following assets:
- 1 or more background images, ie: `my_new_background_mod_00.png`, `my_new_background_mod_01.png`
- a single shop image, ie: `my_new_background_mod.png`

## Create and configure your mod
Once your assets are ready you can create your mod.

### Using my script
In order to use this script, make sure you have done this repo [setup](../setup.md) first. I promise the setup will be worth it, it will save you so much time and headaches!

You will paste your background assets into this repo, edit one data file to fill in all the required info about your background and then run the script.
You can then copy the new mod folder created by the script and open it in Godot to test it, before exporting it.

### Add your assets
1. Find and open the `tiny-pasture-modding-helper` folder in your file system
2. Go to the `create-background-mod` folder > [new-assets](/create-background-mod/new-assets)
3. Delete the assets in each of the folders
4. Paste your new correctly named [assets](../assets/background-assets.md) into the correct folders (make sure the file names use the code_name value you will be using in data.json)

### Update data.json
1. Open the [data.json](../../create-background-mod/data.json) file in the `create-background-mod` folder
2. Update the values you want to change
3. I have tried to add as much info about these values below:

**Values:**

- **modName** - choose a name for your mod, needs to be in PascalCase
- **modId** - choose a unique id for your mod, needs to be different from all other mods. (The longer the number, the more likely it will be unique)
- **authorName** - your author name
- **codeName** - should be your mod name in snake_case
- **description** - add a short description for what's included in the mod
- **translations** - an object containing values (name and description) for each language you want to support [more info here](./translations.md)
- **price** - a number for how much you want your item to cost in the Tiny Pasture shop
- **layers** - an object containing data about the layers you want to add to the background
    - **{code_name}_0{index}.png** - each key of the object is the file name used for that background layer image
        - **order** - what order you want this layer to appear, as if the images are stacked on top of each other (where 0 is at the back)
        - **autoscroll** - an object containing x and y speed values for the amount you want this image to move (if you don't want the image to move, don't include this)
            - **x** - a number that indicates how fast you want the image to move horizontally
            - **y** - a number that indicates how fast you want the image to move vertically
```
{
  "modName": "NewBackground",
  "modId": "1000",
  "authorName": "Your_Name",
  "codeName": "new_deco",
  "description": "Add a new background to the game.",
  "translations": {
    "en": {
      "name": "New Background",
      "description": "Add a new background"
    },
    "zh": {
      "name": "新背景",
      "description": "添加新背景"
    },
    "zh-HK": {
      "name": "新背景",
      "description": "添加新背景"
    }
  },
  "price": 200.0,
  "layers": {
    "bg_new_00.png": {
      "order": 0,
      "autoscroll": {
        "x": 0.5,
        "y": 0
      }
    },
    "bg_new_01.png": {
      "order": 1
    },
    "bg_new_02.png": {
      "order": 2,
      "autoscroll": {
        "x": 2,
        "y": 0
      }
    }
  }
}
```

You can look at my example data.json files that I used to create my background mods via this script for help [here](../../create-background-mod/examples)

### Run the script
1. If you are using a native terminal/cli/shell tool, open the terminal and then navigate to the correct directory
    - `cd {enter path to this repo, ie: 'Users/Me/Downloads/tiny-pasture-modding-helper'}`
2. If you are using a code editor with a terminal built in (ie: VSCode), open it
3. Open the `tiny-pasture-modding-helper` folder
4. Type the following command to run the script (make sure you are working within the tiny-pasture-modding-helper directory
    - `npm run create-background-mod`
    - or if you don't have npm installed: `node scripts/background-mod-starter.js`

### Copy the exported folder
1. Hopefully you didn't get any errors in the terminal (if you did you might have to adjust data.json or your assets and try again)
2. Open the repo in your file system
3. Inside the folder [create-background-mod](../../create-background-mod), you should see a new folder with your authorName and modName ie: AuthorName-ModName
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

Run the game locally in Godot with your new mod added. Go to the shop and locate your newly added background, check everything is as expected when turning it on.

1. Make sure you have Steam open
2. Click the run/play button in the top right of the Godot game engine
3. This should launch another instance of the game
4. If it doesn't, check the output/error console to see if there are any issues you need to resolve
5. If you are still experiencing issues, delete the mod folder from `mods-unpacked` and try again
6. You can also try adding another mod that you know works to try to get to the bottom of the issue (which you can find by browsing your local Steam files `steamapps > workshop > content > 3167550 > copy one of the zips, unpack it and put it into your mods-unpacked folder`). Gradually change things in data.json, run the script and repeat the process until the issue is resolved
7. Once its working, it's time to export your mod so you can publish it on the Steam Workshop

## Next steps [Export your mod](../export-mod.md)

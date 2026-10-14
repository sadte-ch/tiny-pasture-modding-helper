# Create Animal Mod
Add a single animal to the game.
This requires a lot of work in terms of all the animations you need to create sprites for and there is a little bit more setup on Godot than my other templates.

## Steps:

1. [Choose your mod name and ID](#choose-your-mod-name-and-id)
2. [Create your animal assets](#create-your-animal-assets)
3. [Add your assets](#add-your-assets)
4. [Update data.json](#update-datajson)
5. [Run the script](#run-the-script)
6. [Copy the exported folder](#copy-the-exported-folder)
7. [Add your mod to your decompiled game files](#add-your-mod-to-your-decompiled-game-files)
8. [Open decompiled files in Godot](#open-decompiled-files-in-godot)
9. [Finish the mod setup](#finish-the-mod-setup)
10. [Run the game](#run-the-game)


## Choose your mod name and ID

### Choose a mod ID (minimum 4 numbers):
- This needs to be a unique number identifier that no other mod uses (the longer the number, the more likely it will be unique)

### Choose a mod name:
- Your mod name should be in PascalCase: ie `MyNewAnimalMod`
- The code name will be the snake_case version of your mod name: ie `my_new_animal_mod`

You will need the mod code name for naming all your assets in the next step

## Create your animal assets
Follow [these instructions](../assets/animal-assets.md) to create the spritesheets and images requires to add an animal to the game

At the end of this you should end up with the following assets:
- animal animation spritesheets (2 x colour variant total - one adult and juvenile spritesheet for each animal colour variant you are adding)
- animal idle animation spritesheets (2 x colour variant total - one adult and juvenile idle spritesheet for each animal colour variant you are adding)
- animal portraits (2 x colour variant total - one adult and juvenile portrait for each animal colour variant you are adding)
- animal shop page images (1 locked and 1 unlocked - only for the juvenile version of the first colour variant)

<img width="634" height="442" alt="671701615-7236d5d9-923f-49f2-bb22-c4fca606d3c1" src="https://github.com/user-attachments/assets/b8cb2423-da44-4e4f-bdfc-5890c83a1622" />
<img width="1084" height="182" alt="671697683-df436a07-04f7-4426-9267-f0ddced2736a" src="https://github.com/user-attachments/assets/8dada643-6e8a-4b81-9c0d-eab1da9e799d" />
<img width="745" height="230" alt="671694621-85df6215-74ab-42ac-b036-b368a1915511" src="https://github.com/user-attachments/assets/0655854a-12fc-49ef-b681-4ecd64df006f" />
<img width="578" height="214" alt="671691292-e3a46a7c-0b9e-4634-af42-5b8b27880293" src="https://github.com/user-attachments/assets/58f7e9fa-a60b-4132-97b2-490ddc36823f" />


## Create and configure your mod
Once your assets are ready you can create your mod.
This is done based off the template provided by Tiny Pasture. Running my script will replace the assets with our own and change all the data to match what we want for our new custom animal.

Alternatively, if you would like to do it the manual way using the Godot game engine, you can follow the instructions [here](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#RNCJdHd0UoWDZjxnzSMc08I7nXf).

### Using my script
In order to use this script, make sure you have done this repo [setup](../setup.md) first. I promise the setup will be worth it, it will save you so much time and headaches!

If you choose to do it this way, you will paste all your animal assets into this repo, edit one data file to fill in all the required info about your animal and then run the script.
You can then copy the new mod folder created by the script and open it in Godot to finish off the setup briefly before exporting it.

There are some things the script doesn't support yet like the alternate idle animation (2 steps instead of 3) and unlock conditions. You can set these up in Godot afterwards when you import the generated files. Check back for updates as I build support for more stuff!

### Add your assets
1. Find and open the `tiny-pasture-modding-helper` folder in your file system
2. Go to the `create-animal-mod` folder > [new-assets](/create-animal-mod/new-assets)
3. Delete the assets in each of the four folders
4. Paste your new correctly named [spritesheets and assets](../assets/animal-assets.md#overview) into the correct folders (make sure the file names use the code_name value you will be using in data.json)

### Update data.json
1. Open the [data.json](../../create-animal-mod/data.json) file in the `create-animal-mod` folder
2. Update the values you want to change
3. I have tried to add as much info about these values below but also refer to the [Tiny Pasture mod docs](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#SUwtdwsgvo3xyPx3bogcxotIn2d) for extra info

**Values:**

- **modName** - choose a name for your mod, needs to be in PascalCase
- **modId** - choose a unique id for your mod, needs to be different from all other mods. (The longer the number, the more likely it will be unique)
- **authorName** - your author name
- **codeName** - should be your mod name in snake_case
- **description** - add a short description for what's included in the mod
- **translations** - an object containing values (name and description) for each language you want to support [more info here](./translations.md)
- **price** - a number for how much you want your item to cost in the Tiny Pasture shop

**Animal data:**
- **adult_price** - selling prices for adult animals - an array/list of 5 number values, one price for each star/quality rating, ie: `[12000.0, 24000.0, 35000.0, 40000.0, 48000.0]`
- **child_price** - selling prices for child animals - an array/list of 5 number values, one price for each star/quality rating, ie: `[100.0, 2000.0, 4000.0, 8000.0, 12000.0]`
- **adult_time** - time required for the animal to grow to adulthood in seconds - an array/list of 5 number values, one number for each star/quality rating, ie: `[300, 450, 1500, 3000, 6000]`
- **drop_time** - time the animal can store earnings in seconds (until money is dropped to the ground) - an array/list of 5 number values, one number for each star/quality rating, ie: `[300, 900, 1800, 2700, 3600]`
- **second_coin** - earning rate of the animal in seconds - an array/list of 5 number values, one number for each star/quality rating, ie: `[166.73, 200.08, 277.88, 625.25, 1667.33]`
- **poop_time** - how long it takes for the animal to drop poop in seconds, ie: `800`
- **max_hunger** - maximum hunger value of the animal, ie: `100.0`
- **hungry_speed** - amount hunger decreases every 60 seconds, ie: `1.0`
- **poop_endure** - number of poops the animal can tolerate in the environment (exceeding this number causes the animal to lose health), ie: `15`
- **max_move_speed** - maximum movement speed randomly generated when a new animal is created, ie: `40`
- **min_move_speed** - minimum movement speed randomly generated when a new animal is created, ie: `30`
- **variations_no** - how many colour variations you have created assets for, ie: `1`
- **is_fish** - whether the animal is a fish or not, ie: `true` or `false`

**Spritesheet data:**
- **sprite** - contains the width and height you used for your individual sprites
  - **width** - width of each sprite in your spritesheets in px, ie: `50`
  - **height** - height of each sprite in your spritesheets in px, ie: `50`
- **animations** - contains configuration data for each of your spritesheet animations
  - **idle_0** - config data for your `idle_0` animation (see frame data info below)
  - **idle_1** - config data for your `idle_1` animation (you can either do just idle_1 if you want a one shot, or idle_1_pre, idle_1_loop and idle_1_end)
  - **idle_1_pre** - config data for your `idle_1_pre` animation (see frame data info below)
  - **idle_1_loop** - config data for your `idle_1_loop` animation (see frame data info below)
  - **idle_1_end** - config data for your `idle_1_end` animation (see frame data info below)
  - **sleep_pre** - config data for your `sleep_pre` animation (see frame data info below)
  - **sleep_loop** - config data for your `sleep_loop` animation (see frame data info below)
  - **sleep_end** - config data for your `sleep_end` animation (see frame data info below)
  - **move** - config data for your `move` animation (see frame data info below)
  - **interact_0** - config data for your `interact_0` animation (see frame data info below)
  - **eat** - config data for your `eat` animation (see frame data info below)
- **shop_idle_animation** - config data for your shop idle animation (see frame data info below)

**Animation frame data:**
- **fps** - speed of the animation, in frames per second
- **startFrame** - the coordinate value of the first frame of the animation `[x, y]`
- **endFrame** - the coordinate value of the end frame of the animation `[x, y]`
- **frames** - alternatively, you can use an array containing a list of all the frame coordinates you want in the animation, in the exact order you want, if you need more control `[[x, y], [x, y], [x, y], ...]`

In terms of animation frame data, there are 2 options for defining frames. Either declaring a start frame and an end frame OR a list of frames.

**Using `startFrame` and `endFrame` (don't include `frames`):**

If the frames in your animation are in the correct order on the spritesheet and on the same row, you can define a start frame and an end frame, and the script will fill the gap for you:
```
"move": {
  "fps": 5,
  "startFrame": [0, 6],
  "endFrame": [5, 6]
}
```
**OR using `frames` (don't include `startFrame` and `endFrame`):**

If you need more control over the order of the frames in your animation. For example, if they're not all on the same row, you're re-using frames that already exist, etc
```
"idle_1_loop": {
  "fps": 5,
  "frames": [[4, 1], [5, 1], [6, 1], [0, 2]]
}
```

This image shows the coordinates of all the frames in my spritesheet and shows each animation boxed out. Blue boxes are animations that use `startFrame` and `endFrame`. Red boxes are animations that are configured using `frames`:

<img width="783" height="685" alt="671732687-9264f1c5-ec76-487c-8a77-542d2adb9b9e" src="https://github.com/user-attachments/assets/66738685-b856-4002-b777-534493e3d806" />

```
{
  "modName": "NewCow",
  "modId": "1000",
  "authorName": "Sad_Tech",
  "codeName": "new_cow",
  "description": "Add a new cow.",
  "translations": {
    "en": {
      "name": "New Cow",
      "description": "Add a new cow."
    },
    "zh": {
      "name": "阿尔维斯牛",
      "description": "添加来自阿尔维斯庇护所的红安格斯牛“维尼·哞”。"
    },
    "zh-HK": {
      "name": "阿爾維斯牛",
      "description": "添加來自阿爾維斯庇護所的紅安格斯牛「維尼·哞」。"
    }
  },
  "price": 2000.0,
  "adult_price": [12000.0, 24000.0, 35000.0, 40000.0, 48000.0],
  "child_price": [100.0, 2000.0, 4000.0, 8000.0, 12000.0],
  "adult_time": [300, 450, 1500, 3000, 6000],
  "drop_time": [300, 900, 1800, 2700, 3600],
  "second_coin": [166.73, 200.08, 277.88, 625.25, 1667.33],
  "poop_time": 800,
  "max_hunger": 100.0,
  "hungry_speed": 1.0,
  "poop_endure": 15,
  "max_move_speed": 40,
  "min_move_speed": 30,
  "variations_no": 1,
  "is_fish": false,
  "sprite": {
    "width": 50,
    "height": 50
  },
  "animations": {
    "idle_0": {
      "fps": 5,
      "startFrame": [0, 0],
      "endFrame": [7, 0]
    },
    "idle_1_pre": {
      "fps": 10,
      "startFrame": [0, 1],
      "endFrame": [2, 1]
    },
    "idle_1_loop": {
      "fps": 10,
      "frames": [[4, 1], [5, 1], [6, 1], [0, 2]]
    },
    "idle_1_end": {
      "fps": 10,
      "startFrame": [1, 2],
      "endFrame": [2, 2]
    },
    "sleep_pre": {
      "fps": 6.666666666666667,
      "startFrame": [0, 3],
      "endFrame": [5, 3]
    },
    "sleep_loop": {
      "fps": 6.666666666666667,
      "startFrame": [0, 4],
      "endFrame": [5, 4]
    },
    "sleep_end": {
      "fps": 6.666666666666667,
      "startFrame": [0, 5],
      "endFrame": [5, 5]
    },
    "move": {
      "fps": 6.666666666666667,
      "startFrame": [0, 6],
      "endFrame": [5, 6]
    },
    "interact_0": {
      "fps": 6.666666666666667,
      "startFrame": [0, 7],
      "endFrame": [7, 7]
    },
    "eat": {
      "fps": 6.666666666666667, - speed of the eat animation
      "frames": [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [0, 9], [1, 9], [2, 9], [0, 9], [1, 9], [2, 9], [0, 9], [1, 9], [2, 9], [4, 9], [5, 9], [6, 9], [7, 9]]
    }
  },
  "shop_idle_animation": {
    "fps": 5,
    "startFrame": [0, 0],
    "endFrame": [7, 0]
  }
}
```

If you want to do a 1 shot animation for idle_1 (instead of idle_1_pre, idle_1_loop, idle_1_end), it would look like this:
```
"animations": {
    "idle_0": {
      "fps": 5,
      "startFrame": [0, 0],
      "endFrame": [7, 0]
    },
    "idle_1": {
      "fps": 10,
      "frames": [[0, 1], [1, 1], [2, 1], [4, 1], [5, 1], [6, 1], [0, 2], [1, 2], [2, 2]]
    },
    "sleep_pre": {
      "fps": 6.666666666666667,
      "startFrame": [0, 3],
      "endFrame": [5, 3]
    },
    "sleep_loop": {
      "fps": 6.666666666666667,
      "startFrame": [0, 4],
      "endFrame": [5, 4]
    },
    "sleep_end": {
      "fps": 6.666666666666667,
      "startFrame": [0, 5],
      "endFrame": [5, 5]
    },
    "move": {
      "fps": 6.666666666666667,
      "startFrame": [0, 6],
      "endFrame": [5, 6]
    },
    "interact_0": {
      "fps": 6.666666666666667,
      "startFrame": [0, 7],
      "endFrame": [7, 7]
    },
    "eat": {
      "fps": 6.666666666666667, - speed of the eat animation
      "frames": [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [0, 9], [1, 9], [2, 9], [0, 9], [1, 9], [2, 9], [0, 9], [1, 9], [2, 9], [4, 9], [5, 9], [6, 9], [7, 9]]
    }
}
```

You can look at my example data.json files that I used to create my animal mods via this script for help [here](../../create-animal-mod/examples)

### Run the script
1. If you are using a native terminal/cli/shell tool, open the terminal and then navigate to the correct directory
   - `cd {enter path to this repo, ie: 'Users/Me/Downloads/tiny-pasture-modding-helper'}`
2. If you are using a code editor with a terminal built in (ie: VSCode), open it
3. Open the tiny-pasture-modding-helper folder
4. Type the following command to run the script (make sure you are working within the tiny-pasture-modding-helper directory
   - `npm run create-animal-mod`
   - or if you don't have npm installed: `node scripts/animal-mod-starter.js`

### Copy the exported folder
1. Hopefully you didn't get any errors in the terminal (if you did you might have to adjust data.json or your assets and try again)
2. Open the repo in your file system
3. Inside the folder [create-animal-mod](../../create-animal-mod), you should see a new folder with your authorName and modName ie: AuthorName-ModName
4. Inside the AuthorName-ModName folder, open the mods-unpacked folder and copy the folder inside with the name that matches your new mod (AuthorName-ModName)

### Add your mod to your decompiled game files
1. Find your decompiled files folder in your files
2. Open the mods-unpacked folder
3. Paste your version of the `AuthorName-ModName` folder into the mods-unpacked folder

### Open decompiled files in Godot
1. Open the Godot app
2. Select the correct decompiled project with your files added

### Finish the mod setup
You're almost done! The animal template requires that you do an extra step in Godot before it is ready to export.

#### Set up the idle animal acquisition animation
The script creates a gd file that you can run inside Godot to automate creating a new idle animation for the shop. Running the script will automatically set up the animation, you can then adjust it before exporting the animation to your mod.

Alternatively, you can do this section manually if you prefer - see [guide](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#M7sPdTWcXoRfWdxGT5nceF1Dnib), scroll down to step 6. Import Animation for Animal Acquisition Interface

1. Copy the `generate_res_file.gd` file from inside `create-animal-mod` in the repo
2. Paste the script inside the decompiled files folder in the Scene folder (you don't want this file to get uploaded with your mod)
3. Locate the `generate_res_file.gd` file in the Godot file system
4. Double click file and it should open in Script mode
5. In the scripts list (under 'Filter Scripts'), right click `generate_res_file.gd` and click 'Run'
6. Check the output tab at the bottom to check it worked successfully
7. In the Godot file system, search for 'opened_pack'
8. Double click the `opened_pack.tscn` file
9. Switch back to 2D mode
10. Find 'Animation Player' under 'TEX_AnimalAvatar' in the Scene viewer top left and click on it
11. You should be able to see your new animal on the store UI
12. If the animation timeline doesn't come up at the bottom, click on 'TEX_AnimalAvatar' and then click back on 'Animation Player'
13. Next to the 'Animation' box, where it says 'RESET', click the dropdown and select the animation that matches your new mod name
14. Click the play button to test the idle animation works correctly
15. You might need to adjust the position of TEX_AnimalAvatar to center the animal witihin the semi circle
16. You can also adjust the animation frames and timing if you want
17. Once you're happy with the animation, make sure you are on the 'AnimationPlayer'
18. Click on the 'Animation' button and select 'Manage Animations..'
19. Find your new animal in the list and click the corresponding save icon
20. Click 'Save As', navigate to > mods-unpacked > your mod > Extension > Animation
21. Click 'Save' to save a file named 'your_animal.res' within your mod files

#### Check your animal config and animations
1. Locate your animals scene file in the Godot file system at > mods-unpacked > your mod > overwrites > Scene > Level > Animals > your_animal.tscn
3. Double click the tscn scene file to open it
4. Make sure you are in 2D mode
5. Zoom in to view your animal
(For some reason it doesn't always show the textures correctly for me on this step but running the game, it works perfectly)

##### Adjust Mouse Clickable Area
1. Click 'Detector' in the Scene viewer top left
2. Resize the outline box to enclose the whole animal, hugging the outline of the animal on all sides

##### Adjust Expression Bubble Position
1. Click on the closed eye icon next to 'BubbleSprite' under 'Sprite' in the scene viewer
2. You should now see a bubble with a smiley face
3. Click on it and adjust its position so it doesn't overlap the animal
4. Once you're happy, click the eye icon again to hide it

##### Adjust Selection Indicator (Small Triangle) Position
1. Click on the closed eye icon next to 'SelectIcon' under 'Sprite' in the scene viewer
2. You should now see a triangle above the animal
3. Click on it and adjust its position so it doesn't overlap the animal and it is more or less centered
4. Once you're happy, click the eye icon again to hide it

##### Check your animal animations
1. Click on 'AnimationPlayer' in the scene viewer panel
2. In the animation timeline at the bottom of Godot you will be able to view the animations that have been created
3. Next to the 'Animation' button, click on 'Reset' to pull up a dropdown of all the animations
4. Preview each one, pressing the Play button to view the animation
5. You can adjust the frame rate and spacing as needed
6. Save your changes

### Run the game
You're all done! Now it's time to test it.

1. Make sure you have Steam open
2. Click the run/play button in the top right of the Godot game engine
3. This should launch another instance of the game
4. If it doesn't, check the output/error console to see if there are any issues you need to resolve
5. If you are still experiencing issues, delete the mod folder from mods-unpacked and try again
6. You can also try adding another mod that you know works to try to get to the bottom of the issue (which you can find by browsing your local Steam files `steamapps > workshop > content > 3167550 > copy one of the zips, unpack it and put it into your mods-unpacked folder`). Gradually change things in data.json, run the script and repeat the process until the issue is resolved
7. Once its working, it's time to export your mod so you can publish it on the Steam Workshop

## Next steps [Export your mod](../export-mod.md)

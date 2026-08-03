# Create and configure your mod
Once your assets are ready you can create your mod.
This is done based off the template provided by Tiny Pasture. We will replace the assets with our own and change all the data to match what we want for our new custom animal.

The manual way to do this whole process via Godot (as per the Tiny Pasture modding instructions) is quite long winded and repetitive so I decided to make a script to automate this process as much as possible.
This also makes it easier to make small tweaks if you encouter any issues with your mod not running.

1. [The manual way](#the-manual-way)
2. [Using my script](#using-my-script)


## The manual way
To do this whole process manually via the Godot game engine, you can follow the instructions [here](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#RNCJdHd0UoWDZjxnzSMc08I7nXf).

## Using my script
In order to use this script you will need to be able to clone or download this repo, install Node.js and run it from a terminal. I promise the setup will be worth it, it will save you so much time and headaches!

If you choose to do it this way, you will paste all your animal assets into this repo, edit one data file to fill in all the required info about your animal and then run the script.
You can then copy the new mod folder created by the script and open it in Godot to finish off the setup briefly before exporting it.

There are some things the script doesn't support yet like the alternate idle animation (2 steps instead of 3) and unlock conditions. You can set these up in Godot afterwards when you import the generated files. Check back for updates as I build support for more stuff!

1. [Setup](#setup)
2. [Add your assets](#add-your-assets)
3. [Update data.json](#update-datajson)
4. [Run the script](#run-the-script)
5. [Copy the exported folder](#copy-the-exported-folder)
6. [Add your mod to your decompiled game files](#add-your-mod-to-your-decompiled-game-files)
7. [Open decompiled files in Godot](#open-decompiled-files-in-godot)
8. [Finish the mod setup](#finish-the-mod-setup)
9. [Run the game](#run-the-game)

### Setup

#### Clone this git repository
1. Go to https://github.com/sadte-ch/tiny-pastures-modding-helper/tree/main
2. Click the Code button on the top right
3. Clone the repo in your preferred way or download the ZIP if that is easier

#### Install Node.js
1. Install the latest version of [Node.js](https://nodejs.org/en/download/current) on your computer (this is so you can run the script)
2. npm is not required for this

#### Get a code editor
I recommend using a free code editor (like [VSCode](https://code.visualstudio.com/)) so you can easily edit the files necessary to use the script but you can just use the default text editor on your computer if you prefer.

### Add your assets
1. Find and open the tiny-pastures-modding-helper folder in your file system
2. Go to the create-animal-mod folder > [new-assets](/create-animal-mod/new-assets)
3. Delete the assets in each of the four folders
4. Paste your new correctly named [spritesheets and assets](assets.md#overview) into the correct folders (make sure the file names use the code_name value you will be using in data.json)

### Update data.json
1. Open the data.json file in the create-animal-mod folder
2. Update the values you want to change
3. I have tried to add as much info about these values in the comments but also refer to the [Tiny Pasture mod docs](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#SUwtdwsgvo3xyPx3bogcxotIn2d) for extra info

### Run the script
1. If you are using terminal, open the terminal and then navigate to the correct directory
  - `cd {enter path to this repo, ie: 'Users/Me/Downloads/tiny-pastures-modding-helper'}`
2. If you are using a code editor with a terminal built in (ie: VSCode), open it
3. Type the following command to run the script
  - `npm run create-animal-mod`
  - or if you don't have npm installed: `node scripts/animal-mod-starter.js`

### Copy the exported folder
1. Hopefully you didn't get any errors in the terminal (if you did you might have to adjust data.json or your assets and try again)
2. Open the repo in your file system
3. Inside the folder 'create-animal-mod', you should see a new folder with your authorName and modName ie: AuthorName-ModName
4. Inside the AuthorName-ModName folder, copy the mods-unpacked folder

### Add your mod to your decompiled game files
1. Find your decompiled files folder in your files
2. Paste the mods-unpacked folder into the root of the decompiled files folder

### Open decompiled files in Godot
1. Open the Godot app
2. Select the correct decompiled project with your files added

### Finish the mod setup

#### Setup the idle animal acquisition animation
The script creates a gd file that you can run inside Godot to automate creating a new idle animation for the shop. Running the script will automatically set up the animation, you can then adjust it before exporting the animation to your mod.

Alternatively, you can do this section manually if you prefer - see [guide](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#M7sPdTWcXoRfWdxGT5nceF1Dnib), scroll down to step 6. Import Animation for Animal Acquisition Interface)

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
2. Double click the tscn scene file to open it
3. Make sure you are in 2D mode
4. Zoom in to view your animal

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
1. Make sure you have Steam open
2. Click the run/play button in the top right of the Godot game engine
3. This should launch another instance of the game
4. If it doesn't, check the output/error console to see if there are any issues you need to resolve
5. If you are still experiencing issues, delete the mod folder from mods-unpacked and try again
6. You can also try adding my [mod](/create-animal-mod/Sad_Tech-AlveusCow/mods-unpacked) (Sad_Tech-AlveusCow folder) or another mod that you know works to try to get to the bottom of the issue. Gradually change things in data.json, run the script and repeat the process until the issue is resolved
7. Once its working, its time to export your mod so you can publish it on the Steam Workshop

## Next steps [Export your mod](export-mod.md)

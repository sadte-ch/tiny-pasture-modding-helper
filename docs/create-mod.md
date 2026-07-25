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
8. [Run the game](#run-the-game)

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
2. Go to the create-mod folder > new-assets
3. Delete the assets in each of the four folders
4. Paste your new correctly named [spritesheets and assets](docs/assets.md#overview) into the correct folders (make sure the file names use the code_name value you will be using in data.json)

### Update data.json
1. Open the data.json file in the create-mod folder
2. Update the values you want to change
3. I have tried to add as much info about these values in the comments but also refer to the [Tiny Pasture mod docs](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#SUwtdwsgvo3xyPx3bogcxotIn2d) for extra info

### Run the script
1. If you are using terminal, open the terminal and then navigate to the correct directory
  - `cd {enter path to this repo, ie: 'Users/Me/Downloads/tiny-pastures-modding-helper'}`
2. If you are using a code editor with a terminal built in (ie: VSCode), open it
3. Type the following command to run the script
  - `npm run process`
  - or if you don't have npm installed: `node scripts/mod-starter.js`

### Copy the exported folder
1. Hopefully you didn't get any errors in the terminal (if you did you might have to adjust data.json or your assets and try again)
2. Open the repo in your Finder or File Explorer
3. Inside the folder 'create-mod', you should see a new folder with your authorName and modName ie: AuthorName-ModName
4. Inside the AuthorName-ModName folder, copy the mods-unpacked folder

### Add your mod to your decompiled game files
1. Find your decompiled files folder in your files
2. Paste the mods-unpacked folder into the root of the decompiled files folder

### Open decompiled files in Godot
1. Open the Godot app
2. Select the correct decompiled project with your files added

### Run the game
1. Make sure you have Steam open and that you are running the Tiny Pasture game before you do this.
2. Click the run/play button in the top right of the Godot game engine
3. This should launch another instance of the game over the top of the actual game.
4. If it doesn't, check the output/error console to see if there are any issues you need to resolve.
5. If you are still experiencing issues, delete the mod folder from mods-unpacked and try again.
6. You can also try adding my [mod](create-mod/Sad_Tech-AlveusCow/mods-unpacked) (Sad_Tech-AlveusCow folder) or another mod that you know works to try to get to the bottom of the issue. Gradually change things in data.json, run the script and repeat the process until the issue is resolved.
7. Once its working, its time to export your mod so you can publish it on the Steam Workshop

## Next steps [Export your mod](docs/export-mod.md)

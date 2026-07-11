# tiny-pastures-modding-helper

A guide on how to do mods for the [Tiny Pasture steam game](https://store.steampowered.com/app/3167550/Tiny_Pasture/) (A cute animal idle desktop game).

1. You need to have bought and downloaded the Tiny Pasture game, as well as downloaded the Steam app in order to mod this game.
2. Look at the Tiny pasture mod guide: https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb

The following is an expansion of this guide. I have a Mac Air M4 so I will provide more info for debugging on Mac and I first set this up in July 2026.

## Backup your game save file
  
### Windows save path:
  C:\Users\[Your Username]\AppData\Roaming\TinyPasture\save(Note: "AppData" is a hidden folder)

### Mac save path:
  ~/Library/Application Support/TinyPasture/save
  
- I had to go to: Computer > Macintosh HD > Users > my user folder
- Then right click and open 'Show View Options' menu
- Check the 'Show Library Folder' option
- then navigate to > Library > Application Support > Tiny Pasture

Copy the 'save' folder and put it somewhere safe

## Download a decompile tool
The decompile tool will allow you to view the source files so you can run the game locally and make changes.

1. Download the correct version of GDRE Tools
2. I downloaded this version: https://github.com/GDRETools/gdsdecomp/releases/tag/v2.6.0-beta.4
3. Go to Assets and pick the correct version corresponding to your operating system.
4. I downloaded: 'GDRE_tools-v2.6.0-beta.4-macos.zip'
5. Unzip the downloaded folder

## Decompile the game

### Locate game files
1. Open Steam and locate Tiny Pasture in your library
2. Click Settings > Manage > Browse local files
3. On Mac you have to right click the game and select 'Show Package Contents'

### Decompile the game files
1. Run the GDRE Tools program
2. Drag the TinyPasture.pck file into the GDRE Tools window (file located at Contents > Resources > TinyPasture.pck for me)
3. Choose a path to store the decompiled project files (it's best to create a new folder)
4. Click 'Extract' (Make sure 'fully recovery' is checked)
5. Click 'Yes' if you get a window that prompts downloading GDExtension plugins automatically
6. Once its complete you can close GDRE Tools now (I did get a few warnings about it not being complete)

## Download Godot steam extension/plugin
This is requires to get Godot to work with steam games

1. Mine was added during the decompilation (/addons file added), if its the same for you, skip this bit
2. But if that didn't happen for you, you can find it here:
3. 1. Go to https://godotengine.org/asset-library/asset/3866 to download the correct version (Godot 4.3 Stable)
2. Click 'Download' button on this page (Tiny pasture modding docs reference getting this straight from github but I found this version was no longer available)

## Download the Godot Engine
This program will let us run the decompiled game files locally so we can make updates and test

1. Go to: https://godotengine.org/download/archive/4.3-stable/
2. Download the correct version for your operating system
3. Unzip the downloaded folder
4. Run the Godot program

## Open the decompiled game files on Godot
1. Click 'Import' button
2. Navigate to where you exported the decompiled game files to
3. Click 'Select this folder'
4. Click 'Import & Edit'
5. This will launch the game editor

## Running the game in Godot
1. Make sure you have the Steam app open and make sure you are logged in
2. Make sure the Tiny Pasture steam game is running
3. Select the project you imported and double click to open
4. I got some errors in the debug console but I ignored these and was still able to run the game successfully
5. Click the play/run button in the top right of Godot
6. If it loads successfully, you should now see two instances of the game, overlapping each other
7. You're all set up, now we can do some mods!


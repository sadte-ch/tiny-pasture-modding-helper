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
5. Run the GDRE Tools program
6. Drag the TinyPasture.pck file into the GDRE Tools window (file located at Contents > Resources > TinyPasture.pck for me)
7. Choose a path to store the decompiled project files (it's best to create a new folder)
8. Click 'Extract' (Make sure 'fully recovery' is checked)
9. Click 'Yes' if you get a window that prompts downloading GDExtension plugins automatically
10. Once its complete you can close GDRE Tools now (I did get a few warnings about it not being complete)



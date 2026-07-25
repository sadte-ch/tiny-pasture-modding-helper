# Export your mod
A guide to exporting your mod from Godot so you can test it and upload it to the Steam Workshop

The following is an expansion on [this](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#T5zNd3VJ0oof7WxymUVcOsI6nZf) guide.

1. [Export from Godot](#export-from-godot)
2. [Test the mod](#test-the-mod)
3. [Submit to Steam Workshop](#submit-to-steam-workshop)
4. [Submitting a mod update](#submitting-a-mod-update)
5. [Troubleshooting](#troubleshooting)

Make sure you have the mod [setup](create-mod.md) complete and that it is running correctly when you run the decompiled game files in Godot.

## Export from Godot
1. In Godot, click the Mod Tool tab at the top
2. Click the 'Connect existing mod' button and select the mod you've created
3. Click the 3 dots next to 'Export path' and choose a place to save your export
4. Click 'Export Mod'
5. If this is successful, it will save a zip file at the path you chose

## Test the mod
1. Find the exported zip file
2. Go to your Steam Library > Tiny Pasture
3. Click the settings button and then select Manage > Browse local files
4. Navigate up two enclosing folders in your file system, you should be in the steamapps folder
5. Then go > workshops > content > 3167550
6. If you have subscribed to any other mods, you will see them here
7. If there is no quicktest folder, create one and paste your zip file here
8. Re-launch steam and the Tiny Pasture game
9. If the game runs, you can see your animal in the shop and it works correctly when you buy it - you're good to upload your mod to the Steam Workshop
10. If there are errors, you may have to change your mod and try again until it works, see [troubleshooting](#troubleshooting) section below.

## Submit to Steam Workshop
You will need to switch the game to the moduploader version in order to submit your mod to Steam

1. In your Steam library, right click Tiny Pasture and click 'Properties'
2. Click on the 'Game Versions & Betas' section and then check the 'modloader' box
3. Wait for Steam to update and then click the 'Play' button
4. Select 'Lauch Game Editor' and click 'Play' again
5. This should launch an uploader menu
6. Click 'Select mod file' and find the zip file you exported
7. Optionally add an image which will be the image used to showcase your mod in the workshop
8. Don't add a workshop ID to create a mod (this is used to edit your mod, like adding a preview image later or fixing bugs)
9. Click upload and wait for it to say its successful
10. Go to the Tiny Pasture Workshop in Steam
11. Click 'Your items' > 'Items you've posted'
12. You should be able to see the mod you just created, click it
13. Subscribe to your mod and test it by running the game (make sure to delete your test zip from the quicktest folder first, you might have to restart Steam)
14. If you're happy it's working correctly, click 'Change visibility' on the workshop page and switch it to 'Public'

## Submitting a mod update
1. Put the Tiny Pasture game into 'modloader' mode again if you exited (as outlined above)
2. Select your updated zip file
3. Select a preview image if you want to update it
4. You can get your workshop id from your mods Workshop page on Steam, copy the id from the url at the top of the page (?id=123..)
5. Click 'Upload' to sumbit your revisions

## Troubleshooting
- translations error okay (ignore)
- I get a black box on the menu when I launch the game with my mods for some reason but it doesn't appear for other people

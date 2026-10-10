# Export your mod
A guide to exporting your mod from Godot so you can test it and upload it to the Steam Workshop

The following is an expansion on [this](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#T5zNd3VJ0oof7WxymUVcOsI6nZf) guide.

1. [Export from Godot](#export-from-godot)
2. [Test the mod](#test-the-mod-optional)
3. [Create a workshop image](#create-a-workshop-image-optional)
3. [Submit to Steam Workshop](#submit-to-steam-workshop)
4. [Submitting a mod update](#submitting-a-mod-update)
5. [Troubleshooting](#troubleshooting)

Make sure you have the mod setup complete and that it is running correctly when you run the decompiled game files in Godot.

## Export from Godot
1. In Godot, click the Mod Tool tab at the top
2. Click the 'Connect existing mod' button and select the mod you've created
3. Click the 3 dots next to 'Export path' and choose a place to save your export
4. Click 'Export Mod'
5. If this is successful, it will save a zip file at the path you chose

## Test the mod (optional)
I don't tend to do this now as when you publish an item to the Steam workshop it is hidden from the store by default. If you subscribe to it, you can test it that way before making it public.

1. Find the exported zip file
2. Go to your Steam Library > Tiny Pasture
3. Click the settings button and then select Manage > Browse local files
4. Navigate up two enclosing folders in your file system, you should be in the steamapps folder
5. Then go > workshops > content > 3167550
6. If you have subscribed to any other mods, you will see them here
7. If there is no `quicktest` folder, create one and paste your zip file here
8. Re-launch steam and the Tiny Pasture game
9. If the game runs, you can see your animal in the shop and it works correctly when you buy it - you're good to upload your mod to the Steam Workshop
10. If there are errors, you may have to change your mod and try again until it works, see [troubleshooting](#troubleshooting) section below.

## Create a workshop image (optional)
You don't need to upload your mod with an image, but it's nice to have one. You can also come back and update your mod with one later.

The image should ideally be 512 x 512 px.

## Submit to Steam Workshop
You will need to switch the game to the `moduploader` version in order to submit your mod to Steam

1. In your Steam library, right click Tiny Pasture and click 'Properties'
2. Click on the 'Game Versions & Betas' section and then check the 'moduploader' box
3. Wait for Steam to update and then click the 'Play' button
4. Select 'Launch Game Editor' and click 'Play' again
5. This should launch an uploader menu
6. Click 'Select mod file' and find the zip file you exported
7. Optionally add an image which will be the image used to showcase your mod in the workshop
8. Don't add a workshop ID to create a mod (this is used to edit your mod, like adding a preview image later or fixing bugs)
9. Click upload and wait for it to say its successful

10. Go to the Tiny Pasture Workshop in Steam
11. Click 'Your items' > 'Items you've posted'
12. You should be able to see the mod you just created, click it
13. Subscribe to your mod
14. Switch back to the normal game version (Steam Library > Tiny Pasture > Properties > Game Versions & Betas)
15. Test your new mod by running the game (make sure to delete your test zip from the quicktest folder first, you might have to restart Steam)
16. If you're happy it's working correctly, click 'Change visibility' on the workshop page and switch it to 'Public'
17. If the game crashes or won't open, there is something wrong with the mod. Unsubscribe and try changing things until it works. You may also want to unsubcribe from other mods to rule out any clashes/conflicting code.

## Submitting a mod update
1. Put the Tiny Pasture game into 'moduploader' mode again if you exited (as outlined above)
2. Select your updated zip file
3. Select a preview image if you want to update it
4. You can get your workshop id from your mods Workshop page on Steam, copy the id from the url at the top of the page (?id=123..)
5. Click 'Upload' to submit your revisions

## Troubleshooting
- translations error okay (ignore)
- I get a black box on the menu when I launch the game with mods for some reason but it doesn't cause any issues
- If you don't want to lose mod animals, items you've placed, etc in the game - make sure to put all the mods you're subscribed to into the decompiled tiny pasture mods-unpacked folder, so they don't get removed in your save file when you run the game from the Godot engine.
- Can't run game in Godot when updating an existing mod - If you update items (has to be a big difference) in a mod that you already have placed in the real game - you might need to remove them or switch to a pasture without them in order to run the game in Godot with the updated mod files

# Creating animal assets
A guide to creating assets for your mod

The following is an expansion on [this](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#Q0tId2i3IoCrrsxX51jcZlbTnxh) guide.

1. [Overview](#overview)
2. [A quick test](#a-quick-test)
3. [Animal animation spritesheets](#animal-animation-spritesheets)
4. [Animal idle animation spritesheets](#animal-idle-animation-spritesheets)
5. [Animal portraits](#animal-portraits)
6. [Animal shop page images](#animal-shop-page-images)


## Overview
There are 4 types of assets that are required to create a mod for a new animal in Tiny Pasture:
- **animal animation spritesheets** (contains all the animations for the animal in the pasture)
- **animal idle animation spritesheets** (used for the idle animation when buying the animal)
- **animal portraits** (used in the pasture menu to show eaach animal you own)
- **animal shop page images** (used in the shop or each animal - a locked ghost version and an unlocked full colour version)

It is required to create one of each of these assets for the juvenile and adult version of each colour variation you create (apart from the shop lock/unlock images). The juvenile and adult spritesheets can be the same (if you don't want to support both) but they need to be named correctly.

**If you do one colour variant, these are the assets you will need to create:**
- juvenile spritesheet: `your_animal_0_0.png`
- adult spritesheet: `your_animal_0_1.png`
- juvenile idle spritesheet: `idle_your_animal_0_0.png`
- adult idle spritesheet: `idle_your_animal_0_1.png`
- juvenile portrait: `portrait_your_animal_0_0.png`
- adult portrait: `portrait_your_animal_0_1.png`
- shop locked: `your_animal_lock.png` (juvenile silhouette)
- shop unlocked: `your_animal_unlock.png` (juvenile full colour)

**If you add another colour variant, you would need to create these as well:**
- juvenile spritesheet: `your_animal_1_0.png`
- adult spritesheet: `your_animal_1_1.png`
- juvenile idle spritesheet: `idle_your_animal_1_0.png`
- adult idle spritesheet: `idle_your_animal_1_1.png`
- juvenile portrait: `portrait_your_animal_1_0.png`
- adult portrait: `portrait_your_animal_1_1.png`

You don't need to create additional shop lock/unlock images

## A quick test
To start with I would recommend looking at the assets that already exist for other animals and try to edit one.

1. Open your decompiled Tiny Pasture game folder in your file system
2. Navigate to > Assetes > Animals
3. Choose one of the spritesheets, `cat_0_0.png` might be a good start as its a smaller sheet and is simple)
4. Open the spritesheet in your design tool of choice and try to replace the white colour with a different one
5. Save your upated design over the original image or just replace it (making sure the file name doesn't change)
6. Open your decompiled Tiny Pasture game folder in Godot
7. Run the game by pressing the play button in the top right, another instance of the game should open over the top of the normal Tiny Pasture game
8. Buy the cat until you get a white one and you should see that the juvenile version colours are updated
9. You can try to experiment with other stuff like changing/removing frames from the spritesheet, etc to see what happens

## Animal animation spritesheets
Use a pixel art tool of your choice to create your spritesheets.

## Animal idle animation spritesheets
You can just use the first row of each spritesheet you created in the previous step for the idle animation by cropping the images (make sure the sprite height stays the same). You can also create new frames for the idle animation if you want.

## Animal portraits

## Animal shop page images

## Next steps [Create and configure your mod](docs/create-mod.md)

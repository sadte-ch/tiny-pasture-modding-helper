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

## Animal animation spritesheets

## Animal idle animation spritesheets

## Animal portraits

## Animal shop page images

## Next steps [Create and configure your mod](docs/create-mod.md)

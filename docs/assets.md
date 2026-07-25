# Creating animal assets
A guide to creating assets for your mod

The following is an expansion on [this](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#Q0tId2i3IoCrrsxX51jcZlbTnxh) guide.

1. [Overview](#overview)
2. [A quick test](#a-quick-test)
3. [Creating sprites](#creating-sprites)
4. [Animal animation spritesheets](#animal-animation-spritesheets)
5. [Animal idle animation spritesheets](#animal-idle-animation-spritesheets)
6. [Animal portraits](#animal-portraits)
7. [Animal shop page images](#animal-shop-page-images)


## Overview
There are 4 types of assets that are required to create a mod for a new animal in Tiny Pasture:
- [**animal animation spritesheets**](#animal-animation-spritesheets) (contains all the animations for the animal in the pasture)
- [**animal idle animation spritesheets**](#animal-idle-animation-spritesheets) (used for the idle animation when buying the animal)
- [**animal portraits**](#animal-portraits) (used in the pasture menu to show eaach animal you own)
- [**animal shop page images**](#animal-shop-page-images) (used in the shop or each animal - a locked ghost version and an unlocked full colour version)

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

## Creating sprites
Before creating your animal, you should choose how big each frame needs to be to fit all the movements you want to capture.

- Every frame/sprite in the spritesheet needs to be the same width and height

- Max height you can use for frames is 52px
- You can use any width value

- You can't draw any pixels within 2px of the edge of each frame (to leave space for the animal outlines in the game)
- If the animal is standing on the ground, you should draw it at the bottom of the frame
- Try to keep the animal horizontally centered as much as possible


## Animal animation spritesheets
This is the most time intensive part of the whole process, the less frames you create for each animation the quicker it will be. Use a pixel art tool of your choice to create your spritesheets.

The animations available are listed below, some are optional (*):
- [idle_0](#idle_0)
- [idle_1](#idle_1) *
- [idle_1_pre](#idle_1_pre) *
- [idle_1_loop](#idle_1_loop) *
- [idle_1_end](#idle_1_end) *
- [sleep_pre](#sleep_pre)
- [sleep_loop](#sleep_loop)
- [sleep_end](#sleep_end)
- [move](#move)
- [interact_0](#interact_0)
- [eat](#eat) *
- [eat_pre](#eat_pre) *
- [eat_loop](#eat_loop) *
- [eat_end](#eat_end) *

There are 2 different options for idle_1  - you can either do `idle_1` as a one shot or `idle_1_pre`, `idle_1_loop` and `idle_1_end`.
The same applies for the eat animation - you can do one `eat` animation or `eat_pre`, `eat_loop` and `eat_end`.

#### idle_0
The basic standing and breathing idle animation.
Try to animate the top of the animal moving up and down by 1 pixel, so its subtle. You can also do subtle animations like tail swooshing, ears moving, etc.

#### idle_1
The idle animation for the animal which will play randomly - freedom to do whatever you want to add character to your animal.
Use `idle_1` on its own to do a one shot animation that only plays once (ie: a hop)

#### idle_1_pre
Start of the idle animation if you choose to do `idle_1_pre`, `idle_1_loop` and `idle_1_end` together instead of just `idle_1`.

#### idle_1_loop
The looping section of the idle animation.
You can either do one `idle_1` animation OR do 3 separate ones `idle_1_pre`, `idle_1_loop` and `idle_1_end`

#### idle_1_end
The end of the idle animation if you choose to do `idle_1_pre`, `idle_1_loop` and `idle_1_end` together instead of just `idle_1`.

#### sleep_pre
Animation for the animal lying down or getting ready to sleep.

#### sleep_loop
Animation which will be looped while the animal is sleeping.

#### sleep_end
Animation for the animal getting up from sleeping.
End frame should be similar to a start frame from the start idle frame so they can be joined seemlessly.

#### move
Movement animation like walking or flying.
Create the animation as if it's on the spot (keep the animal centered as much as possible).

#### interact_0
Petting animation for when you click on the animal.
To match the other animals, include the hand from the other animal spritesheets.

#### eat
A one shot animation for the animal eating.
You can either do one `eat` animation OR do 3 separate ones `eat_pre`, `eat_loop` and `eat_end`

#### eat_pre
Animation for getting into an eating position (like sitting down).
If you do `eat_pre` you will need to also do `eat_loop` and `eat_end`

#### eat_loop
Eating animation that is looped inbetween `eat_pre` and `eat_end`

#### eat_end
Animation for the animal getting out of its eating position (like getting up).
Played after the `eat_loop` is done. If you do `eat_end` you will need to also do `eat_pre` and `eat_end`

### Creating the spritesheet
You can arrange the animations you choose to do however you want within a spritesheet, in any order.
Keep track of the start and end frame position/indexes for each animation to help with importing the spritesheet later.

ie: idle_0 is frame 0-7, idle_1 is frame 9-12, etc

## Animal idle animation spritesheets
You can just use the first row of each spritesheet you created in the previous step for the idle animation by cropping the images (make sure the sprite height stays the same). You can also create new frames for the idle animation if you want.

## Animal portraits

## Animal shop page images

## Next steps [Create and configure your mod](docs/create-mod.md)

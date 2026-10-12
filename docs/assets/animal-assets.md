# Creating animal assets
A guide to creating assets for your animal mod

The following is an expansion on [this](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#Q0tId2i3IoCrrsxX51jcZlbTnxh) guide.

1. [Overview](#overview)
2. [A quick test](#a-quick-test-optional)
3. [Creating sprites](#creating-sprites)
4. [Animal animation spritesheets](#animal-animation-spritesheets)
5. [Animal idle animation spritesheets](#animal-idle-animation-spritesheets)
6. [Animal portraits](#animal-portraits)
7. [Animal shop page images](#animal-shop-page-images)


## Overview
There are 4 types of assets that are required to create a mod for a new animal in Tiny Pasture:
- [**animal animation spritesheets**](#animal-animation-spritesheets) (contains all the animations for the animal in the pasture)
- [**animal idle animation spritesheets**](#animal-idle-animation-spritesheets) (used for the idle animation when buying the animal)
- [**animal portraits**](#animal-portraits) (used in the pasture menu to show each animal you own)
- [**animal shop page images**](#animal-shop-page-images) (used in the shop for each animal - a locked ghost version and an unlocked full colour version)

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

You don't need to create additional shop lock/unlock images for other variants

## A quick test (optional)
To start with I would recommend looking at the assets that already exist for other animals and try to edit one.
Make sure you have done the [Godot setup](../godot-setup.md) first

1. Open your decompiled Tiny Pasture game folder in your file system
2. Navigate to > Assets > Animals
3. Choose one of the spritesheets, `cat_0_0.png` might be a good start as it's a smaller sheet and is simple
4. Open the spritesheet in your design tool of choice and try to replace the white colour with a different one
5. Save your updated design over the original image or just replace it (making sure the file name doesn't change)
6. Open your decompiled Tiny Pasture game folder in Godot
7. Run the game by pressing the play button in the top right, a new instance of the game should open
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

I created my first mod by drawing over the top of an existing spritesheet so it was a bit easier to understand how things are animated.

You need to create the following animation spritesheets for both juvenile and adult versions of every colour variant you want to add.

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
Try to animate the top of the animal moving up and down by 1 pixel, so it's subtle. You can also do subtle animations like tail swooshing, ears moving, etc.

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
End frame should be similar to a start frame from the start idle frame so they can be joined seamlessly.

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
Eating animation that is looped in between `eat_pre` and `eat_end`

#### eat_end
Animation for the animal getting out of its eating position (like getting up).
Played after the `eat_loop` is done. If you do `eat_end` you will need to also do `eat_pre` and `eat_end`

<img width="934" height="642" alt="Screenshot 2026-10-12 at 9 55 09 pm" src="https://github.com/user-attachments/assets/7236d5d9-923f-49f2-bb22-c4fca606d3c1" />
<img width="1176" height="471" alt="Screenshot 2026-10-12 at 9 57 33 pm" src="https://github.com/user-attachments/assets/8874c571-e19e-46a1-9ae6-0a2ffcd55b45" />

### Creating the spritesheet
You can arrange the animations you choose to do however you want within a spritesheet, in any order.
Keep track of the start and end frame position/co-ordinates for each animation to help with importing the spritesheet later.

- Note how duplicate sprites are not repeated but are used in multiple animations. This is to save space on your spritesheet (and lower file sizes).
- Individual animations don't have to all be in a line, we just separate them so it's easier to see on the spritesheet
- There's two ways to declare which frames/sprites you want to use for animations and in what order, in the next step:
- 1. by giving a start and end frame `start: [0, 0], end: [2, 1]` (if the animation is simple, in one straight line and doesn't need to repeat any frames or use frames from other animations)
  2. by giving a list of all the frames in the animation, in the order you want `[[0,0], [1.0], [2,0], [1,0], [0,0]]` (if the frames are not in the right order (left -> right) on the spritesheet, you need to repeat frames or use frames from other sections of the spritesheet)

ie: idle_0 is frame 0,0 - 7,0 and idle_1_pre is frame 0,1 - 2,1, etc

<img width="783" height="685" alt="Group 98" src="https://github.com/user-attachments/assets/9264f1c5-ec76-487c-8a77-542d2adb9b9e" />
<img width="558" height="590" alt="Group 98 (1)" src="https://github.com/user-attachments/assets/2b7f0415-0a4b-4afa-ab3f-a19257e99674" />


## Animal idle animation spritesheets
You can just use the first row of each spritesheet (or wherever you placed [idle_0](#idle_0)) you created in the previous step for the idle animation by cropping the images (make sure the sprite/frame height stays the same). You can also create new frames for the idle animation if you want.

You need to export an idle spritesheet for both juvenile and adult in every colour variant you want to add.

<img width="1084" height="182" alt="Screenshot 2026-10-12 at 9 50 22 pm" src="https://github.com/user-attachments/assets/df436a07-04f7-4426-9267-f0ddced2736a" />
<img width="731" height="400" alt="Screenshot 2026-10-12 at 9 51 47 pm" src="https://github.com/user-attachments/assets/419255cc-dbb0-4d92-8d29-ad123f84e896" />


## Animal portraits
These are the images used in the pasture menu to show each animal you own.

You need to create a portrait for both the juvenile and adult of every colour variant.

**Image specifications:**
- 36px x 36px
- transparent background
- crop the frame you want to use to feature the head of the animal in the portrait
- the adult version is more zoomed in

<img width="745" height="230" alt="Screenshot 2026-10-12 at 9 45 41 pm" src="https://github.com/user-attachments/assets/85df6215-74ab-42ac-b036-b368a1915511" />
<img width="770" height="385" alt="Screenshot 2026-10-12 at 9 47 40 pm" src="https://github.com/user-attachments/assets/8964a5d3-7159-4cfd-bcfb-91182e5244e2" />


## Animal shop page images
These are the images used in the shop for each animal, before you click on it to buy one. Locked animals are greyed out before you are allowed to buy them.

1. You need to create one locked version which is a silhouette of the juvenile animal with the dashed line at its feet.
2. And then one unlocked version which is a full colour image of the juvenile animal with the dashed line at its feet.

<img width="578" height="214" alt="Screenshot 2026-10-12 at 9 38 15 pm" src="https://github.com/user-attachments/assets/e3a46a7c-0b9e-4634-af42-5b8b27880293" />
<img width="803" height="242" alt="Screenshot 2026-10-12 at 9 40 06 pm" src="https://github.com/user-attachments/assets/c31d94e1-1f23-4873-855f-39554687f935" />

## Next steps [Create and configure your mod](../templates/create-animal-mod.md#create-and-configure-your-mod)

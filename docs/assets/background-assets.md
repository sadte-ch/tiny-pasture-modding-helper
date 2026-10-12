# Creating background assets
A guide to creating assets for your background mod

1. [Overview](#overview)
2. [Create Background Images](#create-background-images)
3. [Create Shop Image](#create-shop-image)

## Overview
There are only 2 types of images required to create each background item:
- [**background images**](#create-background-images) (an image containing the background which is used to display it in the game)
- [**shop image**](#create-shop-image) (an image containing the same item but within the shop template)

## Create Background images
Png images containing your background layers - used to display it in the game

You can add as many layers as you want (you can just do 1), an example:

Layer 0 - big clouds at the back -`my_new_background_mod_00.png`
Layer 1 - mountains on top of the big clouds -`my_new_background_mod_01.png`
Layer 2 - little clouds in front of the mountains -`my_new_background_mod_02.png`

You might want to separate out your background design as much as possible into different layers to create more depth and so you can apply scroll animations for certain elements in the next step.

Requirements:
- 960px x 50px pngs
- Images needs to be named to match your mod name in snake_case, with an added index (must have the extra 0 before the index), ie: `my_new_background_mod_0{index}.png`

- The content can be flush with all the edges of the image (you don't need to leave a gap)
- Looks best when designed to be front facing perspective to match the rest of the game

## Create Shop Image
A png image to show off a preview for your background (all the layers together), within the correct shop image size.

Requirements:
- 120px x 36px png
- Image needs to be named to match your mod name in snake_case, ie: `my_new_background_mod.png`

## Next steps [Create and configure your mod](../templates/create-background-mod.md#create-and-configure-your-mod)

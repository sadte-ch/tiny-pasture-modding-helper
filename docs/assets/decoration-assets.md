# Creating decoration assets
A guide to creating assets for your decoration mod

Looking to create a plant decoration? [Instructions here](./plant-decoration-assets.md)

1. [Overview](#overview)
2. [Create Decoration image](#create-decoration-image)
3. [Create Shop Image](#create-shop-image)

## Overview
There are only 2 images required to create each decoration item:
- [**decoration image**](#create-decoration-image) (an image containing the decoration which is used to display it in the game)
- [**shop image**](#create-shop-image) (an image containing the same item but within the shop template)

## Create Decoration Image
A png image containing your decoration - used to display it in the game

Requirements:
- 37px x 50px png
- Image needs to be named to match your mod name in snake_case, ie: `my_new_decoration_mod.png`

- The content can be flush with all the edges of the image (you don't need to leave a gap)
- You don't need to fill all the space
- Try to center the contents horizontally and align it to the bottom
- Looks best when designed to be front facing perspective to match the rest of the game

## Create Shop Image
A png image containing your decoration, within the shop template design.
You can take the design you used for your decoration image above and paste it onto the shop template image [here](../assets/shop-template.png)

Requirements:
- 54px x 46px png with the shop border at the bottom
- Image needs to be named to match your mod name in snake_case, ie: `my_new_decoration_mod.png` (same as above)

- Try to center the contents horizontally and align it to the bottom (without covering the border line)

## Next steps [Create and configure your mod](../templates/create-decoration-mod.md#create-and-configure-your-mod)

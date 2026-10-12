# Creating plant decoration assets
A guide to creating assets for your plant decoration mod.
If a decoration is flagged as a plant, it means that the decoration can "grow" in 4 stages. When it is ready, you can click on the decoration and the edible food item will be dropped.

1. [Overview](#overview)
2. [Create Decoration images](#create-plant-decoration-images)
3. [Create Shop Image](#create-shop-image)

## Overview
There are 5 images required to create each plant decoration item:
- [**decoration images x 4**](#create-plant-decoration-images) (4 images which depict the 4 stages of the items lifecycle)
- [**shop image**](#create-shop-image) (an image containing the final stage image but within the shop template)
- [**food image**](#create-food-image) (an image containing the food you want the plant/item to drop)

## Create Plant Decoration Images
4 png images containing the 4 stages of the plant/items lifecycle - used to display it in the game

Requirements:
- You can choose how wide you want these images to be (use to same width and height for all 4)
- Your chosen width x 50px pngs
- Images needs to be named to match your mod name in snake_case, with an added number to indicate the stage, ie: `my_new_plant_decoration_mod_0.png`

- The content can be flush with all the edges of the image (you don't need to leave a gap)
- You don't need to fill all the space
- Try to center the contents horizontally and align it to the bottom
- Looks best when designed to be front facing perspective to match the rest of the game

1. Stage 1 `my_new_plant_decoration_mod_0.png`
2. Stage 2 `my_new_plant_decoration_mod_1.png`
3. Stage 3 `my_new_plant_decoration_mod_2.png`
4. Stage 4 `my_new_plant_decoration_mod_3.png`

You need to make sure there are 4 images, each with a number to indicate the stage at the end
If you don't want 4 stages, you can use the same image as a previous stage but change the name

## Create Shop Image
A png image containing your plant/item in its final stage, within the shop template design.
You can take the design you used for your final decoration image above and paste it onto the shop template image [here](../assets/shop-template.png)
I like to include the food item in the top right corner so people know it is a plant decoration but you don't have to do that

Requirements:
- 54px x 46px png with the shop border at the bottom
- Image needs to be named to match your mod name in snake_case, ie: `my_new_plant_decoration_mod.png`

- Try to center the contents horizontally and align it to the bottom (without covering the border line)

## Create Food Image
A png image containing the edible food item you want to plant to drop when it's ready

Requirements:
- Any width and height png
- Image needs to be named to match your mod name in snake_case, ie: `my_new_plant_decoration_mod.png`

- I usually just make it so that the image hugs the food item, without leaving any space around. If you have space around, just align the food item to the bottom center of the image.

## Next steps [Create and configure your mod](../templates/create-plant-decoration-mod.md#create-and-configure-your-mod)

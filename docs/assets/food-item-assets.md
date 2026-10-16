# Creating food item assets
A guide to creating assets for your food item mod.
A food item will get added to the Items shop page, which you can buy or bookmark to feed your animals.

1. [Overview](#overview)
2. [Create Food Drop Image](#create-food-drop-image)
3. [Create Food Icon Image](#create-food-icon-image)
4. [Create Shop Image](#create-shop-image)

## Overview
There are 3 images required to create each plant decoration item:
- [**food drop image**](#create-food-drop-image) (an image used to drop the food to feed your animals)
- [**food icon image**](#create-food-icon-image) (a smaller image used for bookmarked food items)
- [**shop image**](#create-shop-image) (an image containing the food within the shop template)

## Create Food Drop Image
A png image containing the edible food item, which will be used to feed your animals in the game.

Requirements:
- 15px x 15px png (can reduce the height if you want, to hug the contents)
- Image needs to be named to match your mod name in snake_case, with `drop_` at the start, ie: `drop_my_new_food_item_mod.png`

- I usually just make it so that the image hugs the food item, without leaving any space around. If you have space around, just align the food item to the bottom center of the image.

## Create Food Icon Image
A smaller png image containing the edible food item, seen when you have bookmarked a food item and when you select the food item in the shop.

Requirements:
- 10px x 10px png
- Image needs to be named to match your mod name in snake_case, with `icon_` at the start, ie: `icon_my_new_food_item_mod.png`

## Create Shop Image
A higher res png image containing your food item.

Requirements:
- 32px x 32px png
- Image needs to be named to match your mod name in snake_case, ie: `my_new_food_item_mod.png`

- Try to keep the food item centered


## Next steps [Create and configure your mod](../templates/create-plant-decoration-mod.md#create-and-configure-your-mod)

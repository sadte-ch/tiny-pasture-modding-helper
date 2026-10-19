extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_items.gd"

@export var new_food_item_new_fi = preload("res://Scene/UI/PopupUI/UIShop/Items/ui_shop_item_food.tscn")

const new_food_item = preload("res://mods-unpacked/Your_Name-NewFoodItem/overwrites/Assets/UI/PopupUI/Shop/item/new_food.png")
const new_food_item_item_price = 100

func _ready() -> void:
	super()
	var FI1000_01 = new_food_item_new_fi.instantiate()
	food_box.add_child(FI1000_01)
	FI1000_01.type_id = 1000
	FI1000_01.item_tex.texture = new_food_item
	FI1000_01.txt_price.text = str(roundi(new_food_item_item_price))
	FI1000_01.item_name.text = tr("ITEM_NAME_FOOD_1000")
	FI1000_01.use_item.connect(_on_bt_food_pressed)

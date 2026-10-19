extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_items.gd"

@export var new_food_item_new_fi = preload("res://Scene/UI/PopupUI/UIShop/Items/ui_shop_item_food.tscn")

const new_food_items_pack_0 = preload("res://mods-unpacked/NewFoodItemsPack/overwrites/Assets/UI/PopupUI/Shop/item/new_food_items_pack_0.png")
const new_food_items_pack_0_price = 100

const new_food_items_pack_1 = preload("res://mods-unpacked/NewFoodItemsPack/overwrites/Assets/UI/PopupUI/Shop/item/new_food_items_pack_1.png")
const new_food_items_pack_1_price = 100

func _ready() -> void:
	super()
	var FI1000_0 = new_food_item_new_fi.instantiate()
	food_box.add_child(FI1000_0)
	FI1000_0.type_id = 10000
	FI1000_0.item_tex.texture = new_food_items_pack_0
	FI1000_0.txt_price.text = str(roundi(new_food_items_pack_0_price))
	FI1000_0.item_name.text = tr("ITEM_NAME_FOOD_10000")
	FI1000_0.use_item.connect(_on_bt_food_pressed)

	var FI1000_1 = new_food_item_new_fi.instantiate()
	food_box.add_child(FI1000_1)
	FI1000_1.type_id = 10001
	FI1000_1.item_tex.texture = new_food_items_pack_1
	FI1000_1.txt_price.text = str(roundi(new_food_items_pack_1_price))
	FI1000_1.item_name.text = tr("ITEM_NAME_FOOD_10001")
	FI1000_1.use_item.connect(_on_bt_food_pressed)

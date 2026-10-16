extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_items.gd"

@export var new_hp_item_new_hp = preload("res://Scene/UI/PopupUI/UIShop/Items/ui_shop_item_hp.tscn")

const new_hp_item = preload("res://mods-unpacked/Your_Name-NewHPItem/overwrites/Assets/UI/PopupUI/Shop/item/new_hp_item.png")
const new_hp_item_item_price = 100
const new_hp_item_hp_value = 10

func _ready() -> void:
	super()
	var HP1000_01 = new_hp_item_new_hp.instantiate()
	hp_box.add_child(HP1000_01)
	HP1000_01.type_id = 1000
	HP1000_01.hp_value = new_hp_item_hp_value
	HP1000_01.unlock_condition = 0
	HP1000_01.item_tex.texture = new_hp_item
	HP1000_01.txt_price.text = str(roundi(new_hp_item_item_price))
	HP1000_01.item_name.text = tr("ITEM_NAME_HP_1000")

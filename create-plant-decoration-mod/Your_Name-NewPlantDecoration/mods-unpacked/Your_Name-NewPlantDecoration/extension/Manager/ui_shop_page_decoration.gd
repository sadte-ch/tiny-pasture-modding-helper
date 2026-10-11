extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var new_plant_deco_new_bd = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_normal.tscn")

const new_plant_deco = preload("res://mods-unpacked/Your_Name-NewPlantDecoration/overwrites/Assets/UI/PopupUI/Shop/Deco/new_plant_deco.png")
const new_plant_deco_deco_path = "res://mods-unpacked/Your_Name-NewPlantDecoration/overwrites/Scene/Level/Buildings/Decos/new_plant_deco_preview.tscn"
const new_plant_deco_item_price = 100

func _ready() -> void:
	super()
	var BD1000_01 = new_plant_deco_new_bd.instantiate()
	normal_box.add_child(BD1000_01)
	BD1000_01.type_id = 1000
	BD1000_01.item_price = new_plant_deco_item_price
	BD1000_01.item_tex.texture = new_plant_deco
	BD1000_01.txt_price.text = str(roundi(new_plant_deco_item_price))
	BD1000_01.unlock_condition = 0
	BD1000_01.deco_path = new_plant_deco_deco_path
	BD1000_01.item_name.text = tr("DECO_NAME_NORMAL_1000")
	BD1000_01.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_1000")

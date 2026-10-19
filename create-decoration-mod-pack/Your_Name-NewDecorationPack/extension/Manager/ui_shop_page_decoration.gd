extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var new_deco_pack_new_bd = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_normal.tscn")

const new_deco_pack_0 = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Assets/UI/PopupUI/Shop/Deco/new_deco_pack_0.png")
const new_deco_pack_0_deco_path = "res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_0_preview.tscn"
const new_deco_pack_0_item_price = 1000

const new_deco_pack_1 = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Assets/UI/PopupUI/Shop/Deco/new_deco_pack_1.png")
const new_deco_pack_1_deco_path = "res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_1_preview.tscn"
const new_deco_pack_1_item_price = 1000

func _ready() -> void:
	super()
	var BD1000_0 = new_deco_pack_new_bd.instantiate()
	normal_box.add_child(BD1000_0)
	BD1000_0.type_id = 10000
	BD1000_0.item_price = new_deco_pack_0_item_price
	BD1000_0.item_tex.texture = new_deco_pack_0
	BD1000_0.txt_price.text = str(roundi(new_deco_pack_0_item_price))
	BD1000_0.unlock_condition = 0
	BD1000_0.deco_path = new_deco_pack_0_deco_path
	BD1000_0.item_name.text = tr("DECO_NAME_NORMAL_10000")
	BD1000_0.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_10000")

	var BD1000_1 = new_deco_pack_new_bd.instantiate()
	normal_box.add_child(BD1000_1)
	BD1000_1.type_id = 10001
	BD1000_1.item_price = new_deco_pack_1_item_price
	BD1000_1.item_tex.texture = new_deco_pack_1
	BD1000_1.txt_price.text = str(roundi(new_deco_pack_1_item_price))
	BD1000_1.unlock_condition = 0
	BD1000_1.deco_path = new_deco_pack_1_deco_path
	BD1000_1.item_name.text = tr("DECO_NAME_NORMAL_10001")
	BD1000_1.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_10001")

extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var new_bd = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_normal.tscn")

const new_item = preload("res://mods-unpacked/Sad_Tech-StardewValleyBackground/overwrites/Assets/UI/PopupUI/Shop/Deco/new_item.png")

func _ready() -> void:
	super()
	var BD2016_01 = new_bd.instantiate()
	normal_box.add_child(BD2016_01)
	var newCount = normal_box.get_child_count()
	BD2016_01.type_id = newCount + 1 #index in background list on shop page
	BD2016_01.item_price = 200
	BD2016_01.item_tex.texture = new_item
	BD2016_01.txt_price.text = str(roundi(200))
	BD2016_01.item_name.text = tr("DECO_NAME_NORMAL_2016")
	BD2016_01.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_2016")

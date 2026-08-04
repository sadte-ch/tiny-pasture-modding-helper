extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var new_bg = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_bg.tscn")

const bg_new = preload("res://mods-unpacked/Sad_Tech-NewBackground/overwrites/Assets/UI/PopupUI/Shop/Deco/bg_new.png")

func _ready() -> void:
	super()
	var BG1000_01 = new_bg.instantiate()
	bg_box.add_child(BG1000_01)
	var newCount = bg_box.get_child_count()
	BG1000_01.type_id = newCount + 1 #index in background list on shop page
	BG1000_01.item_price = 2000
	BG1000_01.item_tex.texture = bg_new
	BG1000_01.txt_price.text = str(roundi(2000))
	BG1000_01.item_name.text = tr("DECO_NAME_BG_1000")
	BG1000_01.hover_tip.hover_msg = tr("DECO_DESC_BG_1000")

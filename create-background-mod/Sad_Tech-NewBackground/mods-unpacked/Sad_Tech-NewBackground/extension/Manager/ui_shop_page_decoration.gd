extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var new_bg = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_bg.tscn")
#ItemTex 预览图

#item_price 价格
#type_id 编号
#item_name 名字
#hover_tip 描述
const bg_new = preload("res://mods-unpacked/Sad_Tech-NewBackground/overwrites/Assets/UI/PopupUI/Decoration/Background/bg_new.png")


func _ready() -> void:
	super()
	var BG1000_01 = new_bg.instantiate()
	bg_box.add_child(BG1000_01)
	BG1000_01.type_id = 1000
	BG1000_01.item_price = 2000
	BG1000_01.item_tex.texture = bg_new
	BG1000_01.txt_price.text = str(roundi(2000))
	BG1000_01.item_name.text = tr("DECO_NAME_BG_%s" % 1000)
	BG1000_01.hover_tip.hover_msg = tr("DECO_DESC_BG_%s" % 1000)
	#bg_573201.pressed.connect(_57bt_press)
	
#func _57bt_press():
	#pass

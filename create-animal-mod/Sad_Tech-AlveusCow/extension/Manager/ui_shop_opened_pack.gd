extends "res://Scene/UI/PopupUI/UIShop/ui_shop_opened_pack.gd"


func _ready() -> void:
	super()
	var global_library = animation_player.get_animation_library("")
	var animation_res = preload("res://mods-unpacked/Sad_Tech-AlveusCow/extension/Animation/alveus_cow.res")
	global_library.add_animation("alveus_cow", animation_res)

extends "res://Scene/UI/PopupUI/UIShop/ui_shop_page_decoration.gd"

@export var stardew_crops_foraging_new_bd = preload("res://Scene/UI/PopupUI/UIShop/decorations/ui_shop_deco_normal.tscn")

const stardew_crops_foraging_0 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_0.png")
const stardew_crops_foraging_0_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_0_preview.tscn"
const stardew_crops_foraging_0_item_price = 250

const stardew_crops_foraging_1 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_1.png")
const stardew_crops_foraging_1_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_1_preview.tscn"
const stardew_crops_foraging_1_item_price = 250

const stardew_crops_foraging_2 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_2.png")
const stardew_crops_foraging_2_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_2_preview.tscn"
const stardew_crops_foraging_2_item_price = 250

const stardew_crops_foraging_3 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_3.png")
const stardew_crops_foraging_3_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_3_preview.tscn"
const stardew_crops_foraging_3_item_price = 250

const stardew_crops_foraging_4 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_4.png")
const stardew_crops_foraging_4_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_4_preview.tscn"
const stardew_crops_foraging_4_item_price = 250

const stardew_crops_foraging_5 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_5.png")
const stardew_crops_foraging_5_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_5_preview.tscn"
const stardew_crops_foraging_5_item_price = 250

const stardew_crops_foraging_6 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_6.png")
const stardew_crops_foraging_6_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_6_preview.tscn"
const stardew_crops_foraging_6_item_price = 250

const stardew_crops_foraging_7 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_7.png")
const stardew_crops_foraging_7_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_7_preview.tscn"
const stardew_crops_foraging_7_item_price = 250

const stardew_crops_foraging_8 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_8.png")
const stardew_crops_foraging_8_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_8_preview.tscn"
const stardew_crops_foraging_8_item_price = 250

const stardew_crops_foraging_9 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_9.png")
const stardew_crops_foraging_9_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_9_preview.tscn"
const stardew_crops_foraging_9_item_price = 250

const stardew_crops_foraging_10 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_10.png")
const stardew_crops_foraging_10_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_10_preview.tscn"
const stardew_crops_foraging_10_item_price = 250

const stardew_crops_foraging_11 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_11.png")
const stardew_crops_foraging_11_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_11_preview.tscn"
const stardew_crops_foraging_11_item_price = 250

const stardew_crops_foraging_12 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_12.png")
const stardew_crops_foraging_12_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_12_preview.tscn"
const stardew_crops_foraging_12_item_price = 250

const stardew_crops_foraging_13 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_13.png")
const stardew_crops_foraging_13_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_13_preview.tscn"
const stardew_crops_foraging_13_item_price = 250

const stardew_crops_foraging_14 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_14.png")
const stardew_crops_foraging_14_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_14_preview.tscn"
const stardew_crops_foraging_14_item_price = 500

const stardew_crops_foraging_15 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_15.png")
const stardew_crops_foraging_15_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_15_preview.tscn"
const stardew_crops_foraging_15_item_price = 500

const stardew_crops_foraging_16 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_16.png")
const stardew_crops_foraging_16_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_16_preview.tscn"
const stardew_crops_foraging_16_item_price = 500

const stardew_crops_foraging_17 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_17.png")
const stardew_crops_foraging_17_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_17_preview.tscn"
const stardew_crops_foraging_17_item_price = 500

const stardew_crops_foraging_18 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_18.png")
const stardew_crops_foraging_18_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_18_preview.tscn"
const stardew_crops_foraging_18_item_price = 500

const stardew_crops_foraging_19 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_19.png")
const stardew_crops_foraging_19_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_19_preview.tscn"
const stardew_crops_foraging_19_item_price = 500

const stardew_crops_foraging_20 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_20.png")
const stardew_crops_foraging_20_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_20_preview.tscn"
const stardew_crops_foraging_20_item_price = 500

const stardew_crops_foraging_21 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_21.png")
const stardew_crops_foraging_21_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_21_preview.tscn"
const stardew_crops_foraging_21_item_price = 500

const stardew_crops_foraging_22 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_22.png")
const stardew_crops_foraging_22_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_22_preview.tscn"
const stardew_crops_foraging_22_item_price = 500

const stardew_crops_foraging_23 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_23.png")
const stardew_crops_foraging_23_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_23_preview.tscn"
const stardew_crops_foraging_23_item_price = 1000

const stardew_crops_foraging_24 = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Assets/UI/PopupUI/Shop/Deco/stardew_crops_foraging_24.png")
const stardew_crops_foraging_24_deco_path = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_24_preview.tscn"
const stardew_crops_foraging_24_item_price = 1000


func _ready() -> void:
	super()
	var BD889030_0 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_0)
	BD889030_0.type_id = 8890300
	BD889030_0.item_price = stardew_crops_foraging_0_item_price
	BD889030_0.item_tex.texture = stardew_crops_foraging_0
	BD889030_0.txt_price.text = str(roundi(stardew_crops_foraging_0_item_price))
	BD889030_0.unlock_condition = 0
	BD889030_0.deco_path = stardew_crops_foraging_0_deco_path
	BD889030_0.item_name.text = tr("DECO_NAME_NORMAL_8890300")
	BD889030_0.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890300")

	var BD889030_1 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_1)
	BD889030_1.type_id = 8890301
	BD889030_1.item_price = stardew_crops_foraging_1_item_price
	BD889030_1.item_tex.texture = stardew_crops_foraging_1
	BD889030_1.txt_price.text = str(roundi(stardew_crops_foraging_1_item_price))
	BD889030_1.unlock_condition = 0
	BD889030_1.deco_path = stardew_crops_foraging_1_deco_path
	BD889030_1.item_name.text = tr("DECO_NAME_NORMAL_8890301")
	BD889030_1.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890301")

	var BD889030_2 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_2)
	BD889030_2.type_id = 8890302
	BD889030_2.item_price = stardew_crops_foraging_2_item_price
	BD889030_2.item_tex.texture = stardew_crops_foraging_2
	BD889030_2.txt_price.text = str(roundi(stardew_crops_foraging_2_item_price))
	BD889030_2.unlock_condition = 0
	BD889030_2.deco_path = stardew_crops_foraging_2_deco_path
	BD889030_2.item_name.text = tr("DECO_NAME_NORMAL_8890302")
	BD889030_2.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890302")

	var BD889030_3 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_3)
	BD889030_3.type_id = 8890303
	BD889030_3.item_price = stardew_crops_foraging_3_item_price
	BD889030_3.item_tex.texture = stardew_crops_foraging_3
	BD889030_3.txt_price.text = str(roundi(stardew_crops_foraging_3_item_price))
	BD889030_3.unlock_condition = 0
	BD889030_3.deco_path = stardew_crops_foraging_3_deco_path
	BD889030_3.item_name.text = tr("DECO_NAME_NORMAL_8890303")
	BD889030_3.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890303")

	var BD889030_4 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_4)
	BD889030_4.type_id = 8890304
	BD889030_4.item_price = stardew_crops_foraging_4_item_price
	BD889030_4.item_tex.texture = stardew_crops_foraging_4
	BD889030_4.txt_price.text = str(roundi(stardew_crops_foraging_4_item_price))
	BD889030_4.unlock_condition = 0
	BD889030_4.deco_path = stardew_crops_foraging_4_deco_path
	BD889030_4.item_name.text = tr("DECO_NAME_NORMAL_8890304")
	BD889030_4.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890304")

	var BD889030_5 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_5)
	BD889030_5.type_id = 8890305
	BD889030_5.item_price = stardew_crops_foraging_5_item_price
	BD889030_5.item_tex.texture = stardew_crops_foraging_5
	BD889030_5.txt_price.text = str(roundi(stardew_crops_foraging_5_item_price))
	BD889030_5.unlock_condition = 0
	BD889030_5.deco_path = stardew_crops_foraging_5_deco_path
	BD889030_5.item_name.text = tr("DECO_NAME_NORMAL_8890305")
	BD889030_5.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890305")

	var BD889030_6 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_6)
	BD889030_6.type_id = 8890306
	BD889030_6.item_price = stardew_crops_foraging_6_item_price
	BD889030_6.item_tex.texture = stardew_crops_foraging_6
	BD889030_6.txt_price.text = str(roundi(stardew_crops_foraging_6_item_price))
	BD889030_6.unlock_condition = 0
	BD889030_6.deco_path = stardew_crops_foraging_6_deco_path
	BD889030_6.item_name.text = tr("DECO_NAME_NORMAL_8890306")
	BD889030_6.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890306")

	var BD889030_7 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_7)
	BD889030_7.type_id = 8890307
	BD889030_7.item_price = stardew_crops_foraging_7_item_price
	BD889030_7.item_tex.texture = stardew_crops_foraging_7
	BD889030_7.txt_price.text = str(roundi(stardew_crops_foraging_7_item_price))
	BD889030_7.unlock_condition = 0
	BD889030_7.deco_path = stardew_crops_foraging_7_deco_path
	BD889030_7.item_name.text = tr("DECO_NAME_NORMAL_8890307")
	BD889030_7.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890307")

	var BD889030_8 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_8)
	BD889030_8.type_id = 8890308
	BD889030_8.item_price = stardew_crops_foraging_8_item_price
	BD889030_8.item_tex.texture = stardew_crops_foraging_8
	BD889030_8.txt_price.text = str(roundi(stardew_crops_foraging_8_item_price))
	BD889030_8.unlock_condition = 0
	BD889030_8.deco_path = stardew_crops_foraging_8_deco_path
	BD889030_8.item_name.text = tr("DECO_NAME_NORMAL_8890308")
	BD889030_8.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890308")

	var BD889030_9 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_9)
	BD889030_9.type_id = 8890309
	BD889030_9.item_price = stardew_crops_foraging_9_item_price
	BD889030_9.item_tex.texture = stardew_crops_foraging_9
	BD889030_9.txt_price.text = str(roundi(stardew_crops_foraging_9_item_price))
	BD889030_9.unlock_condition = 0
	BD889030_9.deco_path = stardew_crops_foraging_9_deco_path
	BD889030_9.item_name.text = tr("DECO_NAME_NORMAL_8890309")
	BD889030_9.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_8890309")

	var BD889030_10 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_10)
	BD889030_10.type_id = 88903010
	BD889030_10.item_price = stardew_crops_foraging_10_item_price
	BD889030_10.item_tex.texture = stardew_crops_foraging_10
	BD889030_10.txt_price.text = str(roundi(stardew_crops_foraging_10_item_price))
	BD889030_10.unlock_condition = 0
	BD889030_10.deco_path = stardew_crops_foraging_10_deco_path
	BD889030_10.item_name.text = tr("DECO_NAME_NORMAL_88903010")
	BD889030_10.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903010")

	var BD889030_11 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_11)
	BD889030_11.type_id = 88903011
	BD889030_11.item_price = stardew_crops_foraging_11_item_price
	BD889030_11.item_tex.texture = stardew_crops_foraging_11
	BD889030_11.txt_price.text = str(roundi(stardew_crops_foraging_11_item_price))
	BD889030_11.unlock_condition = 0
	BD889030_11.deco_path = stardew_crops_foraging_11_deco_path
	BD889030_11.item_name.text = tr("DECO_NAME_NORMAL_88903011")
	BD889030_11.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903011")

	var BD889030_12 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_12)
	BD889030_12.type_id = 88903012
	BD889030_12.item_price = stardew_crops_foraging_12_item_price
	BD889030_12.item_tex.texture = stardew_crops_foraging_12
	BD889030_12.txt_price.text = str(roundi(stardew_crops_foraging_12_item_price))
	BD889030_12.unlock_condition = 0
	BD889030_12.deco_path = stardew_crops_foraging_12_deco_path
	BD889030_12.item_name.text = tr("DECO_NAME_NORMAL_88903012")
	BD889030_12.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903012")

	var BD889030_13 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_13)
	BD889030_13.type_id = 88903013
	BD889030_13.item_price = stardew_crops_foraging_13_item_price
	BD889030_13.item_tex.texture = stardew_crops_foraging_13
	BD889030_13.txt_price.text = str(roundi(stardew_crops_foraging_13_item_price))
	BD889030_13.unlock_condition = 0
	BD889030_13.deco_path = stardew_crops_foraging_13_deco_path
	BD889030_13.item_name.text = tr("DECO_NAME_NORMAL_88903013")
	BD889030_13.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903013")

	var BD889030_14 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_14)
	BD889030_14.type_id = 88903014
	BD889030_14.item_price = stardew_crops_foraging_14_item_price
	BD889030_14.item_tex.texture = stardew_crops_foraging_14
	BD889030_14.txt_price.text = str(roundi(stardew_crops_foraging_14_item_price))
	BD889030_14.unlock_condition = 0
	BD889030_14.deco_path = stardew_crops_foraging_14_deco_path
	BD889030_14.item_name.text = tr("DECO_NAME_NORMAL_88903014")
	BD889030_14.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903014")

	var BD889030_15 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_15)
	BD889030_15.type_id = 88903015
	BD889030_15.item_price = stardew_crops_foraging_15_item_price
	BD889030_15.item_tex.texture = stardew_crops_foraging_15
	BD889030_15.txt_price.text = str(roundi(stardew_crops_foraging_15_item_price))
	BD889030_15.unlock_condition = 0
	BD889030_15.deco_path = stardew_crops_foraging_15_deco_path
	BD889030_15.item_name.text = tr("DECO_NAME_NORMAL_88903015")
	BD889030_15.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903015")

	var BD889030_16 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_16)
	BD889030_16.type_id = 88903016
	BD889030_16.item_price = stardew_crops_foraging_16_item_price
	BD889030_16.item_tex.texture = stardew_crops_foraging_16
	BD889030_16.txt_price.text = str(roundi(stardew_crops_foraging_16_item_price))
	BD889030_16.unlock_condition = 0
	BD889030_16.deco_path = stardew_crops_foraging_16_deco_path
	BD889030_16.item_name.text = tr("DECO_NAME_NORMAL_88903016")
	BD889030_16.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903016")

	var BD889030_17 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_17)
	BD889030_17.type_id = 88903017
	BD889030_17.item_price = stardew_crops_foraging_17_item_price
	BD889030_17.item_tex.texture = stardew_crops_foraging_17
	BD889030_17.txt_price.text = str(roundi(stardew_crops_foraging_17_item_price))
	BD889030_17.unlock_condition = 0
	BD889030_17.deco_path = stardew_crops_foraging_17_deco_path
	BD889030_17.item_name.text = tr("DECO_NAME_NORMAL_88903017")
	BD889030_17.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903017")

	var BD889030_18 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_18)
	BD889030_18.type_id = 88903018
	BD889030_18.item_price = stardew_crops_foraging_18_item_price
	BD889030_18.item_tex.texture = stardew_crops_foraging_18
	BD889030_18.txt_price.text = str(roundi(stardew_crops_foraging_18_item_price))
	BD889030_18.unlock_condition = 0
	BD889030_18.deco_path = stardew_crops_foraging_18_deco_path
	BD889030_18.item_name.text = tr("DECO_NAME_NORMAL_88903018")
	BD889030_18.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903018")

	var BD889030_19 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_19)
	BD889030_19.type_id = 88903019
	BD889030_19.item_price = stardew_crops_foraging_19_item_price
	BD889030_19.item_tex.texture = stardew_crops_foraging_19
	BD889030_19.txt_price.text = str(roundi(stardew_crops_foraging_19_item_price))
	BD889030_19.unlock_condition = 0
	BD889030_19.deco_path = stardew_crops_foraging_19_deco_path
	BD889030_19.item_name.text = tr("DECO_NAME_NORMAL_88903019")
	BD889030_19.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903019")

	var BD889030_20 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_20)
	BD889030_20.type_id = 88903020
	BD889030_20.item_price = stardew_crops_foraging_20_item_price
	BD889030_20.item_tex.texture = stardew_crops_foraging_20
	BD889030_20.txt_price.text = str(roundi(stardew_crops_foraging_20_item_price))
	BD889030_20.unlock_condition = 0
	BD889030_20.deco_path = stardew_crops_foraging_20_deco_path
	BD889030_20.item_name.text = tr("DECO_NAME_NORMAL_88903020")
	BD889030_20.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903020")

	var BD889030_21 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_21)
	BD889030_21.type_id = 88903021
	BD889030_21.item_price = stardew_crops_foraging_21_item_price
	BD889030_21.item_tex.texture = stardew_crops_foraging_21
	BD889030_21.txt_price.text = str(roundi(stardew_crops_foraging_21_item_price))
	BD889030_21.unlock_condition = 0
	BD889030_21.deco_path = stardew_crops_foraging_21_deco_path
	BD889030_21.item_name.text = tr("DECO_NAME_NORMAL_88903021")
	BD889030_21.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903021")

	var BD889030_22 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_22)
	BD889030_22.type_id = 88903022
	BD889030_22.item_price = stardew_crops_foraging_22_item_price
	BD889030_22.item_tex.texture = stardew_crops_foraging_22
	BD889030_22.txt_price.text = str(roundi(stardew_crops_foraging_22_item_price))
	BD889030_22.unlock_condition = 0
	BD889030_22.deco_path = stardew_crops_foraging_22_deco_path
	BD889030_22.item_name.text = tr("DECO_NAME_NORMAL_88903022")
	BD889030_22.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903022")

	var BD889030_23 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_23)
	BD889030_23.type_id = 88903023
	BD889030_23.item_price = stardew_crops_foraging_23_item_price
	BD889030_23.item_tex.texture = stardew_crops_foraging_23
	BD889030_23.txt_price.text = str(roundi(stardew_crops_foraging_23_item_price))
	BD889030_23.unlock_condition = 0
	BD889030_23.deco_path = stardew_crops_foraging_23_deco_path
	BD889030_23.item_name.text = tr("DECO_NAME_NORMAL_88903023")
	BD889030_23.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903023")

	var BD889030_24 = stardew_crops_foraging_new_bd.instantiate()
	normal_box.add_child(BD889030_24)
	BD889030_24.type_id = 88903024
	BD889030_24.item_price = stardew_crops_foraging_24_item_price
	BD889030_24.item_tex.texture = stardew_crops_foraging_24
	BD889030_24.txt_price.text = str(roundi(stardew_crops_foraging_24_item_price))
	BD889030_24.unlock_condition = 0
	BD889030_24.deco_path = stardew_crops_foraging_24_deco_path
	BD889030_24.item_name.text = tr("DECO_NAME_NORMAL_88903024")
	BD889030_24.hover_tip.hover_msg = tr("DECO_DESC_NORMAL_88903024")

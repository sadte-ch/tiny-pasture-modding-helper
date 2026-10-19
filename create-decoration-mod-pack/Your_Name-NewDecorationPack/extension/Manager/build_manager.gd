extends "res://Scene/Level/build_manager.gd"
const new_deco_pack_0 = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_0.tscn")
const new_deco_pack_1 = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_1.tscn")

func _ready() -> void:
	super()
	Decos[10000] = new_deco_pack_0
	Decos[10001] = new_deco_pack_1

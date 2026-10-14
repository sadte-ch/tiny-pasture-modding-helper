extends "res://Scene/Level/build_manager.gd"
const new_deco = preload("res://mods-unpacked/Your_Name-NewDecoration/overwrites/Scene/Level/Buildings/Decos/new_deco.tscn")

func _ready() -> void:
	super()
	var id = 1000
	Decos[id] = new_deco

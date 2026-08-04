extends "res://Scene/Level/bg_manager.gd"
const bg_new = preload("res://mods-unpacked/Sad_Tech-NewBackground/overwrites/Scene/Level/background/bg_new.tscn")

func _ready() -> void:
	super()
	bg_group.append(bg_new)

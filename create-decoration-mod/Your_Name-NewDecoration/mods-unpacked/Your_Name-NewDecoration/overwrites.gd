extends Node


const MOD_DIR = "res://mods-unpacked/Your_Name-NewDecoration/overwrites/"

var overwrites_path = [
	"res://mods-unpacked/Your_Name-NewDecoration/overwrites/Scene/Level/Buildings/Decos/new_deco_preview.tscn"
]

func _init() -> void:
	var new_deco_preview = preload("res://mods-unpacked/Your_Name-NewDecoration/overwrites/Scene/Level/Buildings/Decos/new_deco_preview.tscn")
	new_deco_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_1000.tscn")

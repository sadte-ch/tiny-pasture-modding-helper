extends Node


const MOD_DIR = "res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/"

var overwrites_path = [
	"res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_0_preview.tscn",
	"res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_1_preview.tscn"
]

func _init() -> void:
	var new_deco_pack_0_preview = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_0_preview.tscn")
	new_deco_pack_0_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_10000.tscn")

	var new_deco_pack_1_preview = preload("res://mods-unpacked/Your_Name-NewDecorationPack/overwrites/Scene/Level/Buildings/Decos/new_deco_pack_1_preview.tscn")
	new_deco_pack_1_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_10001.tscn")

extends "res://Scene/Level/build_manager.gd"
const new_item = preload("res://mods-unpacked/Sad_Tech-StardewValleyBackground/overwrites/Scene/Level/Buildings/Decos/new_item.tscn")

func _ready() -> void:
	super()
	var length = Decos.size()
	var id = length + 1 #index in background list on shop page
	Decos[id] = new_item


# [ext_resource type="PackedScene" uid="uid://bd53folcqu6da" path="res://Scene/Level/Buildings/Decos/bd_deco_0.tscn" id="23"]
# Decos = {
# 0: ExtResource("23"),
# main or build manager?
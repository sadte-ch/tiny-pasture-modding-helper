extends "res://Manager/FarmDB.gd"


func _load_mod_res():
	super()
	_load_res_from_file("res://mods-unpacked/Your_Name-NewPlantDecoration/overwrites/Data/food_data/", food_depot)

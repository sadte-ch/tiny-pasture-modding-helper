extends "res://Manager/FarmDB.gd"


func _load_mod_res():
	super()
	_load_res_from_file("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Data/animal_data/", animal_depot)
	_load_res_from_file("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Data/pack_data/", pack_depot)

extends Node


const MOD_DIR = "res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/"

var overwrites_path = [
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/Animals/alveus_cow_0_0.png",
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/Animals/alveus_cow_0_1.png",
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_0.png",
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_1.png",
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_0.png",
	"res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_1.png",

]

func _init() -> void:
	var animal_0_0 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/Animals/alveus_cow_0_0.png")
	var animal_0_1 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/Animals/alveus_cow_0_1.png")
	animal_0_0.take_over_path("res://Assets/Animals/alveus_cow_0_0.png")
	animal_0_1.take_over_path("res://Assets/Animals/alveus_cow_0_1.png")


	var animal_node = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Scene/Level/Animals/alveus_cow.tscn")
	animal_node.take_over_path("res://Scene/Level/Animals/alveus_cow.tscn")

	var animal_portrait_0 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_0.png")
	var animal_portrait_1 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_1.png")
	animal_portrait_0.take_over_path("res://Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_0.png")
	animal_portrait_1.take_over_path("res://Assets/UI/PopupUI/Portrait/portrait_alveus_cow_0_1.png")

	var animal_idle_0 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_0.png")
	var animal_idle_1 = preload("res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_1.png")
	animal_idle_0.take_over_path("res://Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_0.png")
	animal_idle_1.take_over_path("res://Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_1.png")

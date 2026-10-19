extends Node

const MOD_DIR = "res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/"

var overwrites_path = [
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_0_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_1_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_2_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_3_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_4_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_5_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_6_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_7_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_8_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_9_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_10_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_11_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_12_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_13_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_14_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_15_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_16_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_17_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_18_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_19_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_20_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_21_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_22_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_23_preview.tscn",
	"res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_24_preview.tscn"
]

func _init() -> void:
	var stardew_crops_foraging_0_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_0_preview.tscn")
	stardew_crops_foraging_0_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890300.tscn")

	var stardew_crops_foraging_1_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_1_preview.tscn")
	stardew_crops_foraging_1_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890301.tscn")

	var stardew_crops_foraging_2_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_2_preview.tscn")
	stardew_crops_foraging_2_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890302.tscn")

	var stardew_crops_foraging_3_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_3_preview.tscn")
	stardew_crops_foraging_3_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890303.tscn")

	var stardew_crops_foraging_4_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_4_preview.tscn")
	stardew_crops_foraging_4_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890304.tscn")

	var stardew_crops_foraging_5_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_5_preview.tscn")
	stardew_crops_foraging_5_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890305.tscn")

	var stardew_crops_foraging_6_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_6_preview.tscn")
	stardew_crops_foraging_6_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890306.tscn")

	var stardew_crops_foraging_7_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_7_preview.tscn")
	stardew_crops_foraging_7_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890307.tscn")

	var stardew_crops_foraging_8_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_8_preview.tscn")
	stardew_crops_foraging_8_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890308.tscn")

	var stardew_crops_foraging_9_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_9_preview.tscn")
	stardew_crops_foraging_9_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_8890309.tscn")

	var stardew_crops_foraging_10_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_10_preview.tscn")
	stardew_crops_foraging_10_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903010.tscn")

	var stardew_crops_foraging_11_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_11_preview.tscn")
	stardew_crops_foraging_11_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903011.tscn")

	var stardew_crops_foraging_12_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_12_preview.tscn")
	stardew_crops_foraging_12_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903012.tscn")

	var stardew_crops_foraging_13_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_13_preview.tscn")
	stardew_crops_foraging_13_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903013.tscn")

	var stardew_crops_foraging_14_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_14_preview.tscn")
	stardew_crops_foraging_14_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903014.tscn")

	var stardew_crops_foraging_15_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_15_preview.tscn")
	stardew_crops_foraging_15_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903015.tscn")

	var stardew_crops_foraging_16_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_16_preview.tscn")
	stardew_crops_foraging_16_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903016.tscn")

	var stardew_crops_foraging_17_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_17_preview.tscn")
	stardew_crops_foraging_17_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903017.tscn")

	var stardew_crops_foraging_18_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_18_preview.tscn")
	stardew_crops_foraging_18_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903018.tscn")

	var stardew_crops_foraging_19_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_19_preview.tscn")
	stardew_crops_foraging_19_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903019.tscn")

	var stardew_crops_foraging_20_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_20_preview.tscn")
	stardew_crops_foraging_20_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903020.tscn")

	var stardew_crops_foraging_21_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_21_preview.tscn")
	stardew_crops_foraging_21_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903021.tscn")

	var stardew_crops_foraging_22_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_22_preview.tscn")
	stardew_crops_foraging_22_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903022.tscn")

	var stardew_crops_foraging_23_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_23_preview.tscn")
	stardew_crops_foraging_23_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903023.tscn")

	var stardew_crops_foraging_24_preview = preload("res://mods-unpacked/Sad_Tech-StardewCropsForaging/overwrites/Scene/Level/Buildings/Decos/stardew_crops_foraging_24_preview.tscn")
	stardew_crops_foraging_24_preview.take_over_path("res://Scene/Level/Buildings/Decos/bd_deco_preview_88903024.tscn")

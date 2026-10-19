extends Node

const MYMODENAME_LOG = "Sad_Tech-StardewCropsForaging"
const MYMODNAME_MOD_DIR = "Sad_Tech-StardewCropsForaging/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-StardewCropsForaging/extension/Manager/FarmDB.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-StardewCropsForaging/extension/Manager/ui_shop_page_decoration.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-StardewCropsForaging/extension/Manager/build_manager.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.zh_HK.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.en.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.de.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.es.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.fr.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.ja.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.ko.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.la.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.pl.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.pt.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.pt_BR.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.ru.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.th.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-StardewCropsForaging/translations/translations.tr.translation")

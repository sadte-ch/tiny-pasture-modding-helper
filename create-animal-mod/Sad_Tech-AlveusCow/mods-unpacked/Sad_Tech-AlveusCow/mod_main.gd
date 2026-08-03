extends Node

const MYMODENAME_LOG = "Sad_Tech-AlveusCow"
const MYMODNAME_MOD_DIR = "Sad_Tech-AlveusCow/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)

	install_script_extensions()

	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-AlveusCow/extension/Manager/FarmDB.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-AlveusCow/extension/Manager/ui_shop_opened_pack.gd")


func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-AlveusCow/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-AlveusCow/translations/translations.zh_HK.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-AlveusCow/translations/translations.en.translation")

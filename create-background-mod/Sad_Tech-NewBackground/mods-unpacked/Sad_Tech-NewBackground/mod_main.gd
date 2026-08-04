extends Node

const MYMODENAME_LOG = "Sad_Tech-NewBackground"
const MYMODNAME_MOD_DIR = "Sad_Tech-NewBackground/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-NewBackground/extension/shop/ui_shop_page_decoration.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Sad_Tech-NewBackground/extension/shop/bg_manager.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-NewBackground/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Sad_Tech-NewBackground/translations/translations.en.translation")

extends Node

const MYMODENAME_LOG = "Your_Name-NewDecoration"
const MYMODNAME_MOD_DIR = "Your_Name-NewDecoration/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewDecoration/extension/Manager/ui_shop_page_decoration.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewDecoration/extension/Manager/build_manager.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewDecoration/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewDecoration/translations/translations.en.translation")

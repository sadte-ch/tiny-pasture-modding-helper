extends Node

const MYMODENAME_LOG = "Your_Name-NewPlantDecoration"
const MYMODNAME_MOD_DIR = "Your_Name-NewPlantDecoration/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewPlantDecoration/extension/Manager/ui_shop_page_decoration.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewPlantDecoration/extension/Manager/build_manager.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewPlantDecoration/extension/Manager/FarmDB.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.zh_HK.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.en.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.de.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.es.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.fr.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.ja.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.ko.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.la.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.pl.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.pt.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.pt_BR.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.ru.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.th.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewPlantDecoration/translations/translations.tr.translation")

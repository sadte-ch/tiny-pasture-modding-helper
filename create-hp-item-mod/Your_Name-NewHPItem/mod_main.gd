extends Node

const MYMODENAME_LOG = "Your_Name-NewHPItem"
const MYMODNAME_MOD_DIR = "Your_Name-NewHPItem/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/Your_Name-NewHPItem/extension/Manager/ui_shop_page_items.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.zh_HK.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.en.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.de.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.es.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.fr.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.ja.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.ko.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.la.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.pl.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.pt.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.pt_BR.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.ru.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.th.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/Your_Name-NewHPItem/translations/translations.tr.translation")

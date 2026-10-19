extends Node

const MYMODENAME_LOG = "NewFoodItemsPack"
const MYMODNAME_MOD_DIR = "NewFoodItemsPack/"


var dir = ""
var ext_dir = ""

func _init() -> void:
	ModLoaderLog.info("Init", MYMODENAME_LOG)
	install_script_extensions()
	add_translations()



func _ready() -> void:
	ModLoaderLog.info("Done", MYMODENAME_LOG)


func install_script_extensions():
	ModLoaderMod.install_script_extension("res://mods-unpacked/NewFoodItemsPack/extension/Manager/ui_shop_page_items.gd")
	ModLoaderMod.install_script_extension("res://mods-unpacked/NewFoodItemsPack/extension/Manager/FarmDB.gd")

func add_translations():
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.zh.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.zh_HK.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.en.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.de.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.es.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.fr.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.ja.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.ko.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.la.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.pl.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.pt.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.pt_BR.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.ru.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.th.translation")
	ModLoaderMod.add_translation("res://mods-unpacked/NewFoodItemsPack/translations/translations.tr.translation")

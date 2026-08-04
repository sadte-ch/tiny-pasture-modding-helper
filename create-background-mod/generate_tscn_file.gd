extends Node

func _ready():
	# 1. Generate the scene tree
	var generated_bg = generate_bg_scene()
	
	# 2. Save it to the specified path
	var save_path = "res://mods-unpacked/Sad_Tech-NewBackground/overwrites/Scene/Level/background/bg_new.tscn"
	save_node_as_tscn(generated_bg, save_path)
	
	# Optional: Free it from memory if you only wanted to create the file, 
	# or use add_child(generated_bg) if you want it to appear in the active game.
	generated_bg.queue_free()

## Packs the given node tree and saves it to disk
func save_node_as_tscn(root_node: Node2D, path: String) -> void:
	var packed_scene = PackedScene.new()
	var pack_error = packed_scene.pack(root_node)
	
	if pack_error == OK:
		var save_error = ResourceSaver.save(packed_scene, path)
		if save_error == OK:
			print("Successfully saved scene to: ", path)
		else:
			push_error("Failed to save the resource to disk. Error code: ", save_error)
	else:
		push_error("Failed to pack the scene. Error code: ", pack_error)

## Generates and returns the BG_1 scene dynamically.
func generate_bg_scene() -> Node2D:
	# 1. Create the Root Node (BG_1)
	var bg_1 = Node2D.new()
	bg_1.name = "BG_1"
	
	# Attach the script and set the exported variable
	var bg_script = load("res://Scene/Level/background/bg.gd")
	if bg_script:
		bg_1.set_script(bg_script)
	bg_1.set("bg_type", 1000)

	# LAYERS_PLACEHOLDER

  # CRUCIAL: Set the owner of all child nodes to the root node before packing
	_set_owner_recursive(bg_1, bg_1)
	return bg_1

## Helper function to assign ownership recursively so PackedScene knows what to save
func _set_owner_recursive(node: Node, root: Node) -> void:
	if node != root:
		node.owner = root
	for child in node.get_children():
		_set_owner_recursive(child, root)

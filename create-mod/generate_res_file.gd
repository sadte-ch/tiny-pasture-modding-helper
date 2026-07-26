@tool
extends EditorScript

func _run() -> void:
	var scene_path = "res://Scene/UI/PopupUI/UIShop/animal_pack/opened_pack.tscn"
	
	# 1. Load the existing scene file
	var packed_scene: PackedScene = load(scene_path)
	if not packed_scene:
		print("Error: Could not find opened_pack.tscn")
		return
		
	# 2. Instantiate it so we can manipulate the nodes
	var root_node = packed_scene.instantiate()

	# --- LOAD EXTERNAL TEXTURE ---
	var tex_path = "res://mods-unpacked/Sad_Tech-AlveusCow/overwrites/Assets/UI/PopupUI/AnimalIdle/idle_alveus_cow_0_0.png"
	var base_tex = load(tex_path)
	
	# Find the TEX_AnimalAvatar node (assuming it's a unique % node or named exactly this)
	var avatar_node = root_node.find_child("TEX_AnimalAvatar", true, false)
	if avatar_node and base_tex:
		# Create a new AtlasTexture resource
		var atlas_tex = AtlasTexture.new()
		atlas_tex.atlas = base_tex
		
		# Set the starting region (matching the first frame of your animation)
		atlas_tex.region = Rect2(0, 0, 50, 50)
		
		# Assign the AtlasTexture to the node instead of the raw image
		avatar_node.texture = atlas_tex
		print("Successfully assigned the new cow AtlasTexture!")
	else:
		print("Warning: Could not find TEX_AnimalAvatar or load the texture.")
	# ------------------------------------------------
	
	# find_child(name, recursive, owned) will search the entire scene tree
	var anim_player = root_node.find_child("AnimationPlayer", true, false)
	
	if not anim_player:
		print("CRITICAL ERROR: Could not find any node named 'AnimationPlayer' in the scene!")
		return # Stop the script so it doesn't crash
	
	print("Success! Found AnimationPlayer.")
	print("Available libraries: ", anim_player.get_animation_library_list())
	
	# 1. Get the list of all library names attached to the player
	var library_list = anim_player.get_animation_library_list()
	
	# 2. Make sure the list isn't empty to prevent errors
	if library_list.is_empty():
		print("Error: No animation libraries exist on this AnimationPlayer.")
		return
		
	# 3. Get the first name from the array (index 0)
	var library_name = library_list[0]
	
	# 4. Fetch the actual AnimationLibrary resource using that name
	var library: AnimationLibrary = anim_player.get_animation_library(library_name)
	
	print("Success! Using library named: '", library_name, "'")
	
	# 5. BUILD THE NEW ANIMATION
	var new_anim = Animation.new()
	new_anim.resource_name = "alveus_cow"
	new_anim.length = 1.6
	new_anim.loop_mode = Animation.LOOP_LINEAR # Set to loop
	new_anim.step = 0.2
	
	# ==========================================
	# TRACK 0: Texture Region (Sprite Sheet Animation)
	# ==========================================
	var track_0 = new_anim.add_track(Animation.TYPE_VALUE)
	new_anim.track_set_path(track_0, NodePath("%TEX_AnimalAvatar:texture:region"))
	new_anim.track_set_interpolation_type(track_0, Animation.INTERPOLATION_LINEAR) # interp = 1
	new_anim.value_track_set_update_mode(track_0, Animation.UPDATE_DISCRETE) # update = 1
	
	# Add the 8 keyframes for the sprite sheet
	var times = [0.00, 0.20, 0.40, 0.60, 0.80, 1.00, 1.20, 1.40]
	var rect_x_positions = [0, 50, 100, 150, 200, 250, 300, 350]
	
	for i in range(times.size()):
		var rect = Rect2(rect_x_positions[i], 0, 50, 50)
		# Insert key (Track Index, Time, Value, Transition)
		var key_index = new_anim.track_insert_key(track_0, times[i], rect)
		new_anim.track_set_key_transition(track_0, key_index, 1.0)
		
	# ==========================================
	# TRACK 1: Position
	# ==========================================
	var track_1 = new_anim.add_track(Animation.TYPE_VALUE)
	new_anim.track_set_path(track_1, NodePath("%TEX_AnimalAvatar:position"))
	new_anim.track_set_interpolation_type(track_1, Animation.INTERPOLATION_LINEAR) # interp = 1
	new_anim.value_track_set_update_mode(track_1, Animation.UPDATE_DISCRETE) # update = 1
	
	# Add the single keyframe for the starting position
	var pos_key = new_anim.track_insert_key(track_1, 0.0, Vector2(-18, -22))
	new_anim.track_set_key_transition(track_1, pos_key, 1.0)
	
	# 6. ADD THE ANIMATION TO THE LIBRARY
	var anim_name = "alveus_cow"
	# Remove it first if we are overwriting an existing animation of the same name
	if library.has_animation(anim_name):
		library.remove_animation(anim_name)
		
	library.add_animation(anim_name, new_anim)
	# ==========================================
	
	# 7. Pack the modified scene back up
	var new_packed_scene = PackedScene.new()
	var pack_result = new_packed_scene.pack(root_node)
	
	if pack_result == OK:
		# 8. Save the file and overwrite the old one
		var save_result = ResourceSaver.save(new_packed_scene, scene_path)
		if save_result == OK:
			print("Successfully added '", anim_name, "' animation to opened_pack.tscn!")
		else:
			print("Error saving the file.")
	else:
		print("Error packing the scene.")
		
	# 9. Clean up the temporary node we created in memory
	root_node.free()

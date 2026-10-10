# tiny-pastures-modding-helper

A collection of helper scripts to help you create mods for the [Tiny Pasture Steam game](https://store.steampowered.com/app/3167550/Tiny_Pasture/) (A cute animal idle desktop game). So you can spend less time in Godot and more time making art!

I created these scripts to automate as much of the modding process as possible. It takes all your assets and mod data and exports a mod folder that you can use in Godot to finish the setup and export. It's saved me a lot of time!

I'm a web developer but Tiny Pasture is my first time modding a game so I've tried to make this guide as beginner-friendly as possible. The [Tiny Pasture mod guide](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb) only contains instructions for making an animal mod and I really wanted to add other things too. I figured out how to add backgrounds, decorations and food and had so much fun so I'm sharing it with others here.

There are a few different kinds of mods you can create for Tiny Pasture:
- [Static Decoration](docs/templates/create-decoration-mod.md) (like a building, tree or any other static item)
- [Plant Decoration](docs/templates/create-plant-decoration-mod.md) (plants have 4 stages and produce food when they are ready - I've also used this for things like a beehive that produces honey)
- [Background](docs/templates/create-background-mod.md)
- [Animal](docs/templates/create-animal-mod.md)
- More to come in the future!

## Requirements:

### Basic understanding of JSON
I've tried to make using my templates as easy as possible for beginners, but you will need to use json. The json file is where all the data goes that the script can then use to magically create your mod for you.
It might seem scary if it's your first time using json but I promise you will get used to it quickly. Here's a nice [video to help you understand](https://www.youtube.com/watch?v=4rmBOxn0PdI).
```
{
    "modName": "My new exciting mod",
    "price": 100.0,
    "translations": {
        "en": {
          "name": "New Decoration",
          "description": "Add a new decoration to the game."
        }
    }
}
```

### Code editor
You will need some form of code/text editor to be able to write these json files. I would recommend [VSCode](https://code.visualstudio.com/) as it includes a built-in terminal,  but you can just use a native text editor and native terminal/cmd if that's easier.


### Node.js installed
You will need to install [Node.js](https://nodejs.org/en/download/current) on your computer (this is so you can run the script/s)
npm (node package manager) is not required for this

---

You need to have bought and downloaded the Tiny Pasture game, as well as downloaded the Steam app in order to mod this game.

DO NOT SHARE THE FULL DECOMPILED GAME FILES ONLINE TO RESPECT TINY PASTURE MODDING RULES - [full rules](https://bcnege18gifk.feishu.cn/docx/MVh1dKMtToLAI2x2iOqcu2M5nCb#FfAUdFDvpoiGsfxx7xNcyVTfnXb).

**Follow the steps below to get started:**

## Clone this git repository
1. Go to https://github.com/sadte-ch/tiny-pastures-modding-helper/tree/main
2. Click the Code button on the top right
3. Clone the repo in your preferred way or download the ZIP if that is easier

## [Godot Setup](docs/godot-setup.md) (skip if you've modded Tiny Pasture before)
How to decompile Tiny Pasture and get the Godot game engine setup ready to create your first mod

## [Choose your mod template](docs/mod-templates.md)
Choose which mod type you would like to create. Each template has different requirements for assets. Once you choose a template, follow the instructions to create the correct assets. After your assets are done, you will paste them into the right folders, update the data.json file and run the corresponding template script. This will export your new mod which you can then open in Godot to test and export, ready to upload to the Steam workshop!

General outline:
- choose what kind of mod you want to create
- choose unique id and name for your new mod
- create assets required by the template you choose
- add assets to the template
- update data.json file within the template with all the data the script needs to create the mod files for you
- that's it, then you're ready to run the script which will export a folder containing your new mod files!

## Running a script
Following the instructions above, you will have pasted your assets into the correct folders and updated the data.json file in the correct template.

Running a script is as simple as one line of code in your preferred terminal, ie:

`node scripts/decoration-mod-starter.js`

See all the scripts available here, under "scripts": [package.json](/package.json)

Running the script will take all your assets and data and compile them to create your mod, ready to open in the Godot game engine.

## [Export your mod](docs/export-mod.md)
Export your mod from Godot, test it locally and then upload it to the Steam workshop


If you notice any issues, please let me know!

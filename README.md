# Minecraft Java AFK-CLINET
# AFK Minecraft Client
# No password needed

A minimal Node.js AFK bot for Minecraft. Supports Microsoft premium login and can automatically perform AFK actions on the server. You can also send chat messages or server commands directly from the terminal.

## Features

- Microsoft premium account authentication
- Automatic server connection and AFK mode activation
- Send chat messages and server commands from the terminal
- Configurable AFK actions: jump, swing, rotate, forward, randomWalk
- Automatic reconnect if the connection is lost

## Installation

1. Make sure Node.js is installed
2. Navigate to the project folder:
3. Install dependencies:
 	`npm install`
## Configiration
Change these settings in config.json for your server:

{
  "server": {
    "host": "CHANGE HERE",
    "port": 25565,
    "version": "Change here for your server version. Newer version may not be work"
  },
  },
  "account": {
    "auth": "microsoft",
    "username": "Add your microsoft account mail here"
  },
  ## Starting the app
  - Install mineflayer  	`npm install mineflayer `
  - Install readline      `npm install redline `
  - Install Fs            `npm install fs `
  - Run the app           `npm start `
  - For using the chat or commands do this `/ or raw text when the app fully started `
## Features
- Rotate:  `/rotate to rotate`
- Swing:  `/swing to swing`
- Random walk: `/randomwalk` to random walk
- Jump: `/jump` to jump
## Problems/Solutions
- Cant write more than 1 command:
- Write something and delete it
- I dont know anymore problems.
## READ THIS
- Using AFK clinets is not permitted in Minecraft's EULA
- This is for for educational purposes only
- Ill be happy for pull requests

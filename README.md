# Role-Bot

A Discord bot that can automatically assign a user to a role on join.

## Requirements
Requires node v16

## Setup

### Bot
1. Rename `config.json.example` to `config.json`
1. Replace the values in `config.json` with the bot token from discord and the name of the channel to be automatically added to
1. Run `npm install`

### Discord
Under OAuth2 page on Discord app dashboard will need `bot` for OAuth and `Manage Roles` for bot permissions

## Run

### Node

From the source directory run `node index.js`

### Docker

1. `docker build . -t role-bot`
1. `docker run -d --name role-bot role-bot`


## Troubleshooting

* Ensure `Server Members Intent` is checked on for the Discord app's dashboard
* Make sure that when adding the bot to Discord it's role is higher than the one it will automatically assign the user to
const { Client, Intents } = require("discord.js");
const config = require("./config.json");

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS);

const client = new Client({ intents: myIntents });

client.on("guildMemberAdd", (member) => {
  member.roles.add(
    member.guild.roles.cache.find((i) => i.name === config.ROLE_NAME)
  );
  console.log(`member role added to ${config.ROLE_NAME} for ${member.displayName}` )
});

client.login(config.BOT_TOKEN);

let botSettings = require("./botsettings.json");
let Discord = require("discord.js");
let prefix = botSettings.prefix;
let token = botSettings.token;

let client = new Discord.Client();

client.comandos = new Discord.Collection();
client.aliases = new Discord.Collection();

["loader"].forEach(handler => {
	require(`./Loader/${handler}`)(client);
})

client.on("ready", async () => {
	console.log(`A ${client.user.username} esta pronta e conectada com ${client.users.size} usuarios em ${client.guilds.size} servidores`);
	client.user.setActivity(`O nicolas da janela`);

	try {
		let inviteLink = await client.generateInvite(["ADMINISTRATOR"]);
		console.log(inviteLink);
	} catch (e) {
		console.log(e.stack);
	}
	
});

client.on("message", async message => {
	if(message.author.bot) return;

	if (message.guild === null && message.author.id != '185788831448956929') {
		if (message.attachments.size !== 0) {
			let embed = new Discord.RichEmbed()
				.setTitle(message.author.username)
				.setImage(message.attachments.first().url);
			client.users.get('185788831448956929').send(embed);
		} else {
			client.users.get('185788831448956929').send(message.author.username + ' - ' + message.content);
		}
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if(cmd.length === 0) return;
	if(!message.content.startsWith(prefix)) return;

	let comando = client.comandos.get(cmd);
	if(!comando) comando = client.comandos.get(client.aliases.get(cmd));

	if(comando) {
		comando.run(client, message, args);
	}

});

client.login(token);
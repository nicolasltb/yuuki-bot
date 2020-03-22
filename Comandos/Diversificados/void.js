let Discord = require("discord.js");

module.exports = {
    name: "void",
    aliases: ["rotmg", "vazio"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        const voidEmoji = client.emojis.find(emoji => emoji.name === "void");
		const keyEmoji = client.emojis.find(emoji => emoji.name === "hallskey");
		const vialEmoji = client.emojis.find(emoji => emoji.name === "vial");
		const paladinEmoji = client.emojis.find(emoji => emoji.name === "paladin");
		const priestEmoji = client.emojis.find(emoji => emoji.name === "priest");
		const warriorEmoji = client.emojis.find(emoji => emoji.name === "warrior");
		const knightEmoji = client.emojis.find(emoji => emoji.name === "knight");
		const msealEmoji = client.emojis.find(emoji => emoji.name === "Mseal");

		let voidRun = new Discord.RichEmbed()
			.setTitle("A Void Raid is about to begin! Get ready!")
			.setDescription("We are starting a Void raid soon, join the queue and react with " + `${voidEmoji}` + " to get moved, also react...")
			.addField("If you are bringing a key,       If you are bringing a       If you are bringing a " + `\n` + "react with:                                 warrior, react with:        paladin, react with:"
				, "" + `${keyEmoji}` + "‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎" + `${warriorEmoji}` + "‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + `${paladinEmoji}`)
			.addField("If you are bringing a vial,       If you are bringing a       If you are bringing a " + `\n` + "react with:                                 priest, react with:            knight, react with:"
				, "" + `${vialEmoji}` + "‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎" + `${priestEmoji}` + "‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎" + `${knightEmoji}`)
			.addField("If you are bringing a" + `\n` + "marble seal react with:", `${msealEmoji}`)
			.addField(" 	__**Leaders**__ that want to end the AFK check, react with:", "❌")
			.setColor("#00008B");

		message.channel.send(voidRun).then(sentEmbed => {

			let reacts = ['475466723391307777', '475468606126293022', '475468781515440128', '475468169893380096', '475468169788522508', '475468271848521768', '475467134298882068', '475478331249262603', '663099117941162023'];

			sentEmbed.react(reacts[0])
				.then(() => sentEmbed.react(reacts[1]))
				.then(() => sentEmbed.react(reacts[2]))
				.then(() => sentEmbed.react(reacts[3]))
				.then(() => sentEmbed.react(reacts[4]))
				.then(() => sentEmbed.react(reacts[5]))
				.then(() => sentEmbed.react(reacts[6]))
				.then(() => sentEmbed.react(reacts[7]))
				.then(() => sentEmbed.react("❌"))
				.catch();

		}).catch();
    }
}
let Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["ava", "img"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        if (!message.mentions.users.size) {
			message.channel.send(new Discord.RichEmbed().setImage(message.author.avatarURL).setColor('#FF1493'));
		} else {
			message.channel.send(new Discord.RichEmbed().setImage(message.mentions.users.first().avatarURL).setColor('#FF1493'));
		}
    }
}

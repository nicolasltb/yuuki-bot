let Discord = require("discord.js");

module.exports = {
    name: "nico",
    aliases: ["nicolas", "nick"],
    category: "fun",
    description: "Informacoes sobre o cara mais legal do servidor.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let neekolas = new Discord.RichEmbed()
			.setTitle("Neekolas")
			.setThumbnail(message.guild.members.get('185788831448956929').user.avatarURL)
			.addField("Twitter:", '@Neekolas_ltb')
			.addField("GitHub:", "nicolasltb")
			.addField("Biografia:", 'Tem 17 anos e ta indo pro 3 ano do ensino medio.\nE isso.')
			.setFooter("Sim, isso um comando para enaltece-lo")
			.setColor('#8A2BE2');

			message.channel.send(neekolas);
    }
}

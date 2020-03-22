let Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["server", "info"],
    category: "fun",
    description: "Informacoes sobre o servidor.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let info = new Discord.RichEmbed()
			.setTitle("Informacoes do servidor:")
			.setAuthor(message.guild.name, message.guild.iconURL)
			.addField("Nome", message.guild.name)
			.addField("ID", message.guild.id)
			.addField("Criador", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
			.addField("Regiao", "Brasil  :flag_br:")
			.addField("Membros | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`)
			.addField("Canais", message.guild.channels.size)
			.addField("Cargos", message.guild.roles.size)
			.addField("Data de criacao", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`)
			.setThumbnail(message.guild.iconURL)
			.setColor('#00FFFF');
		message.channel.send(info);
    }
}

function checkDays(date) {
		let now = new Date();
		let diff = now.getTime() - date.getTime();
		let days = Math.floor(diff / 86400000);
		return days + (days == 1 ? " dia" : " dias") + " atras";
	}
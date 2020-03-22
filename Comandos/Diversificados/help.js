let Discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["ajuda"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let helpfull = new Discord.RichEmbed()
			.setTitle("Meus Comandos:  ♥")
			.addField("Avatar", "Mostra sua imagem de perfil.")
			.addField("Void | Cult", "Inicia uma raid de ROTMG.")
			.addField("Negoney", "E so uma palinha...")
			.addField("Msg", "Cria uma mensagem personalizada.")
			.addField("Ping", "Testa o ping do bot.")
			.addField("Serverinfo", "Informacoes sobre o servidor.")
			.addField("Nico", "Informacoes sobre o cara mais legal do servidor.")
			.addField("Clear", "Deleta x mensagens do canal.")
			.setColor("#00FFFF")
			.setThumbnail("https://orig00.deviantart.net/f2c1/f/2016/056/8/e/konno_yuuki___winter_outfit_by_harucane-d9t4jp8.png");

		message.channel.send(helpfull);
    }
}

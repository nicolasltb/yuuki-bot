let Discord = require("discord.js");

module.exports = {
    name: "call",
    aliases: ["c", "chamar"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        if (message.author.id != 185788831448956929) return;
        let idDoCara = args[0];
		let texto = message.content.replace('*call ', '');
		texto = texto.replace(args[0], '');
		message.guild.members.get(idDoCara).send(texto);
    }
}

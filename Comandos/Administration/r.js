let Discord = require("discord.js");

module.exports = {
    name: "r",
    aliases: ["r"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let texto = message.content.replace('*r ', '');
		client.channels.get('434931484315615242').send(texto);
    }
}

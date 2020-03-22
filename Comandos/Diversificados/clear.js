let Discord = require("discord.js");

module.exports = {
    name: "clear",
    aliases: ["limpar"],
    category: "fun",
    description: "Deleta x mensagens do canal.",
    usage: "<mention>",
    run: async (client, message, args) => {
        numMsg = Number(args);
		if(numMsg > 100) {
			message.channel.send("Voce nao pode deletar mais de 100 mensagens simultaneamente. 😥");
		} else if(!numMsg) {
			message.channel.send("Escolha quantas mensagens voce quer exluir. 😥");
		}
		else {
			await message.channel.fetchMessages({ limit: numMsg+1 }).then(messages => { 
				message.channel.bulkDelete(messages).then(() => {
					message.channel.send('___***Foram excluidas com sucesso ' + numMsg + ' mensagens.***___ 😉');
				})
			})
		}
    }
}
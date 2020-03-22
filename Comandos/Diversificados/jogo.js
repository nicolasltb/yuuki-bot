let Discord = require("discord.js");

module.exports = {
    name: "jogo",
    aliases: ["game", "play"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let game = new Array();
        let jogador;

        const filterEmoji = (reaction, user) => {
			return ['✅', '❌'].includes(reaction.emoji.name) && user.id === adversarioID;
		};

		for (let i = 0; i < 9; i++) {
			game[i] = '🔳';
		}

		let adversarioID = message.mentions.users.first().id;
		let adversario = message.mentions.users.first();
		let voce = message.author;
		let voceID = message.author.id;
		let desafio = new Discord.RichEmbed()
			.setTitle("Jogo Da Velha")
			.setDescription(message.author + ' desafiou ' + adversario + ' para uma disputa de jogo da velha')
			.addField("Para aceitar o desafio, reaja com:         Para recusar o desafio, reaja com: ", "✅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀❌")
			.setTimestamp()
			.setFooter("30 segundos para cancelar o desafio");

		message.channel.send(desafio)
			.then(sentMessage => {
				sentMessage.react('✅')
					.then(() => sentMessage.react('❌'))
				sentMessage.awaitReactions(filterEmoji, { max: 1, time: 30000 })
					.then(collected => {
						const reaction = collected.first();
						switch (reaction.emoji.name) {
							case '✅':
								message.channel.send("Desafio aceito, jogo iniciando...");
								jogoDaVelha(voce, adversario);
								break;
							case '❌':
								message.channel.send("Desafio recusado.");
								break;
						}
					})
					.catch(() => {
						message.channel.send("Nao houve resposta a tempo! Operacao cancelada.");
					})
			});
}
}

function jogoDaVelha(voce, adversario) {
	jogador = voce;
	message.channel.send('Turno do(a) ' + jogador + '\n```Exemplo: 2-1 (Linha-Coluna)```');
	printarTabuleiro();
}


function printarTabuleiro() {
	message.channel.send(':one:' + game[0] + game[1] + game[2] + '\n:two:' + game[3] + game[4] + game[5] + '\n:three:' + game[6] + game[7] + game[8] + '\n⬛:one::two::three:');
}

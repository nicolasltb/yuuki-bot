let Discord = require("discord.js");

module.exports = {
    name: "msg",
    aliases: ["message", "mensagem"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        let titulo = '';
		let cor = '';
		let canal = '';
		let desc = '';
		const filter = m => message.author.id === m.author.id;
		const filterEmoji = (reaction, user) => {
			return ['⚫', '🔵', '⚪', '🔴', '🟠', '🟣', '🟤', '🟡', '🟢'].includes(reaction.emoji.name) && user.id === message.author.id;
		};

		message.channel.send("Ola, em qual canal de texto gostaria de enviar a mensagem?").then(() => {
			message.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
				.then(messages => {
					canal = messages.first().content;
					canal = canal.replace(/#/g, '');
					canal = canal.replace(/</g, '');
					canal = canal.replace(/>/g, '');
					console.log('Canal de texto: ' + canal);
					message.channel.send('Okay, entao o canal sera o ' + `${messages.first().content}` + '. Qual e o conteudo da sua mensagem? Use | para separar o titulo da descricao.\n```Titulo da mensagem | Descricao da mensagem```');
				}).then(() => {
					message.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
						.then(messages => {
							texto = messages.first().content.split("| ");
							titulo = texto[0];
							desc = texto[1];
							console.log('Titulo da mensagem: ' + titulo);
							console.log('Descricao da mensagem: ' + desc);
							message.channel.send('Tudo bem, tenho o titulo e a conteudo da sua mensagem. Qual vai ser a cor da sua mensagem? Reaja com uma das opcoes abaixo').then(sentMessage => {
								sentMessage.react('⚫');
								sentMessage.react('🔵');
								sentMessage.react('⚪');
								sentMessage.react('🔴');
								sentMessage.react('🟠');
								sentMessage.react('🟣');
								sentMessage.react('🟤');
								sentMessage.react('🟡');
								sentMessage.react('🟢');

								sentMessage.awaitReactions(filterEmoji, { max: 1, time: 15000 })
									.then(collected => {
										const reaction = collected.first();
										switch (reaction.emoji.name) {
											case '⚫':
												cor = '#000000';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🔵':
												cor = '#6495ED';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '⚪':
												cor = '#F0FFFF';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🔴':
												cor = '#FF0000';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🟠':
												cor = '#FFA500';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🟣':
												cor = '#C71585';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🟤':
												cor = '#8B4513';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🟡':
												cor = '#FFFF00';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
											case '🟢':
												cor = '#3CB371';
												enviarmensagem(titulo, desc, cor, canal, message, client);
												break;
										}
									})
							})
								.catch(collected => {
									console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
								})

								.catch(() => {
									message.channel.send('Voce nao me respondeu! :cry:');
								})
						})
						.catch(() => {
							message.channel.send('Voce nao me respondeu! :cry:');
						})
				})
		});
    }
}

function enviarmensagem(titulo, desc, cor, canal, message, client) {
    message.channel.send('\n___***Operacao finalizada, enviando mensagem...***___');
		let msgFoda = new Discord.RichEmbed()
			.setTitle(titulo)
			.setDescription(desc)
			.setColor(cor);

		client.channels.get(canal).send(msgFoda);
}

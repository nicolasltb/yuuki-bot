let Discord = require("discord.js");
let ytdl = require('ytdl-core');

module.exports = {
    name: "negoney",
    aliases: ["nego", "ney"],
    category: "fun",
    description: "Mostra sua imagem de perfil.",
    usage: "<mention>",
    run: async (client, message, args) => {
        const streamOptions = { seek: 0, volume: 1 };
		let voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection => {
			console.log("Tocando negoney");
			message.reply("So uma palinha...");
			const stream = ytdl('https://www.youtube.com/watch?v=HE5wgGCxGHc', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream, streamOptions);
			dispatcher.on("end", end => {
				console.log("Cabo o negoney");
				voiceChannel.leave();
			});
		}).catch(err => console.log(err));
    }
}
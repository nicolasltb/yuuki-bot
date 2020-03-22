let Discord = require("discord.js");

module.exports = {
    name: "quiz",
    aliases: ["questions", "answers"],
    category: "fun",
    description: "Quiz sobre o NICOO",
    usage: "<quiz>",
    run: async (client, message, args) => {
        let quiz = require('../Quiz/quiz.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.resposta.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send(item.pergunta).then(() => {
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} Acertou!!`);
                })
                .catch(collected => {
                    message.channel.send('Ninguem acertou 😟');
                });
        });
    }
}

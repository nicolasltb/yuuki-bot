let Discord = require("discord.js");
let beautify = require("beautify");

module.exports = {
    name: "eval",
    aliases: ["e"],
    category: "administration",
    description: "Evil",
    usage: "<code>",
    run: async (client, message, args) => {
        if (message.author.id !== '185788831448956929') {
            return message.channel.send("So o developer pode usar essa funcao");
        }

        if(!args[0]) {
            return message.channel.send("Voce precisa escrever o codigo...");
        }

        try {
            if(args.join(" ").toLowerCase().includes("token")) {
                return;
            }
            let code = args.join(" ");
            let evaluated = eval(code);

            let embed = new Discord.RichEmbed()
                .setColor("#00FF00")
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTitle("✅ Eval")
                .addField("Code", `\`\`\`js\n${beautify(args.join(" "), {format: "js"})}\n\`\`\``)
                .addField("Evaluated", evaluated)
                .addField("Tipo", typeof(evaluated))

            message.channel.send(embed);
        } catch (e) {
            let embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setDescription(e)
            .setTitle("❌ Erro!")
            

        message.channel.send(embed);
        }

    }
}

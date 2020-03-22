let Discord = require("discord.js");
let fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "info",
    description: "Mostra sua imagem de perfil.",
    usage: "<username>",
    run: async (client, message, args) => {
        let username = args.join('');

        if (!username) {
            return message.reply("Insira um username...")
                .then(m => m.delete(3000));
        }

        let url = `https://instagram.com/${username}/?__a=1`;
        let resposta = await fetch(url).then(url => url.json())
            .catch(e => {
                message.reply("Usuario nao encontrado... 😟")
                    .then(m => {
                        m.delete(5000);
                    });
            });

        let conta = resposta.graphql.user;
        let embed = new Discord.RichEmbed()
            .setTitle(conta.full_name)
            .setColor("RANDOM")
            .setURL(`https://instagram.com/${username}`)
            .setThumbnail(conta.profile_pic_url_hd)
            .addField("Username", conta.username, true)
            .addField("Nome Completo", conta.full_name, true)
            .addField("Bio", conta.biography.length == 0 ? "vazia..." : conta.biography)
            .addField("Posts", conta.edge_owner_to_timeline_media.count, true)
            .addField("Seguidores", conta.edge_followed_by.count)
            .addField("Seguindo", conta.edge_follow.count, true)
            .addField("Privado", conta.is_private ? "Sim 🔒" : "Nao 🔓", true);

        message.channel.send(embed);

    }
}

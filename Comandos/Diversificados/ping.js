module.exports = {
    name: "ping",
    aliases: ["pingar"],
    category: "fun",
    description: "Testa o ping do bot.",
    usage: "<mention>",
    run: async (client, message, args) => {
        message.channel.send("Pinging ...")
			.then((msg) => {
				msg.edit("Ping: " + Math.abs((Date.now() - msg.createdTimestamp)) + " ms")
			});
    }
}

let Discord = require("discord.js");
let fetch = require("node-fetch");
let pup = require('puppeteer');
let fs = require('fs');

module.exports = {
    name: "wikipedia",
    aliases: ["wiki"],
    category: "divesificados",
    description: "Pesquisa na wikipedia",
    usage: "<code>",
    run: async (client, message, args) => {

      let term = args.join();
      term.toLowerCase();
      let url = `https://pt.wikipedia.org/w/api.php?action=opensearch&search=${term}&format=json`;
        
      let resposta = await fetch(url).then(url => url.json())
            .catch(e => {
                message.reply("Pesquisa nao encontrada... 😟")
                    .then(m => {
                        m.delete(5000);
                    });
            });

        let link = resposta[3].shift();

        if(link == undefined) {
            message.reply("Pesquisa nao encontrada. 😥");
        } else {

            message.reply("Aguarde um instante, gerando PDF... 🥵🥵🥵");

            let pdfBuffer = await printPDF(link);

            await fs.writeFileSync(`${term}.pdf`, pdfBuffer);
    
            await message.channel.send("Aqui esta seu PDF.", { files: [`${term}.pdf`] });

            fs.unlinkSync(`${term}.pdf`);
        }

    }
}

async function printPDF(link) {
    const browser = await pup.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(link, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4' });
   
    await browser.close();
    return pdf;
  }

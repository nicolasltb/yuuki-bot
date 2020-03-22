const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Comando","Tipo", "Status");

module.exports = (client) => {
    readdirSync("./Comandos/").forEach(dir => {
        const comandos = readdirSync(`./Comandos/${dir}/`).filter(f => f.endsWith(".js"));

        for(let file of comandos) {
            let pull = require(`../Comandos/${dir}/${file}`);

            if(pull.name) {
                client.comandos.set(pull.name, pull);
                table.addRow(file, dir , 'OK!');
            } else {
                table.addRow(file, dir , 'Failed!');
                continue;
            }

            arrayzar = Object.values(pull);

            if (pull.aliases && Array.isArray(arrayzar)) {
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }
        }
    });

    console.log(table.toString());

}

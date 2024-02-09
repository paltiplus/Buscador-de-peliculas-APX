const fs = require("fs");
const { sinArgumento, ordenarPelis, searchPelis, searchTags } = require("./pelis");
const casiPelis = fs.readFileSync(__dirname +"/pelis.js");

const condicion = process.argv[2];

const propiedad = process.argv[3];

const tagTerminal = process.argv.slice(2).map(tag => tag.toLowerCase());

function main() {
    if (process.argv.length <= 2) {
        sinArgumento();
    } else
    if (condicion === "--sort") {
        ordenarPelis();
    } else
    if (condicion === "--search") {
        searchPelis(propiedad);
    }
    if (condicion === "--tag") {
        searchTags(tagTerminal);
    }
};

main();
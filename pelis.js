const fs = require("fs");
const casiPelis = fs.readFileSync(__dirname +"/pelis.json");
const peliculas = JSON.parse(casiPelis);
const propiedad = process.argv[3];
const tagTerminal = process.argv.slice(2).map(tag => tag.toLowerCase());
function sinArgumento() {
        console.log("Todas las peliculas son:");
        console.table(peliculas);
};


function ordenarPelis() {
    switch(propiedad) {
        case 'title':
            console.log("Ordeno por titulo");
            peliculas.sort((a, b) => a.title.localeCompare(b.title));
            console.log (peliculas);
            break;
        case "rating":
            console.log("Ordeno por rating");
            peliculas.sort((a, b) => b.rating - a.rating);
            console.log(peliculas);
            break;
        default:
            console.log("Pruebe otra propiedad");
    }
};

function searchPelis(propiedad) {
    const buscadorTitulo = peliculas.filter((pelicula) => pelicula.title.toLowerCase().includes(propiedad.toLowerCase()));
    if (buscadorTitulo.length > 0) {
        console.log("Peliculas con", propiedad);
        console.table(buscadorTitulo);

    } else {
        console.log("Pruebe con otra palabra");
    }
};

function searchTags(tagTerminal) {
    const buscadorTags = peliculas.filter((pelis) => pelis.tags.some((tag => tagTerminal.includes(tag.toLowerCase()))));
    if (buscadorTags.length > 0) {
        console.log("Peliculas con", tagTerminal);
        console.table(buscadorTags);

    } else {
        console.log("Pruebe con otra tag");
    }
}


module.exports = {searchPelis, ordenarPelis, sinArgumento, searchTags}

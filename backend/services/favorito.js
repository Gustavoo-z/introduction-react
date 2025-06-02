const fs = require('fs');
const { getTodosLivros } = require('./livro');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function cadastrarFavorito(id) {
    const livros = getTodosLivros();
    const favoritos = getTodosFavoritos();
    const livroParaInserir = livros.find(livro => livro.id === id);
    const novaListaFavoritos = [...favoritos, livroParaInserir];
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
}

function excluirFavorito(id) {
    const favoritos = getTodosFavoritos();
    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id);
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados));
}

module.exports = {
    getTodosFavoritos,
    cadastrarFavorito,
    excluirFavorito
}
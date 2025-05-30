const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
    const livros = getTodosLivros();
    const livroFiltrado = livros.filter(livro => livro.id === id)[0];
    return livroFiltrado;
}

function cadastrarLivro(livroParaCadastrar) {
    const livros = getTodosLivros();
    const novaListaLivros = [...livros, livroParaCadastrar];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}

function editarLivro(dadosLivro, id) {
    let livros = getTodosLivros();
    const indice = livros.findIndex(livro => livro.id === id);
    const livroModificado = {...livros[indice], ...dadosLivro};
    livros[indice] = livroModificado;
    fs.writeFileSync("livros.json", JSON.stringify(livros));
    return livroModificado;
}

function excluirLivro(id) {
    const livros = getTodosLivros();
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    cadastrarLivro,
    editarLivro,
    excluirLivro
}
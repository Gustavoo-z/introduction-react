const { getTodosLivros, getLivroPorId, cadastrarLivro, editarLivro, excluirLivro } = require("../services/livro");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();        
        res.status(200).send(livros);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function getLivroId(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const livro = getLivroPorId(id);        
            res.status(200).send(livro);
        } else {
            res.status(422).send("Id inválido");
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroParaCadastrar = req.body;

        if (req.body.nome) {
            const livroParaMsg = JSON.stringify(livroParaCadastrar);
            cadastrarLivro(livroParaCadastrar);
            res.status(201).send(`Livro cadastrado com sucesso: ${livroParaMsg}`);
        } else {
            res.status(422).send("O campo nome é obrigatório");
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const dadosLivro = req.body;
        const livroId = req.params.id;

         if (livroId && Number(livroId)) {
            
            const verificaLivro = getLivroPorId(livroId);
                if (!verificaLivro) {
                    res.status(422).send("Não é possível atualizar um livro que não existe");
                }   
             
            const livroAntesDaModificacao = JSON.stringify(getLivroPorId(livroId));
            let livroModificado = JSON.stringify(editarLivro(dadosLivro, livroId));
            res.status(200).send(`O livro foi alterado de ${livroAntesDaModificacao} para ${livroModificado}`);
         } else {
            res.status(422).send("Id inválido");
         }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;

         if (id && Number(id)) {
             const conteudoLivro = JSON.stringify(getLivroPorId(id));
             excluirLivro(id);
             res.status(200).send(`Livro excluído com sucesso: ${conteudoLivro}`);
         } else {
            res.status(422).send("Id inválido");
         }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroId,
    postLivro,
    patchLivro,
    deleteLivro
}
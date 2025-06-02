const { getTodosFavoritos, cadastrarFavorito, excluirFavorito } = require ('../services/favorito');

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos();        
        res.status(200).send(favoritos);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        cadastrarFavorito(id);
        res.status(201).send("Favorito cadastrado com sucesso");
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

         if (id && Number(id)) {
             excluirFavorito(id);
             res.status(200).send("Favorito removido com sucesso");
         } else {
            res.status(422).send("Id inválido");
         }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
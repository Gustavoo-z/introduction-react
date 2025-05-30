const { Router } = require("express");
const { getLivros, getLivroId, postLivro, patchLivro, deleteLivro } = require('../controllers/livro.js')

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivroId);

router.post("/cadastrar", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

module.exports = router;
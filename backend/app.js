const express = require('express');
const rotaLivro = require('./routes/livro');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: "*"}))
app.use("/livros", rotaLivro);

const port = 8000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function getLivros(req, res) {
    try {
        res.send('Requisição GET')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros
}
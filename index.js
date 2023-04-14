// importação do express
const express = require("express");

// Criando as rotas do meu projeto 
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile('./view/index.html', { root: __dirname })
})

router.get('/contatos', (req, res) => {
    res.sendFile('./view/contatos.html', { root: __dirname });
});
router.get('/produtos', (req, res) => {
    res.sendFile('./view/produtos.html', { root: __dirname });
});
router.get('/produtos', (req, res) => {
    res.sendFile('./view/contatos.html', { root: __dirname });
});
router.get('/catalogos', (req, res) => {
    res.sendFile('./view/catalogos.html', { root: __dirname });
});

// Configuração para exportação 

const index = express();
index.use("/", router);

module.exports = index;
const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors(cors()));
app.use(express.static(path.join(__dirname, 'public'))); //servir arquivos estáticos da pasta "public"
app.use(express.utlencoded({ extended: true})); //formulário
app.use(express.json());


// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

//Upload de arquivos
app.post('/upload',(req, res) => {
    let fileData = '';
    //armazena dados do arquivo
    req.on('data', (chunk) => {
        fileData += chunk;
    });

    req.on('end', () => {
        res.status(200).json({ message: 'Upload realizado!'});
    });
});

// Rota para a página "404"
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
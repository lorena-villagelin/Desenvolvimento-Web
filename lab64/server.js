const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Para lidar com dados de formulários
app.use(express.json()); // Para lidar com JSON, caso necessário

// Rota para a página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para a página "Sobre"
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Rota para upload de arquivos
app.post("/upload", (req, res) => {
  let fileData = "";

  // Capturando os dados do arquivo enviado
  req.on("data", (chunk) => {
    fileData += chunk;
  });

  req.on("end", () => {
    // Aqui estamos apenas simulando o upload e enviando uma resposta
    res.status(200).json({ message: "Upload simulado com sucesso!" });
  });
});

// Rota 404 para páginas não encontradas
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
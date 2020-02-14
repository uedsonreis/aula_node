import express from "express";
const app = express();

app.get("/teste", (req, res) => res.send("Requisição (GET) de Teste ok!"));

app.listen(3000, () => console.log("App rodando na porta 3000!"));
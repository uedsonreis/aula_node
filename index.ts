import express from "express";

import irpf from "./irpf";

const app = express();

app.get("/teste", (req, res) => res.send("Requisição (GET) de Teste ok!"));

app.get("/irpf/example", (req, res) => res.json(irpf.calculateExample()));

app.get("/irpf/:value/:name", (req, res) => {

    const value = Number(req.params.value);
    const name = req.params.name;

    res.json(irpf.calculateThis(value, name));
});

app.listen(3000, () => console.log("App rodando na porta 3000!"));
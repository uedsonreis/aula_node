import express from "express";
import cors from 'cors';

import irpf from "./irpf";

const app = express();
app.use(express.json())
app.use(cors());

app.get("/teste", (req, res) => res.send("Requisição (GET) de Teste ok!"));

app.get("/irpf/example", (req, res) => res.json(irpf.calculateExample()));

app.get("/irpf/:value/:name", (req, res) => {

    const value = Number(req.params.value);
    const name = req.params.name;

    res.status(200).json(irpf.calculateThis(value, name));
});

app.post("/irpf/ex2", (req, res) => {

    const value = Number(req.body.value);
    const name = req.body.name;

    res.status(200).json(irpf.calculateThis(value, name));
});

app.listen(3000, () => console.log("Backend rodando na porta 3000!"));
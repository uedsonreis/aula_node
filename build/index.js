"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var irpf_1 = __importDefault(require("./irpf"));
var app = express_1.default();
app.get("/teste", function (req, res) { return res.send("Requisição (GET) de Teste ok!"); });
app.get("/irpf/example", function (req, res) { return res.json(irpf_1.default.calculateExample()); });
app.get("/irpf/:value/:name", function (req, res) {
    var value = Number(req.params.value);
    var name = req.params.name;
    res.json(irpf_1.default.calculateThis(value, name));
});
app.listen(3000, function () { return console.log("App rodando na porta 3000!"); });

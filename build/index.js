"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/teste", function (req, res) { return res.send("Requisição (GET) de Teste ok!"); });
app.listen(3000, function () { return console.log("App rodando na porta 3000!"); });

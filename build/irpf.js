"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabela_1 = require("./model/tabela");
var pagador_1 = require("./model/pagador");
var IRPF = /** @class */ (function () {
    function IRPF() {
        this.tabela = new tabela_1.Tabela();
    }
    IRPF.prototype.calculateExample = function () {
        return this.calculate(100000, "Uedson Reis");
    };
    IRPF.prototype.calculateThis = function (annualValue, name) {
        return this.calculate(annualValue, name);
    };
    IRPF.prototype.calculate = function (annualValue, name) {
        var pagador = new pagador_1.Pagador();
        pagador.nome = (name) ? name : "";
        pagador.ganhoAnual = annualValue;
        this.tabela.calcularIRPF(pagador);
        console.log("Cálculo de " + pagador.nome);
        console.log("Faixa Isento: ", pagador.valorFaixaIsento.toFixed(2));
        console.log("Faixa 7.5%: ", pagador.valorFaixa075.toFixed(2));
        console.log("Faixa 15%: ", pagador.valorFaixa150.toFixed(2));
        console.log("Faixa 22.5%: ", pagador.valorFaixa225.toFixed(2));
        console.log("Faixa 27.5%: ", pagador.valorFaixa275.toFixed(2));
        console.log("Total: ", pagador.totalAPagar.toFixed(2));
        return pagador;
    };
    return IRPF;
}());
exports.default = new IRPF();

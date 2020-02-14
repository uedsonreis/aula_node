"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tabela = /** @class */ (function () {
    function Tabela() {
        this.anoExercicio = 2019;
        this.faixaIsento = 22847.76;
        this.faixa075 = 11072.04; // 22.847,76 - 33.919,80
        this.faixa150 = 11092.80; // 33.919,80 - 45.012,60
        this.faixa225 = 10963.56; // 45.012,60 - 55.976,16
        this.tetoEducacao = 3561.50;
        this.recebeuDe = [];
    }
    Tabela.prototype.getTetoPGBL = function (pagador) {
        return pagador.ganhoAnual * 0.12;
    };
    Tabela.prototype.calcularINSS = function (pagador) {
        var taxa = Tabela.taxaPadraoINSS;
        if (pagador.ganhoAnual <= Tabela.inssLimite1) {
            taxa = 0.08;
        }
        else if (pagador.ganhoAnual <= Tabela.inssLimite2) {
            taxa = 0.09;
        }
        if (pagador.ganhoAnual > Tabela.inssLimite3) {
            return (Tabela.inssLimite3 * taxa);
        }
        else {
            return (pagador.ganhoAnual * taxa);
        }
    };
    Tabela.prototype.dedutivo = function (deducao) {
        if (deducao.teto != null && deducao.teto < deducao.valor) {
            return deducao.teto;
        }
        else {
            return deducao.valor;
        }
    };
    Tabela.prototype.calcularIRPF = function (pagador) {
        var _this = this;
        var totalAPagar = 0.0;
        var valorBase = pagador.ganhoAnual - this.calcularINSS(pagador);
        pagador.pagou.forEach(function (deducao) {
            valorBase = valorBase - _this.dedutivo(deducao);
        });
        if (valorBase <= this.faixaIsento) {
            pagador.valorFaixaIsento = valorBase;
        }
        else {
            pagador.valorFaixaIsento = this.faixaIsento;
            valorBase = valorBase - this.faixaIsento;
            if (valorBase <= this.faixa075) {
                pagador.valorFaixa075 = valorBase;
                totalAPagar = valorBase * Tabela.P075;
            }
            else {
                pagador.valorFaixa075 = this.faixa075;
                totalAPagar = totalAPagar + this.faixa075 * Tabela.P075;
                valorBase = valorBase - this.faixa075;
                if (valorBase <= this.faixa150) {
                    pagador.valorFaixa150 = valorBase;
                    totalAPagar = totalAPagar + valorBase * Tabela.P150;
                }
                else {
                    pagador.valorFaixa150 = this.faixa150;
                    totalAPagar = totalAPagar + this.faixa150 * Tabela.P150;
                    valorBase = valorBase - this.faixa150;
                    if (valorBase <= this.faixa225) {
                        pagador.valorFaixa225 = valorBase;
                        totalAPagar = totalAPagar + valorBase * Tabela.P225;
                    }
                    else {
                        pagador.valorFaixa225 = this.faixa225;
                        totalAPagar = totalAPagar + this.faixa225 * Tabela.P225;
                        valorBase = valorBase - this.faixa225;
                        pagador.valorFaixa275 = valorBase;
                        totalAPagar = totalAPagar + valorBase * Tabela.P275;
                    }
                }
            }
        }
        pagador.totalAPagar = totalAPagar;
        this.adicionar(pagador);
    };
    Tabela.prototype.adicionar = function (pagador) {
        var index = this.recebeuDe.indexOf(pagador);
        if (index > -1) {
            return false;
        }
        else {
            this.recebeuDe.push(pagador);
            return true;
        }
    };
    Tabela.prototype.remover = function (pagador) {
        var index = this.recebeuDe.indexOf(pagador);
        if (index > -1) {
            this.recebeuDe.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    };
    Tabela.taxaPadraoINSS = 0.11;
    Tabela.inssLimite1 = 1751.81 * 13; //1659.38 * 13;
    Tabela.inssLimite2 = 2919.72 * 13; //2765.66 * 13;
    Tabela.inssLimite3 = 5839.45 * 13; //5531.31 * 13;
    Tabela.INSS = 0.11;
    Tabela.P075 = 0.075;
    Tabela.P150 = 0.150;
    Tabela.P225 = 0.225;
    Tabela.P275 = 0.275;
    return Tabela;
}());
exports.Tabela = Tabela;

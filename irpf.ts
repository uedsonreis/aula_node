import { Tabela } from './model/tabela';
import { Pagador } from './model/pagador';

class IRPF {

    private tabela: Tabela = new Tabela();

    public calculateExample(): Pagador {
        return this.calculate(100000, "Uedson Reis");
    }

    public calculateThis(annualValue: number, name?: string): Pagador {
        return this.calculate(annualValue, name);
    }

    private calculate(annualValue: number, name?: string): Pagador {
        const pagador: Pagador = new Pagador();

        pagador.nome = (name) ? name : "";
        pagador.ganhoAnual = annualValue;

        this.tabela.calcularIRPF(pagador);
        console.log("Cálculo de "+ pagador.nome);

        console.log("Faixa Isento: ", pagador.valorFaixaIsento.toFixed(2));
        console.log("Faixa 7.5%: ", pagador.valorFaixa075.toFixed(2));
        console.log("Faixa 15%: ", pagador.valorFaixa150.toFixed(2));
        console.log("Faixa 22.5%: ", pagador.valorFaixa225.toFixed(2));
        console.log("Faixa 27.5%: ", pagador.valorFaixa275.toFixed(2));

        console.log("Total: ", pagador.totalAPagar.toFixed(2));

        return pagador;
    }
}

export default new IRPF();
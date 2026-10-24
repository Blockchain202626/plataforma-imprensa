// Simulação do Bot Noturno operando das 00:00 às 06:00
class BotNoturno24h {
    constructor() {
        this.lucroMadrugada = 0.00;
        this.furosProcessados = 0;
        this.multasAplicadas = 0;
    }

    processarTransacaoNoturna(valorFuro, taxaPlataforma) {
        let comissao = valorFuro * taxaPlataforma;
        this.lucroMadrugada += comissao;
        this.furosProcessados++;
    }

    aplicarMultaAntiFake(veiculo) {
        let multa = 1000.00;
        veiculo.saldoGarantia -= multa;
        this.lucroMadrugada += multa;
        this.multasAplicadas++;
    }

    gerarRelatorioMatinal() {
        return {
            mensagemWhatsApp: `☀️ Bom dia! Resumo da Madrugada:\n- Lucro Total da Plataforma: R$ ${this.lucroMadrugada.toFixed(2)}\n- Furos Processados: ${this.furosProcessados}\n- Multas Anti-Fake: ${this.multasAplicadas}`
        };
    }
}

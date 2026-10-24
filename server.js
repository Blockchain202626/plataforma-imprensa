const express = require('express');
const app = express();
app.use(express.json());

// Banco de dados simulado para as 20 Imprensas
let imprensasRanking = [
    { id: 1, nome: "CNN Brasil", plano: "Enterprise", saldoGarantia: 5000.00, pontos: 985, lucroGerado: 45200.00 },
    { id: 2, nome: "G1 / Grupo Globo", plano: "Enterprise", saldoGarantia: 5000.00, pontos: 970, lucroGerado: 42100.00 },
    { id: 3, nome: "Reuters", plano: "Enterprise", saldoGarantia: 5000.00, pontos: 955, lucroGerado: 39800.00 }
    // ... até 20 veículos
];

// Rota de Venda de Furo de Informação (R$ 500 ou R$ 700)
app.post('/api/vender-furo', (req, res) => {
    const { imprensaId, tipoGravidade } = req.body; // tipoGravidade: 'padrao' (500) ou 'extrema' (700)
    
    let valorFuro = tipoGravidade === 'extrema' ? 700.00 : 500.00;
    let taxaComissao = tipoGravidade === 'extrema' ? 0.15 : 0.20; // 15% ou 20% para a plataforma
    
    let comissaoPlataforma = valorFuro * taxaComissao;
    let repasseImprensa = valorFuro - comissaoPlataforma;

    res.json({
        status: "Sucesso",
        valorTotal: valorFuro,
        comissaoPlataformaRetida: comissaoPlataforma,
        valorRepassadoAoVeiculo: repasseImprensa,
        mensagem: "Furo validado pela Super IA e transação concluída com sucesso."
    });
});

app.listen(3000, () => {
    console.log("Servidor da Plataforma rodando na porta 3000...");
});

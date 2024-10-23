let estoqueLojas = [
    { lojaId: 1, nome: 'Loja A', quantidadeRecomendada: 100, quantidadeMinima: 20, estoqueAtual: 80 },
    { lojaId: 2, nome: 'Loja B', quantidadeRecomendada: 150, quantidadeMinima: 30, estoqueAtual: 25 }
];

module.exports = {
    getEstoqueLojas: () => estoqueLojas,

    enviarTalao: (loja, quantidade, dataEnvio) => {
        const novoEnvio = {
            id: estoqueLojas.length + 1,
            loja,
            quantidade,
            dataEnvio,
            status: 'Enviado'
        };

        // Atualiza o estoque após o envio
        const estoqueLoja = estoqueLojas.find(e => e.nome === loja);
        if (estoqueLoja) {
            estoqueLoja.estoqueAtual -= parseInt(quantidade);
        }
    },

    // Verifica se o estoque está abaixo do mínimo para cada loja
    alertaEstoqueBaixo: () => {
        return estoqueLojas.filter(loja => loja.estoqueAtual < loja.quantidadeMinima);
    }
};

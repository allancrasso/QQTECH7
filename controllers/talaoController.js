const lojaModel = require('../models/lojaModel');
const talaoModel = require('../models/talaoModel');

// Exibe o formulário de envio de talões
exports.exibeFormularioEnvio = (req, res) => {
    const lojas = lojaModel.getLojas();
    const estoque = talaoModel.getEstoqueLojas();
    res.render('enviarTalao', { lojas, estoque });
};

// Processa o envio de talões
exports.enviarTalao = (req, res) => {
    const { lojaId, quantidade, dataEnvio } = req.body;

    if (lojaId && quantidade && dataEnvio) {
        const loja = lojaModel.getLojas().find(l => l.id === parseInt(lojaId));
        talaoModel.enviarTalao(loja.nome, quantidade, dataEnvio);
    }

    res.redirect('/talao');
};

// Lista os envios de talões via API
exports.listarEnvios = (req, res) => {
    const envios = talaoModel.getEnvios();
    res.json(envios);
};

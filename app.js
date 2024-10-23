const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Importa as rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const perfilRoutes = require('./routes/perfilRoutes');
const lojaRoutes = require('./routes/lojaRoutes');
const associacaoRoutes = require('./routes/associacaoRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const talaoRoutes = require('./routes/talaoRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes'); // Rotas de relatórios

const app = express();
const port = 3001;

// Configura o motor de templates (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Certifique-se de que 'views' esteja correto

// Configura a pasta 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Parser para o body de requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/usuario', usuarioRoutes);
app.use('/perfil', perfilRoutes);
app.use('/loja', lojaRoutes);
app.use('/associacao', associacaoRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/talao', talaoRoutes);
app.use('/relatorios', relatorioRoutes); // Adiciona as rotas de relatórios

// Rota para a página de relatórios
app.get('/relatorios', (req, res) => {
    res.render('relatorios');
});

// Rota principal (home)
app.get('/', (req, res) => {
    res.render('index');
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

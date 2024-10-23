let usuarios = [
    { id: 1, nome: 'João', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' }
];

module.exports = {
    getUsuarios: () => usuarios,

    addUsuario: (nome, email) => {
        const novoUsuario = { id: usuarios.length + 1, nome, email };
        usuarios.push(novoUsuario);
    }
};

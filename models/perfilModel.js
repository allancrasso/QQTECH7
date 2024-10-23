let perfis = [
    { id: 1, nome: 'Administrador' },
    { id: 2, nome: 'Gerente' },
    { id: 3, nome: 'Funcionário' }
];

module.exports = {
    getPerfis: () => perfis,

    addPerfil: (nome) => {
        const novoPerfil = { id: perfis.length + 1, nome };
        perfis.push(novoPerfil);
    }
};
    
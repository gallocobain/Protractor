
const EditarCadastro = require('../pages/EditarCadastro-page');

describe('Editar Cadastro', () => {

    const editarCadastro_page = new EditarCadastro();

    beforeAll(() => {
        browser.get(editarCadastro_page.path);
    });

    it('editar usuario', () => {

        var dados = {
            name: 'AAAAA Teste alteração',
            sobre: 'AA Teste alteração',
            email: 'alteracao@gmail.com',
            endereco: 'QE 34 Conjunto G casa 88',
            universidade: 'CEUB',
            profissao: 'Advogado',
            genero: 'Feminino',
            idade: '74'
        };

        editarCadastro_page.editarDados(dados);

        expect(editarCadastro_page.mens_sucesso.getText()).toEqual('Seu Usuário foi Atualizado!');
    });
});
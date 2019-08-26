const ListarUsuario = require('../pages/listarUsuario-page');

describe('Listar Usuario', () => {

    const listarUsuario_page = new ListarUsuario();

    beforeAll(() => {
        cadastro_page.cadastrarDados(dados);
        browser.get(listarUsuario_page.path);
    });

    it('listar usuario', () => {

        console.log('Tessssssssssssssssssssssstes');
        

        //expect(editarCadastro_page.mens_sucesso.getText()).toEqual('Seu Usuário foi Atualizado!');
    });
});
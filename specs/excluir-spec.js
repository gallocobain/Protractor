const ExcluirUsuario = require('../pages/excluirUsuario-page');

describe('Excluir Usuario', () => {

    const excluirUsuario_page = new ExcluirUsuario();

    beforeAll(() => {
        browser.get(excluirUsuario_page.path);
    });

    it('excluir usuario', () => {
       
        excluirUsuario_page.excluirUsuario();

        expect(excluirUsuario_page.mens_exclusao.getText()).toEqual('Seu Usuário foi removido com sucesso!');
        expect(excluirUsuario_page.lista.isPresent()).toBe(false);
    });
});
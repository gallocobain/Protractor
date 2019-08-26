const ListarUsuario = require('../pages/listarUsuario-page');

describe('Listar Usuario', () => {

    const listarUsuario_page = new ListarUsuario();

    beforeAll(() => {
        browser.get(listarUsuario_page.path);
    });

    it('listar usuario', () => {
        
        expect(listarUsuario_page.lista.getText()).toEqual('AAAAA Teste alteração');
        
    });
});
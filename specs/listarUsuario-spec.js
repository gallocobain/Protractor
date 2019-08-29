const ListarUsuario = require('../pages/listarUsuario-page');

describe('Listar Usuario', () => {

    const listarUsuario_page = new ListarUsuario();

    beforeEach(() => {
        browser.get(listarUsuario_page.path);
    });

    it('Listar usuario', () => {
       
        expect(listarUsuario_page.lista.getText()).toContain('AAAAA Teste alteraçcão');
        //browser.sleep(10000);
    });
});
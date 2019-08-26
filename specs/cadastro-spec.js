const NovoCadastro = require('../pages/NovoCadastro-page');

describe('Cadastro Usuário', () => {

    const cadastro_page = new NovoCadastro();

    beforeAll(() => {
        browser.get(cadastro_page.path);
    });

    it('cadastrar usuario', () => {

        var dados = {
            name: 'AAAA Teste',
            sobre: 'AAAA Teste',
            email: 'teste@gmail.com',
            endereco: 'QI 22 Conjunto G casa 88',
            universidade: 'UPIS',
            profissao: 'Analista de Teste',
            genero: 'Masculino',
            idade: '37'
        };

        cadastro_page.cadastrarDados(dados);

        expect(cadastro_page.mens_sucesso.getText()).toEqual('Usuário Criado com sucesso');
        //browser.sleep(10000)
    });

});
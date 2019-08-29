const NovoCadastro = require('../pages/NovoCadastro-page');

describe('Cadastro Usuário', () => {

    const cadastro_page = new NovoCadastro();

    beforeEach(() => {
        browser.get(cadastro_page.path);
    });


    it('Cadastrar usuario', () => {

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
        //browser.sleep(10000);
    });

    it('Cadastrar usuario sem nome', () => {

        var dados = {
            name: '',
            sobre: '',
            email: '',
            endereco: 'QI 22 Conjunto G casa 88',
            universidade: 'UPIS',
            profissao: 'Analista de Teste',
            genero: 'Masculino',
            idade: '37'
        };

        cadastro_page.cadastrarDados(dados);

        expect(cadastro_page.mens_obrigatorioNome.getText()).toEqual('nName translation missing: pt-BR.activerecord.errors.models.user.attributes.name.blank');
        
        //browser.sleep(10000);
    });
    
});
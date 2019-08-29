class NovoCadastro {

    constructor() {
        this.path = 'users/new';
        this.input_name = element(by.id('user_name'));
        this.input_sobrenome = element(by.id('user_lastname'));
        this.input_email = element(by.id('user_email'));
        this.input_endereco = element(by.id('user_address'));
        this.input_universidade = element(by.id('user_university'));
        this.input_profissao = element(by.id('user_profile'));
        this.input_genero = element(by.id('user_gender'));
        this.input_idade = element(by.id('user_age'));
        this.btn_criar = element(by.css('input[type=submit]'));
        this.mens_sucesso = element(by.id('notice'));
        this.mens_obrigatorioNome = element(by.css('#error_explanation > ul > li:nth-child(1)'));
    };

    cadastrarDados(dados) {
        this.input_name.sendKeys(dados.name);
        this.input_sobrenome.sendKeys(dados.sobre);
        this.input_email.sendKeys(dados.email);
        this.input_endereco.sendKeys(dados.endereco);
        this.input_universidade.sendKeys(dados.universidade);
        this.input_profissao.sendKeys(dados.profissao);
        this.input_genero.sendKeys(dados.genero);
        this.input_idade.sendKeys(dados.idade);
        this.btn_criar.click();
    };

};

module.exports = NovoCadastro;
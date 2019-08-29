class ListarUsuario {

    constructor() {
        this.EC = protractor.ExpectedCondicions;
        this.path = 'users';
        //this.lista = element(by.css('body > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(1)'));
        this.lista = element(by.cssContainingText("tr", 'AAAAA Teste alteração'));
    };


};

module.exports = ListarUsuario;
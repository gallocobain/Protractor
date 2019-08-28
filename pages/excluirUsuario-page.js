class ExcluirUsuario {

    constructor() {
        this.path = 'users';
        this.btn_excluir = element(by.css('body > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(11) > a'));
        this.mens_exclusao = element(by.css('#notice'));
        this.lista = element(by.cssContainingText("tr", 'AAAAA Teste alteração'));
        
    };

    excluirUsuario() {
        this.btn_excluir.click();
        var Alert = browser.switchTo().alert();
        Alert.accept();
    };
};

module.exports = ExcluirUsuario;
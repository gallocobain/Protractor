class ListarUsuario {

    constructor() {
        this.path = 'users';
        this.lista = element(by.css('body > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(1)'));
    };


};

module.exports = ListarUsuario;
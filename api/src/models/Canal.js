const Usuario = require("./usuario");

class Canal extends Usuario{
    constructor(nome,email,imagem,papel){
    super(nome,email,imagem,papel)
    this.videos = [];
    this.inscritos = [];
    }
    pegarUsuarioDono() {}
    postarVideo() {}
}
module.exports = Canal
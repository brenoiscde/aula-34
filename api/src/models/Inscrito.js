const Canal = require("./Canal");

class Inscrito extends Canal{
    constructor(nome,email,imagem,papel){
    super(nome,email,imagem,papel)
    this.canaisIncrito = [];
    }
    InscreverSeNoCanal(id) {}

}
module.exports = Inscrito
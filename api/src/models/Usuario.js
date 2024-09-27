const { videos } = require("../mock/dados.json")
const Papel = require("./Papel")
class Usuario {
    constructor(nome,email, imagem){
        this.nome = nome
        this.email = email
        this.imagem = imagem
        if(!Object.values(Papel).includes(papel)){
            throw new Error(`Papel inválido: ${papel}`)
        }
        this.papel = papel
    }
    pegarPapel(){}
    encontrarTOdos(){}
    buscarPeloId(id){}
    adicionar(){}
    atualizar(id,corpoAtualizaado){}
    excluir(id){}    
}

module.exports = Usuario
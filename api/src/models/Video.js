const gerarIdUnico = require("../utils/gerarIdUnico");
const { videos } = require("../mock/dados.json")
class Video {
    constructor(titulo,descricao, imagem, canalId){
        this.id = gerarIdUnico(videos)
        this.titulo = titulo
        this.descricao = descricao
        this.quantidadeViews = 0
        this.imagem = imagem
        this.canalId = canalId
    }

    encontrarTOdos(){}
    buscarPeloId(id){}
    adicionar(){}
    atualizar(id,corpoAtualizaado){}
    excluir(id){}    
}

module.exports = Video
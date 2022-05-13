const database = require('../models')

class CarteiraController { //declara os metodos que serao usados
    static async listaCarteiras(req, res) {
        try{
            const todasAscCarteiras = await database.Carteira.findAll()
            return res.status(200).json(todasAscCarteiras)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaUmaCarteira(req,res) {
        const { id } = req.params
        try{
            const umaCarteira = await database.Carteira.findOne( {
            where : {
                id: Number(id) 
              }
            })
            return res.status(200).json(umaCarteira)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaCarteira(req, res) {
        
        const novaCarteira = req.body
        try {
            const novaCarteiraCriada = await database.Carteira.create(novaCarteira)
            return res.status(200).json(novaCarteiraCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCarteira(req, res) {
        const { id } = req.params
        const novaInfos = req.body

         try {
            await database.Carteira.update(novaInfos, { where: {id: Number(id)}}
            )
            const carteiraAtualizada = await database.Carteira.findOne( {where: {
                id: Number(id)
            }}) 
            return res.status(200).json(carteiraAtualizada)
         } catch (error) {
            return res.status(500).json(error.message)
         }

    }

    static async apagaCarteira(req, res) {
        const { id } = req.params
        try {
            await database.Carteira.destroy( { where: { id: Number(id)}})
           return res.status(200).json({ mensagem: `id ${id} deletado`}) 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
 
}


module.exports = CarteiraController
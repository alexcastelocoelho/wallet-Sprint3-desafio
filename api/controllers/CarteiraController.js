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
        const { address } = req.params
        try{
            const umaCarteira = await database.Carteira.findOne( {
            where : {
                address: Number(address) 
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
        const { address } = req.params
        const novaInfos = req.body

         try {
            await database.Carteira.update(novaInfos, { where: {address: Number(address)}}
            )
            const carteiraAtualizada = await database.Carteira.findOne( {where: {
                address: Number(address)
            }}) 
            return res.status(200).json(carteiraAtualizada)
         } catch (error) {
            return res.status(500).json(error.message)
         }

    }

    static async apagaCarteira(req, res) {
        const { address } = req.params
        try {
            await database.Carteira.destroy( { where: { address: Number(address)}})
           return res.status(200).json({ mensagem: `address ${address} deletado`}) 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
 
}


module.exports = CarteiraController
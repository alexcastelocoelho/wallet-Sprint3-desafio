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
 
}


module.exports = CarteiraController
const { Router} = require('express') //ferramenta do express
const CarteiraController = require('../controllers/CarteiraController')

const router = Router()

router.get('/api/v1/wallet', CarteiraController.listaCarteiras)

router.get('/api/v1/wallet/:id', CarteiraController.pegaUmaCarteira)

module.exports = router
const { Router} = require('express') //ferramenta do express
const CarteiraController = require('../controllers/CarteiraController')

const router = Router()

router.get('/api/v1/wallet', CarteiraController.listaCarteiras)
router.get('/api/v1/wallet/:id', CarteiraController.pegaUmaCarteira)
router.post('/api/v1/wallet', CarteiraController.criaCarteira)
router.put('/api/v1/wallet/:id', CarteiraController.atualizaCarteira)
router.delete('/api/v1/wallet/:id', CarteiraController.apagaCarteira)


module.exports = router



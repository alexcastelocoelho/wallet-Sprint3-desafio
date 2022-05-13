// todas as rotas estarao aqui
const bodyParser = require('body-parser')
const carteira = require('./carteiraRouter')
module.exports = app => {
    app.use(bodyParser.json()) 
    app.use(carteira)
    
   

}
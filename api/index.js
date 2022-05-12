const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) 

const porta = 3000

app.get('/test', (req,res) => {
    res.status(200).send('você esta usando o metodo GET')
})

app.listen(porta, () => console.log(`servidor rodando na porta ${porta}`))


module.exports = app








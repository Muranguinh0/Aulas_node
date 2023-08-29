const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('a raquel ta de dieta')
})

app.listen(3000, () => {
    console.log('App rodando porta 3000')
})
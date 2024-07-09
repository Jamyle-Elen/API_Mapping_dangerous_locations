import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá mundinho, tá feliz?')
})

app.listen(port, () => {
    console.log(`Servidor está rodando no endereço http://localhost:${port}`)
})
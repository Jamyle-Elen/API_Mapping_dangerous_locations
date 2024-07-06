import express from 'express'
// import prisma from 'prisma' acho q nn precisa
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('N pegou conexão' , err);
        return;
    }
    console.log('Ta conectado')
})

const produto = {
    "nome": "sabonete",
    "data_fabricacao": "2024-07-06"
}

// const sql = 'INSERT INTO test (nome, data_fabricacao) VALUES (?, ?)'
const sql = 'SELECT * FROM test WHERE id = 2'

connection.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados: ', err);
      return;
    }
    console.log('Dados inseridos com sucesso: ', result);
  });






















const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    console.log(req.body)
    users.push(req.body)

    // const namePeople = req.params.nome
    res.status(201).json(req.body)
})

// jdWAQPVEgA1FUnIe

// Métodos HTTP
// Get -> Listar
// Post -> Criar
// Put -> Editar vários
// Patch -> Editar um
// Delete -> Deletar

// send -> envia mensagem resposta

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
    1- Tipo de Rota / Método HTTP
    2- Endereço (www.google.com)
 */

/*
    
    Criar uma API de lugares com mais indice de assaltos

    - Criar banco de dados dos números de assalto


*/
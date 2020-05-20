// Criando um servidor
// npm init -y 
// npm install express
// npm install -D nodemon
// npm install nunjucks - template engine


const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

// Configrando arquivos estáticos (css)
server.use(express.static('public'))
server.use(routes)

// Configuração Template Engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function() {
    console.log("server is running")
})
var app = require('./config/express')()
const rotasProdutos = require('./app/routes/produtos')(app)



app.listen(3000, () => {
    console.log("Servidor rodando")
})
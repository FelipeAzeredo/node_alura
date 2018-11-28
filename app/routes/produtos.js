module.exports = (app) =>{
    app.get('/produtos', (req, res) => {
        var connection = app.infra.dbConnection()
        var produtosBanco = new app.infra.produtosBanco(connection)
        produtosBanco.lista((erros, resultado) =>{
            res.render("produtos/lista", {lista:resultado})
        });
        connection.end()        
    })    
}


module.exports = (app) =>{
    app.get('/produtos', (req, res) => {
        var connection = app.infra.dbConnection()
        connection.query('select * from produtos', (erros, resultado) =>{
            res.render("produtos/lista", {lista:resultado})
        });
        connection.end()        
    })    
}


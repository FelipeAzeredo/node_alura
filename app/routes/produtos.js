module.exports = (app) =>{
    var listaProdutos = (req, res) =>{
        var connection = app.infra.dbConnection()
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista((erros, resultado) =>{
            res.format({
                html:() => {
                    res.render('produtos/lista', {lista:resultado})
                },
                json:() => {
                    res.json(resultado)
                }
            })
           
        });
        connection.end() 
    }

    app.get('/produtos',listaProdutos) 

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form',{errosValidacao:{}, produto:{}})
    })
    
    app.post('/produtos', (req, res) => {
        var produto = req.body
        req.assert('titulo', 'Titulo é obrigátorio').notEmpty()
        req.assert('preco', 'Formato inválido').isFloat()        
        var erros = req.validationErrors()
        if(erros){
            res.format({
                html:() => {
                    res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto})
                },
                json:() => {
                    res.json(erros)
                }
            })            
            return
        }
        var connection = app.infra.dbConnection()
        var produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.salva(produto, (erros, resultado) => {
            res.redirect('/produtos')
            return
        })
    })
}


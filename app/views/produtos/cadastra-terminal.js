const http = require('http')

const configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    } 

}

const cliente = http.request(configuracoes, (res) =>{
    console.log(res.statusCode)
    res.on('data', (body) => {
        console.log('Corpo:' +body)
    })
})

var produto = {
    titulo: 'mais sobre o node',
    descricao: 'node , javascript e um pouce de http',
    preco: 30.00
}

cliente.end(JSON.stringify(produto))
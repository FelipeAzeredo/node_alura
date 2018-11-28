const express = require('express')
const load = require('express-load')

module.exports = () => {
    const app = express()    
    app.set('view engine', 'ejs')
    app.set('views', './app/views')

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app)

    return app
    

}


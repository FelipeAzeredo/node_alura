const app = require('express')()
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = () => {
    return app
   
}
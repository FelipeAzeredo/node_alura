module.exports = () => {
    return  (connection) => {
        this.lista = (callback) => {
            connection.query('select * from produto', callback)
        }
        return this
    }
}
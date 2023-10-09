const mongoose = require('mongoose')

const dbUrl= "mongodb+srv://admin:1234@cluster0.dc5sqie.mongodb.net/employee_db?retryWrites=true&w=majority"


module.exports = () => {
    return mongoose.connect(dbUrl)
}
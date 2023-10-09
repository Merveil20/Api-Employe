const express = require("express")
const bodyParser = require("body-parser")

const connectBD = require("./bd")
const employeerRoutes = require('./controllers/employee.controller')
const {errorHandler} = require('./middlewares')

const app= express()

app.use(bodyParser.json())
app.use('/api/employees', employeerRoutes)
app.use(errorHandler)



connectBD()
    .then(()=>{
        console.log("db connection succeded.")
        app.listen(4000, ()=>{
            console.log("Server start at 3000");
        })
    })
    .catch(err => console.log(err))
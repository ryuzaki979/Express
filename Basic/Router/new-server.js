const express = require("express")

const app = express()

app.use(require('./router'))


app.listen('8000',()=>{
    console.log('server is running')
})
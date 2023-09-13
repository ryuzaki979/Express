const app = require('express')()
const { customError,errorHandler } = require('./error') 

app.get('/health',(_req,res)=>{
    throw new Error(`i'm Error`)
    res.status(200).json({message:'Hello Server'})
})


app.use(customError)
app.use(errorHandler)


module.exports = app

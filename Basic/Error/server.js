const app = require('express')()


app.get('/', (req,res)=>{
    const err = new Error('Bad Request')
    err.status = 400
    throw err
    res.send('Yo EMina')
})
app.use((req,res,next)=>
{
    const error = new Error("404 Not Found")
    error.status = 404
    next(error)
})

app.use((err,req,res,next)=>{
    if(err.status){
        return res.status(err.status).send(err.message)
    }
    res.status(500).send(`<h1>I'm Error 500`)
})
app.listen('8000',()=>{
    console.log('server is listening');
})
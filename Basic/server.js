const { error, log } = require('console')
const express= require('express')

const app = express()
const fs = require('fs')
app.use(express.json())
app.get('/',(req,res)=>{
        fs.readFile('./pages/index.html',(error,data)=>{
            if(error){
                console.log("error", error)
                res.send(`<h1>Error occured<h1>`)
            }
            else{
                res.write(data)
                res.end()
            }
        })
})
app.get('/anime',(req,res)=>{
    if(req.query.name=="death-note"){
        console.log(req.query.name , 'it is')
        fs.readFile('./pages/death-note.html',(error,data)=>{
            if(error){
                console.log("error", error);
                res.send('Something Went Wrong')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }

    if(req.query.name=="naruto"){
        console.log('calling-naruto')
        fs.readFile('./pages/naruto.html',(error,data)=>{
            if(error){
                console.log('Error'.error);
                res.send('Error Occured')
            }
            else{
                res.write(data)
                res.end()
            }
        })
    }
    if(req.query.name=="boku dake ga inai machi"){
        console.log("i am boku")
        fs.readFile('./pages/boku-dake-ga-inai-machi.html',(error,data)=>{
            if(error){
                console.log("Error", error);
                res.send(`<h1> Some Error Occured<h1>`)
            }
            else{
                res.write(data)
                res.end
            }
        })
    }
})



app.listen('8000',()=>{
    console.log('i am running')
})
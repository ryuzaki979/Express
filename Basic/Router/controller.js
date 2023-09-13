const { error } = require("console")
const fs = require("fs")

exports.homeController = (req,res) =>{
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
}

exports.deathNote = (req,res) =>{
    fs.readFile('./pages/death-note.html',(error,data)=>{
        if(error){
            console.log(error)
            res.send('<h1>Error Occured')
        }
        else{
            res.write(data)
            res.end()
        }
    })
}

exports.naruto = (req,res) =>{
    fs.readFile('./pages/naruto.html',(error,data)=>{
        if(error){
            console.log(error);
            res.send('Error occured')
        }
        else{
            res.write(data)
            res.end()
        }
    })
}
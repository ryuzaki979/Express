const app = require('express')()

// q1:can we use get request for same directory?

app.get('/',(req,res)=>{
    res.send(`<h1>I'm Home<h1>`)
})
/** a1:this won't work 
 * 
 In http, one request gets one response
 */

 
// app.get('/',(req,res)=>{
//     if(req.query.nav == 'about'){
//         console.log(req.query.nav)

//         res.send(`<h1>I'm ${req.query.nav}<h1>`)
//     } 
//     if(req.query.nav == 'help'){
//         console.log(req.query.nav)
//         res.send(`<h1>I'm ${req.query.nav}<h1>`)
//     }
// })

app.get('/nav',(req,res)=>{
    if(req.query.nav == 'about'){
        console.log(req.query.nav)

        res.send(`<h1>I'm ${req.query.nav}<h1>`)
    } 
    if(req.query.nav == 'help'){
        console.log(req.query.nav)
        res.send(`<h1>I'm ${req.query.nav}<h1>`)
    }
})


app.listen('8000',()=>{
    console.log('Server is listening');
})
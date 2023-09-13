const customError = (_req,_res,next) =>{
    const err = new Error('Page not found')
    err.status = 404
    next(err)
}

const errorHandler = (err,_req,res,_next) =>{
    if(err.status){
       return res.status(err.status).send(`<h1>${err.message}`)
    }
    res.status(500).send(`<h1>Something Went Wrong</h1>`)
    
}

module.exports = {customError,errorHandler}
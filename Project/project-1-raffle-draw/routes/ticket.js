const router = require('express').Router();

const db = require('../database/db');

router
    .route('/t/:ticketId')
    .get((req,res)=>{
        const ticketId = req.params.ticketId;
        const ticket = db.findById(ticketId);
        res.status(200).json(ticket);
    })
    .patch((req,res)=>{
        const ticketId = req.params.ticketId;
        console.log(ticketId)
        console.log(req.body)
        db.updateById(ticketId,req.body)
    
        res.status(200).json({message: "Updated Succesfully"});
    })
    .delete((req,res)=>{
        const ticketId = req.params.ticketId;
        const deletedTicket = db.deleteById(ticketId);
        console.log(deletedTicket);
        res.status(200).json({message: "Deleted succesfully"})
    })
    

router.post('/sell',(req,res)=>{
    const {username} = req.body;
    const ticket = db.create(username);
    res.status(201).json({message: 'Ticket Created succesfully'})
})

router.post('/bulk',(req,res)=>{
    const {username,quantity} = req.body;
    const ticket = db.bulkCreate(username,quantity);
    res.status(201).json({
        message: "Bulk  ticekt created Succesfully"
    })
    
})
router.get('/u/:username',(req,res)=>{
    const username = req.params.username
    const ticket = db.findByUsername(username)
    res.status(200).json(ticket)
})
router.get('/draw',(req,res)=>{
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount);
    res.status(200).json(winners);
})

router.get('',(req,res)=>{
    const tickets = db.find();
    res.status(200).json(tickets);
})

module.exports = router;
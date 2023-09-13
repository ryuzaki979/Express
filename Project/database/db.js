const Ticket = require("../model/Ticket");

class MyDB {
    constructor(){
        this.tickets = [];
    }
    /**
     * 
     * @param {String} username 
     * @returns{Ticket} return a ticket object
     */
    create(username) {
        const ticket = new Ticket(username);
        this.tickets.push(ticket);
        return ticket;
    }
    bulkCreate(username,quantity){
        
         for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username);
        }
    }
    find(){
        return this.tickets;
    }
    findById(id) {
        const ticket = this.tickets.find((ticket)=> ticket.id ===id)
        return ticket;
    }
    /**
     * Returns user Objects Array
     * i used find frist but it just returned the first user. 
     * so i search google about find & filter method
     * filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
       In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned.
     * @param {String} username 
     * @returns {Array} of Users
     */
    findByUsername(username){
        // const ticket = this.tickets.find((ticket)=> ticket.username === username);
        const ticket = this.tickets.filter((ticket)=> ticket.username === username);

        return ticket;
    }
    updateById(id,body){
        console.log('db id' + id)
        const ticket = this.findById(id)
        console.log(ticket);
        ticket.username = body.username ?? ticket.username
        ticket.updatedAt = new Date();
        return ticket
    }
    deleteById(id){
        console.log('i will this ' + id);
        const index = this.tickets.findIndex((ticket)=> ticket.id === id);
        if(index !== -1){
            this.tickets.splice(index,1);
            return true;
        }
        else{
            return false;
        }
    }
    draw(winnerCount){
        const winnerArray = new Array(winnerCount);
        // console.log('winner array above is', winnerArray)
        let winnerIndex = Math.floor(Math.random()*this.tickets.length);

        for(let i=0;i<winnerCount; i++){
            
            
        
            while(winnerArray.includes(winnerIndex)){
                winnerIndex = Math.floor(Math.random()*this.tickets.length);
                // console.log('index in loop ' + winnerIndex);
                
            }
            // console.log('index is ' + winnerIndex);
                winnerArray[i] = winnerIndex;
            
        }
        // console.log(winnerArray);
        const winners = winnerArray.map((winner)=>this.tickets[winner]);

        

        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;
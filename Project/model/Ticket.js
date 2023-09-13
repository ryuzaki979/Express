const shortId = require('shortid');

class Ticket {
/**
 * 
 * @param {String} username 
 */

    constructor(username){
        this.id = shortId.generate();
        this.username = username;
        this.price = 100;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}


module.exports = Ticket;
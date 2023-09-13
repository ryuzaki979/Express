const myDB = require('../database/db');
myDB.create('samir');
myDB.bulkCreate('emina', 2);
myDB.create('ryuzaki');
myDB.create('Naz')
myDB.create('Hasan')
// myDB.bulkCreate('Samir',94)
// const ticket = myDB.find();
// console.log(ticket);

const winners = myDB.draw(6)
console.log(winners);
const findUser = myDB.findByUsername('Naz')
console.log(findUser);
# Project: we need to build a lottery system. where we can issue tickets and find a limited winners from the issued tickets.

## App Features :
 1. sell ticket
 2.update ticket
 3. delete ticket
 4.get all tickets
 5. get ticket by id
 6.bulk sell
 7. raffle draw

## Database Model
1.Ticket

## Model Shape (Ticket)
1.Unique Number
2. User Name
3.Timestamp

## Routes  (you have to write the main path in the last or it will show no matter what routes you go)
* find single ticket - /tickets/t/:ticketId GET
* update ticket by id - /tickets/t/:ticketId PATCH
* delete ticket by id - /tickets/t/:ticketId DELETE
* find tickets for a given user - /tickets/u/:username GET
* create tickets - /tickets/sell 
* create bulk tickets - /tickets/bulk
* winners - /tickets/winner
* find all tickets - /tickets
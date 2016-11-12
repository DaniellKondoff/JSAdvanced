/**
 * Created by Kondoff on 02-Nov-16.
 */
function tickets(ticketDescription,criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }

        static sorting(ticket,criteria){
            if(criteria=='destination'){
                return ticket.sort((t1,t2)=>t1.destination.localeCompare(t2.destination))
            }
            else if(criteria=='price'){
                return ticket.sort((t1,t2)=>t1.price - t2.price)
            }
            else if(criteria=='status'){
                return ticket.sort((t1,t2)=>t1.status.localeCompare(t2.status))
            }
        }
    }

    return Ticket.sorting(ticketDescription
        .map(ticketDescription=>{ticketDescription=ticketDescription.split('|');
            return new Ticket(ticketDescription[0],Number(ticketDescription[1]),ticketDescription[2])
        }),
        criteria
    );
}

console.log (tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));


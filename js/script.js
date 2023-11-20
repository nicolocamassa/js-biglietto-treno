/* Input per conoscere il tipo di viaggio ed il viaggiatore */
let distanceKm = prompt('Quanti chilometri vuoi percorrere? ');
let age = prompt('Quanti anni hai?');

/* Calcolo del prezzo del biglietto */
const priceKm = 0.21;
ticketPrice = distanceKm * priceKm;

/* Gestione degli sconti */
let discountUnder = 20;
let discountOver = 40;

/* Controllo dell'età del passeggero */
if(age < 18){
    ticketPrice -= ticketPrice * discountUnder / 100;
    console.log(ticketPrice);
}else if(age > 65){
    ticketPrice -= ticketPrice * discountOver / 100;
    console.log(ticketPrice);
}else{
    console.log(ticketPrice);
}

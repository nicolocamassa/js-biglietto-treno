/* Input per conoscere il tipo di viaggio ed il viaggiatore */
let distanceKm = prompt('Quanti chilometri vuoi percorrere? ');
let age = prompt('Quanti anni hai?');

/* Calcolo del prezzo del biglietto */
const priceKm = 0.21;
ticketPrice = distanceKm * priceKm;
let discount;

/* Controllo dell'età del passeggero */
if(age < 18){
    discount = 20;

    /* Gestione del prezzo under 18 */
    ticketPrice -= ticketPrice * discount / 100;
    console.log(ticketPrice.toFixed(2));
}else if(age > 65){
    discount = 40;

    /* Gestione del prezzo over 65 */
    ticketPrice -= ticketPrice * discount / 100;
    console.log(ticketPrice.toFixed(2));
}else{
    discount = 0;
    
    console.log(ticketPrice.toFixed(2));
}

let idCode = Math.floor(Math.random() * 90999) + 1000;

/* Inserimento dati nella pagina HTML */
document.getElementById('km').innerHTML = distanceKm + 'Km';
document.getElementById('age').innerHTML = age + ' anni';
document.getElementById('discount').innerHTML = discount + '%';
document.getElementById('price').innerHTML = ticketPrice.toFixed(2) + '€';
document.getElementById('code').innerHTML = idCode;

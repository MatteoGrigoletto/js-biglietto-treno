const priceForKm = 0.21;

//numero chilometri da percorrere
let distance = Number(prompt(`inserisci il numero di km che vuoi percorrere`));

//eta' passeggero
let age = Number(prompt(`inserisci quanti anni hai`));

//applico sconto 20% giovani e 40% anziani
let priceTicket;
if(age < 18){
    alert(`E' previsto uno sconto del 20%`);
    priceTicket = `Il costo del ticket e': ` + Math.round(((distance * priceForKm) * 0.8) * 100) / 100 + `€`;
}
else if(age >= 65){
    alert(`E' previsto uno sconto del 40%`);
    priceTicket = `Il costo del ticket e': ` + Math.round(((distance * priceForKm) * 0.6) * 100) / 100 + `€`;
}
else{
    alert(`Non e' previsto sconto`);
    priceTicket = `Il costo del ticket e': ` + Math.round((distance * priceForKm) * 100) / 100 + `€`;
}

//stampo su schermo il prezzo con massimo due decimali
document.getElementById('price_ticket').innerHTML = priceTicket;
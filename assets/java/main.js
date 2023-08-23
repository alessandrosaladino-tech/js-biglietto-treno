/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
*/

/*
Strumenti

-prompt
-const-let
-if/else
-console.log

*/

//Chiedi età utente

const etaUtente = Number(prompt ("Qual'è la tua età?"));

//Chiedi quanti km deve percorrere l'utente

const km = Number(prompt("Quanti Km devi percorrere?"));
console.log(etaUtente, km);

//Assegna il vaolre dei km e gli sconti

const costoKm = km * 0.21;
let scontoVenti = costoKm*20/100;
let scontoQuaranta = costoKm*40/100;
let scontatoVenti = costoKm-scontoVenti;
let scontatoQuaranta = costoKm-scontoQuaranta;


//Applica sconto per minorenni e maggiorenni

if (etaUtente >= 18 && etaUtente <= 65)  {
    console.log(costoKm);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Il prezzo del biglietto è " + costoKm
} else if (etaUtente < 18) {
    console.log(scontatoVenti);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Il prezzo del biglietto è " + scontatoVenti
} else if (etaUtente > 65) {
    console.log(scontatoQuaranta);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Il prezzo del biglietto è " + scontatoQuaranta
}

//Calcola il prezzo del biglietto e stampalo in forma umana (Massimo 2 decimali)

const resultElement = document.getElementById("result");

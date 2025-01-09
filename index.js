/**
 * 1-preparazione variabili del caso con elenco dei vari dati
 * 2-elenco dei vai if e regole con sconto minorenni del 20% e sconto del 40% per gli over 65
 * 3-test
 * 4-output dalla console
 * 
 */



function calcolaPrezzoTotale(km, eta) {
    const prezzoPerKm = 0.21; // Prezzo Per kilometro
    let prezzoTotale = prezzoPerKm * km; // calcolo prezzo base
    let sconto = 0;  // Variabile per lo sconto

    // Applicazione degli sconti
    if (eta < 18) {
        // Sconto del 20% per minorenni
        sconto = prezzoTotale * 0.20;
    }
    else if (eta > 65) {
        // sconto del 40% per over 65
        sconto = prezzoTotale * 0.40;
    }
    let prezzoFinale = prezzoTotale - sconto


    console.log("Il prezzo totale del viaggio è: €" + prezzoFinale.toFixed(2));
}
// Chiedere all'utente i dati
let km = parseInt(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
let eta = parseInt(prompt("Inserisci la tua età:"));
// Chiamare la funzione per calcolare e mostrare il prezzo finale
calcolaPrezzoTotale(km, eta);


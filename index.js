/**
 * 1-preparazione variabili del caso con elenco dei vari dati
 * 2-elenco dei vai if e regole con sconto minorenni del 20% e sconto del 40% per gli over 65
 * 3-test
 * 4-output dalla console
 * 
 */



function calcolaPrezzoTotale(km, eta) {

    // Applicazione degli sconti
    if (Età < 18) {
        // Sconto del 20% per minorenni
        prezzoFinale -= prezzoFinale * 0.20;
    }
    else if (Età > 65) {
        // sconto del 40% per over 65
        prezzoFinale -= prezzoFinale * 0.40;
    }


    console.log("Il prezzo totale del viaggio è: €" + prezzoFinale.toFixed(2));
}


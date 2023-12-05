/*

    Consegna:

    1) Scrivi un programma che stampi in console i numeri da 1 a 100,

    2) ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".

    3) Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per un altro?
    Abbiamo visto qualcosa di particolare che possiamo usare?

    Consigli del giorno:
    1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/
//--------------------------------------------//

// Programma che stampa in console da 1 a 10 

for (let index = 0; index < 100; index++) {
    let number = index + 1;

    // Devo scrivere come PRIMA CONDIZIONE se è vera per entrambe...
    if ((number % 3 == 0) && (number % 5 == 0)) {
        number = 'FizzBuzz';
        console.log(number);
    }

    // ... poi la verifico se è vera solo per una...
    else if (number % 5 == 0) {
        number = 'Buzz';
        console.log(number);
    }

    // ... o per l'altra
    else if (number % 3 == 0) {
        number = 'Fizz';
        console.log(number);
    }

    // ALTRIMENTI stampo tutto i numeri 'liberi'...
    else console.log(number);
}


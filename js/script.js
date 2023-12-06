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


    BONUS 1:
    Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.


*/
//--------------------------------------------//

// Programma che stampa in console da 1 a 100 

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
    else {
        console.log(number);
    }


    // PROVARE A FARE IL BONUS 1 - FATTO

    // Devo selezionare il mio container DOM
    const myContainer = document.querySelector('.my-container');

    // Devo creare il mio elemento nel DOM
    const my_div = document.createElement('div');

    // Adesso devo usare append per metterlo dentro il mio container DOM
    myContainer.append(my_div);

    // Adesso devo mettere la variabile number nel mio container
    my_div.append(number);



    /*
    
        PROVIAMO A FARE IL BONUS 2...

        BONUS 2:
        Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
        Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

        - Dobbiamo assegnare dello stile diverso sia per i numeri, Fizz, Buzz e FizzBuzz

    */

}


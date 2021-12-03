
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare in pagina 5 numeri casuali. 

let randomNumbersContainer = document.querySelector('.numbers-container');
let randNumbers = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};



for (let index = 0; index < 5; index++) {

    let generatedNumber = getRandomIntInclusive(1, 5);
    console.log('pippo', generatedNumber);
    
    while (randNumbers.includes(generatedNumber)) {
        generatedNumber = getRandomIntInclusive(1, 5);
    };
        
    randNumbers.push(generatedNumber);
}
console.log(randNumbers);

randomNumbersContainer.append(randNumbers);

// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

let timer = setTimeout(function(){
    randomNumbersContainer.innerHTML = '';
}, 2000);




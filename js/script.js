// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
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
        generatedNumber = getRandomIntInclusive(1, 20);
    };
        
    randNumbers.push(generatedNumber);
}
console.log(randNumbers);

randomNumbersContainer.append(randNumbers);

// function stopTimer2 () {
//     clearTimeout(timer2)
// }

// Da lì parte un timer di 30 secondi
let timer1 = setTimeout(function(){
    randomNumbersContainer.innerHTML = '';
}, 2000);


// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()

    let timer2 = setTimeout(function(){

        let userNumbers = [];
        for (let index = 0; index < 5; index++) {
            userNumbers.push(parseInt(prompt('inserisci numero')))
            console.log('userNumbers', userNumbers);
        }
    }, 2200);

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





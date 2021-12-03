// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
let randomNumbersContainer = document.querySelector('.numbers-container');
let randNumbers = [];
let userNumbers = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};



for (let index = 0; index < 5; index++) {

    let generatedNumber = getRandomIntInclusive(1, 20);
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
// let timer1 = setTimeout(function(){
//     randomNumbersContainer.innerHTML = '';
// }, 2000);


// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()

let timer1 = setTimeout(function(){

    randomNumbersContainer.innerHTML = '';

    let timer2 = setTimeout(function(){

        userNumbers = [];

        for (let index = 0; index < 5; index++) {
            let userChoice = parseInt(prompt('inserisci numero tra 1 e 20'));
            
            while (userNumbers.includes(userChoice) || userChoice > 20){
                userChoice = parseInt(prompt("Numero già inserito, fai un'altra scelta"));
            }
            userNumbers.push(userChoice);
            console.log('userNumbers', userNumbers);
    
        }

        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        const intersection = randNumbers.filter(element => userNumbers.includes(element));

        if (intersection.length == 0){
            randomNumbersContainer.innerHTML = `<h1>Ne hai ricordati ${intersection.length}`
        } else if (intersection.length == 1){
            randomNumbersContainer.innerHTML = `<h1>Ne hai ricordato solo ${intersection.length}`
        } else {
            randomNumbersContainer.innerHTML = `<h1>Ne hai ricordati ${intersection.length} e sono ${intersection}</h1>`
        }

        console.log(intersection);
        
    }, 100);
}, 2000);






const fullName = require(`./modules/name`); //importo la funzione da name.js
const hobbies = require(`./modules/hobbies`); //importo la funzione da hobbies.js

function myFunction() { // Uso le funzioni per ottenere il nome completo e gli hobby
    const myName = fullName('Luca', 'Conigliaro');
    const myHobbies = hobbies('Cinema', 'Videogames', 'Gym');

    // Creo e restituisco l'oggetto finale
    return {
        fullName: `${myName.firstName} ${myName.lastName}`,
        hobbies: myHobbies.hobbies
    };
}

// Mostro il profilo completo
const profile = myFunction();
console.log(profile);
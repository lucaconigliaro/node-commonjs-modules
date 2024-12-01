const fullName = require(`./modules/name`); //importo la funzione da name.js
const hobbies = require(`./modules/hobbies`); //importo la funzione da hobbies.js


// function myFunction() { //Uso le funzioni per ottenere il nome completo e gli hobby
//     const myName = fullName('Luca', 'Conigliaro');
//     const myHobbies = hobbies('Cinema', 'Videogames', 'Gym');

//     // Creo e restituisco l'oggetto finale
//     return {
//         fullName: `${myName.firstName} ${myName.lastName}`,
//         hobbies: myHobbies.hobbies
//     };
// }

// //Mostro il profilo completo
// const profile = myFunction();
// console.log(profile);


//Primo metodo utilizzato corretto
function myFunction() {
    const myName = fullName(); //Ottengo l'oggetto del nome completo
    const myHobbies = hobbies(); //Ottengo l'oggetto degli hobby
    const myPerson = {}; //Creo l'oggetto finale

    myPerson.fullName = `${myName.firstName} ${myName.lastName}`; //Assegno il nome completo
    myPerson.hobbies = myHobbies.hobbies; //Assegno gli hobby

    return myPerson; //Restituisco l'oggetto
}

console.log(myFunction()); //Mostro l'oggetto completo
const fullName = require(`./modules/name`); //importo la funzione da name.js
const hobbies = require(`./modules/hobbies`); //importo la funzione da hobbies.js

function myFunction() {
    const myName = fullName;
    const myHobbies = hobbies;
    const myPerson = {};
    
    myPerson.fullName = myName;
    myPerson.hobbies = myHobbies;

    return myPerson;
}
console.log(myFunction());
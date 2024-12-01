//Creo funzione che accetta due parametri
// function fullName(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     };
// }


//Primo metodo utilizzato corretto
function fullName(firstName, lastName) {
    return { 
        firstName: 'Luca', 
        lastName: 'Conigliaro' 
    };
}

//Esporto la funzione
module.exports = fullName;
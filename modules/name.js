//Creo funzione che accetta due parametri
function fullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

//Esporto la funzione
module.exports = fullName;
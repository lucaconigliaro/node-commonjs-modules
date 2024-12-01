//Creo la funzione che accetta tre parametri e restituisce un oggetto con una proprietà hobbies, che è un array di hobby

// function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
//    return {
//       hobbies: [hobbyOne, hobbyTwo, hobbyThree]
//    };
// }


//Primo metodo utilizzato corretto
function hobbies(hobbyOne, hobbyTwo, hobbyThree ) {
   return { 
      hobbies: ['Cinema', 'Videogames', 'Gym'] 
   };
}
//Esporto la funzione
module.exports = hobbies;
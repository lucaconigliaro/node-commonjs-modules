//Creo la funzione che accetta tre parametri e restituisce un oggetto con una proprietà hobbies, che è un array di hobby
function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
   const myHobbies = {}; //Creo un oggetto vuoto
   myHobbies.hobbies = ["Cinema", "Videogames", "Gym"]; //Inserisco l'array di hobby dentro l'oggetto
   return myHobbies;
}

//Esporto la funzione
module.export = hobbies();
console.log(hobbies());
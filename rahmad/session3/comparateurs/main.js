/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 30;


// 2. Créer une variable myAge qui contient votre âge

var myAge = 20;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

var isMyNeighbourYoungerThanMe = neighbourAge > myAge
console.log(isMyNeighbourYoungerThanMe);



// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.


function showGreaterNumber (number1, number2){
    console.log(Math.max(number1, number2));
}

// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(3,Math.PI);


// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(n){
    return 1000 < n && n < 3000;
}


// 2. L'exécuter avec le paramètre de votre choix.
console.log((1500, isBetween1000And3000(1500));
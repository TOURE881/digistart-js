/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin
var neighbourAge =25;



// 2. Créer une variable myAge qui contient votre âge
var myAge =37



// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".
console.log(neighbourAge<myAge,neighbourAge===myAge,neighbourAge>myAge);




// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.
function showGreaterNumber(number1,number2){
    console.log(Math.max(number1,number2));
}





// 2. L'exécuter avec les paramètres de votre choix.


showGreaterNumber(1,2);;

// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(a){
    return 1000 < a && a < 3000;
}


// 2. L'exécuter avec le paramètre de votre choix.
console.log(1500,isBetween1000And3000(1500));
console.log(3500,isBetween1000And3000(3500));
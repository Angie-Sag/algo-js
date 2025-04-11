function addition(number1, number2) {
    let somme = number1 + number2
    return somme
}

function soustraction(number1, number2) {
    let somme = number1 - number2
    return somme
}

function multiplication(number1, number2) {
    let somme = number1 * number2
    return somme
}

function division(number1, number2) {
    let somme = number1 / number2
    return somme
}



let choose = parseInt(prompt("Quelle opération voulez-vous choisir ? " + " 1-addition " + " 2-soustraction " + " 3-multiplication " + " 4-division " + " 5-quitter " + "Entrez un chiffre entre 1 et 5"))

switch (choose) {
    case 1:
        console.log("addition");
        break;
    case 2:
        console.log("soustraction");
    case 3:
        console.log("multiplication");
        break;
    case 4:
        console.log("division");
        break;
    case 5:
        console.log("quitter");
        break;
    }

let number1 = parseFloat(prompt("Entrez le premier nombre :"))
let number2 = parseFloat(prompt("Entrez le second nombre :"))

console.log(number1);
console.log(number2);

resultat=addition(number1, number2)
console.log(resultat);

resultat=soustraction(number1, number2)
console.log(resultat);

resultat=multiplication(number1, number2)
console.log(resultat);


resultat=division(number1, number2)
console.log(resultat);






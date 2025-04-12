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

let continuer = true
while (continuer){

let choose = parseInt(prompt("Quelle opération voulez-vous choisir ? "+ " (Entrez un chiffre entre 1 et 5) " + " 1-addition " + " 2-soustraction " + " 3-multiplication " + " 4-division " + " 5-quitter " ))

switch (choose) {
    case 1:
        console.log("addition");
        break;
    case 2:
        console.log("soustraction");
        break;
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


if(choose ==1){
     resultat1 = addition(number1, number2)
     console.log(resultat1);
}else if(choose ==2){
    resultat2 =soustraction(number1, number2)
    console.log(resultat2);
}else if(choose ==3){
    resultat3=multiplication(number1, number2)
    console.log(resultat3);
}else if(choose ==4){
    resultat4=division(number1, number2)
    console.log(resultat4);

}



}
    



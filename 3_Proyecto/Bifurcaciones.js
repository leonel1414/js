//Bifurcaciones if ... else
let saldo = 50;
let efectivo = 100;

if(efectivo < saldo){
    console.log("Puede sacar Dinero");
}else{
    console.log("Saldo insuficiente");
}


//if - else  if else
let nota = 10;

if(nota === 10){
    console.log("Enhorabuena, has obtenido un sobresaliente ")
}else if (nota ===7){
    console.log("Buen trabajo, pero podrias haberlo echo mejor");
}else if(nota ===1){
    console.log("No estudiaste");
}else{
    console.log("Error");
}


//Sentencia switch

switch(nota){
    case 10:
        console.log("Buen trabajo, ¡Sobresaliente!");
        break
    case 7:
        console.log("Buen trabajo, pero podrias haberlo echo mejor");
        break
    case 1:
        console.log("No estudiaste");
        break
    default:
        console.log("Error");
        break
}

//COMPARACIONES

// == solo compara el valor
// === compara el valor y el tipo

// != diferentes en valor
// !== diferentes en valor y tipo



/*
let a = 5;
let b = "5";

consolo.log(typeof a);
consolo.log(typeof b);


if(a == b){
    consolo.log("a es igual a b - Debil");
}

if(a === b){
    consolo.log("a es igual a b - Fuerte");
}
*/

//Casos muy especificos - break , continue

let lista = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i< lista.length; i++){

    if(lista[i] === 3){
        continue;
    }
    if(lista[i] > 5){
        console.log(lista[i]);
        break;
    }
}

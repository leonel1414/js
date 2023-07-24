//Bifurcaciones if ... else
let saldo = 50;
let efectivo = 100;

if(efectivo < saldo){
    console.log("Puede sacar Dinero");
}else{
    console.log("Saldo insuficiente");
}

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
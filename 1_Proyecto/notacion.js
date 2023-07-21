//Notacion
//; --> Delimitar el final de una linea

const b = 4;
b + 4;

//. -> Se utiliza en los objetos para acceder a los atributos
// movil.anchura


//[] --> listas, arreglos o arrays
const ar = [1,2,3,4]
console.log(ar[1])

// () --> Funciones
function suma(a,b){
    //se escribe la funcion
}

// {} --> Llaves para objetos, funciones y estructuras de  control

const movil = {
    anchura: 5,
    altura : 10
};


//Listas , array o arreglo
const lista = [1,"hola", null];
const lista2 = new Array(1,"hola", null);
const lista3 = new Array(3);

console.log(lista);
console.log(lista2);
console.log(lista3);

//Objetos
const movil1 = {
    altura: 10,
    anchura:6 ,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin"],
    tarjeta:{
        marca: "Sandisk",
        alamenamiento: 32
    }
};


console.log(movil1.tarjeta.marca);
console.log(movil1.altura);




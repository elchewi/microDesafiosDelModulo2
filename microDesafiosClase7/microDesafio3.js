// micro desafio 3
// punto 1
function mostrarNumeros(numero) {
    for(let i = 0; i <= numero; i++){
        console.log(i)
    }
}
const valor = 10;
mostrarNumeros(valor);
// punto 2 imrpimir de 3 en 3 
for (let i = 0; i <= 57; i += 3){
    console.log(i);
}
/* // lo hice mal, cuando este mas tranquilo rehacer */
/* // punto 4 pasar string a mayuscula */
let cadena = 'practicando el uso de los ciclos o bucles'
function convertirAMayusculas (texto){
    return texto.toUpperCase();
}
console.log(convertirAMayusculas(cadena));


let numeros = [57, 10, 23, 12, 8, 3, 5, 7, 40]; 
let numeroPares = []; 
let numeroImpares = [] 
function valoresPares (cadenaNumeros){
    for (let i = 0; i < cadenaNumeros.length; i++){
        if(cadenaNumeros[i] % 2 === 0){
            numeroPares.push(cadenaNumeros[i]);
        }else {
            numeroImpares.push(cadenaNumeros[i]);
        }
    }
    return {
        pares: numeroPares,
        impares: numeroImpares,
    }
}
console.log(valoresPares(numeros));
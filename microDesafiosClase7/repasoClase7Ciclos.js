/* ---------- Ciclos for ---------- */

/* Herramienta que permite iterar. Por lo general para leer un array */
/* Es una repetición de algo que hace una cantidad de veces */
/* Un bloque de código que se repite hasta que la condición que le pasamos de false */
/* Nos permite ahorrar la repeticion de llamar a una funcion varias veces */
/* Segmento de código que permite reutilizar el código sin escribirlo completo. No puede ser infinito */



let estudiantes = ["Patricia", "Mateo", "Pablo", "Matias", "Juan"];
/*                     0           1        2        3        4       5    */
/*    Inicio         condición                modificador */
/* for (let i = 0; i < estudiantes[4]; i++) {
    console.log("valor de i: " + i);
    console.log(estudiantes[i]);
} */


/* for (let i = 1; i <= 10; i++) {
    console.log(2*i)
} */

/* ---------- Acumulador ---------- */

let notas = [3, 2, 8, 9, 9, 10, 4, 7, 4];

/* que ese if le sume uno a un contador */

/* let cantidadAprobados = 0;

for (let i = 0; i < notas.length; i++) {

    //if indice del array es menor a 6
    let notaActual = notas[i];
    if (notaActual >= 7) {
        cantidadAprobados++;
    }
}

console.log(cantidadAprobados) */

/* Alternativa con función */
// Declaracion de la funcion
/* function chequearAlumnoAprobado (nota) {
    if (nota >= 7) {
        cantidadAprobados++
    }
}

let cantidadAprobados = 0;

for (let i = 0; i < notas.length; i++) {
    //if indice del array es menor a 6
    chequearAlumnoAprobado(notas[i]);
}

console.log(cantidadAprobados) */

/* ---------- Ciclos while ---------- */

let i = 1;
while (i <= 10) {
    console.log(2*i);
    i++;
}

// ------------

for (let i = 1; i <= 10; i++) {
    console.log(2*i)
}

/* do {
    
} while (i <= 10); */
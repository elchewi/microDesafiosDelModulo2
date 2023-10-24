// Micro desafio 2, sueldo

 let   nombre = 'Tomas';
 let   apellido = 'Montana';
 let   sueldoActual = 25000;
 let   aumento = 15;
 let    calculoAumento = ((sueldoActual * aumento)/100);
 let   nuevoSueldo = calculoAumento;
 

console.log('estimado ' + nombre + ',' + ' su sueldo actual es de ' + '$' + sueldoActual + ',' + '\n' + 
'le corresponde un ' + '%' + aumento + ',' + '\n' +
'su nuevo sueldo es de: ' + '$' + (nuevoSueldo + sueldoActual));
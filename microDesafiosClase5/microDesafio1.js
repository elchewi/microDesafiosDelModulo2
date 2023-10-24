//  no es parte de un ejercicio pero aparece antes de hacerlo 

function area(largo, ancho) {
    return largo * ancho
}
console.log(area(5,6));

// ahora si empecemos con el micro desafio

/* let res2 = ' días utilizados, el monto total a pagar es de $'; */
/* // let compacto = d => res1 + d + res2 + 14000 * d; */
/* let compacto = (d , b ) => b == true ? res1 + d + res2 + 14000 * d + 1200 : res1 + d + res2 + 14000 * d; */
/* let mediano = d => res1 + d + res2 + 17000 * d; */
/* let camioneta = d => res1 + d + res2 + 28000 * d; */
/* let sillaBebe = 1200; */
/*  */
/* // let alquiler = (a, b, tipoAlquiler) => tipoAlquiler(a); */
/* let alquiler = (d, b, tipoAlquiler) => tipoAlquiler(d); */
/* // { */
/* //   if(b == true) { */
/* //     tipoAlquiler(a + sillaBebe); */
/* //   }else{ */
/* //     tipoAlquiler(a); */
/* //   } */
/* // } */
/* console.log(alquiler(3, 1,compacto)); */
//--------------------------------------------------------Tratando de hacer el ejercicio con arrow function

/* let res1 = 'Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los '; */
/* let res2 = ' días utilizados, el monto total a pagar es de $'; */
/* let res3 = ' por adquirir la silla para bebe.'; */
/* let sillaBebe = 1200; */
/* let compacto = (diaAlquiler, tipoVehiculo) => tipoVehiculo == true ? res1 + diaAlquiler + res2 + ((14000 * diaAlquiler) + sillaBebe) + res3 : res1 + diaAlquiler + res2 + (14000 * diaAlquiler); */
/* let mediano = (diaAlquiler, tipoVehiculo)  => tipoVehiculo == true ? res1 + diaAlquiler + res2 + ((17000 * diaAlquiler) + sillaBebe) + res3 : res1 + diaAlquiler + res2 + (17000 * diaAlquiler); */
/* let camioneta = (diaAlquiler, tipoVehiculo)  => tipoVehiculo == true ? res1 + diaAlquiler + res2 + ((28000 * diaAlquiler) + sillaBebe) + res3 : res1 + diaAlquiler + res2 + (28000 * diaAlquiler); */
/* let alquiler = (diaAlquiler, tipoVehiculo, tipoAlquiler) => tipoAlquiler(diaAlquiler, tipoVehiculo); */
/* console.log(alquiler(7, 1,camioneta)); */
// ------------------------------------------------------------------------------------Otra manera distinta de hacerlo

/* const RATE = {'Compacto' : 14000, 'Mediano' : 17000, 'Camioneta' : 28000}; */
/* let tipoVehiculo = 'Camioneta'; */
/* let diasAlquiler = 7; */
/* let sillaBebe = true; */
/* let sillaRATE = sillaBebe ? 1200 : 0; */
/*  */
/* function alquilerAutos (tipoVehiculo, diasAlquiler,sillaRATE){ */
/*     return RATE[tipoVehiculo] * diasAlquiler + sillaRATE * diasAlquiler */
/* } */
/*   console.log("estimado cliente en base al tipo de vehiculo " + tipoVehiculo + " alquilado,  considerando los " +  diasAlquiler + */ /* " dias utilizados, el monto total a pagar es de " + "$" +   alquilerAutos(tipoVehiculo,diasAlquiler,  sillaRATE));   */
/*  */
  //-------------------------------------------------------------------------------------------otra manera de hacerlo

/* function alquiler(tipoVehiculo, diasAlquiler, sillaBebeRATE) { */
/* let autoCompacto = 14000 */
/* let autoMediano = 17000 */
/* let autoCamioneta = 28000 */
/* let diasAlquiler = 7 */
/* let sillaBebe = 0 */
/* 
/* switch (tipoVehiculo){ */
/*     case 'Compacto': */
/*         console.log(autoCompacto * diasAlquiler); */
/*         break; */
/*         case 'Mediano': */
/*         console.log(autoMediano * diasAlquiler); */
/*         break */
/*             case 'Camioneta': */
/*             console.log(autoCamioneta * diasAlquiler);  */
/*                 break */
/*                 default: */
/*                     console.log('Invalido'); */
/* } */
/* } */
/* if (sillaBebe){ */
/*     sillaBebe = true; */
/*     sillaBebeRATE = sillaBebe?1200:0 */
/*  */
/* }return tipoVehiculo * diasAlquiler + sillaBebe * diasAlquiler */
/*  */
/* console.log(alquiler('Mediano', 7, true)); */
//------------------------------------------------------------------otra manera de hacerlo
/*  */
const RATE = {'Compacto': 14000, 'Mediano': 17000, 'Camioneta': 28000};
let tipoVehiculo = 'Compacto';
let diasAlquiler = 2
let sillaBebe = true
let sillaBebeRATE = sillaBebe?1200:0

function alquilerAutos(tipoVehiculo, diasAlquiler, sillaBebeRATE) {
    return RATE[tipoVehiculo] * diasAlquiler + sillaBebeRATE * diasAlquiler;

    
}
console.log(alquilerAutos(tipoVehiculo, diasAlquiler, sillaBebeRATE));
console.log('Estimado cliente: en base al tipo de vehiculo ' + tipoVehiculo + ' alquilado,  consideramos los ' + diasAlquiler + ' utilizados, el monto total a pagar es de $' + alquilerAutos (tipoVehiculo, diasAlquiler, sillaBebeRATE));
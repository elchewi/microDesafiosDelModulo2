let pagoMes = 15000;
let consumoKWH = 460; 
let aumento = 20;
let aumentaUsoKHW = 300;
let calculo = (((pagoMes * 20)/100) + pagoMes);
let nuevoCostoAPagar = consumoKWH > aumentaUsoKHW ? 'Debido a que su hogar tuvo un consumo de ' + consumoKWH + 
 ', en base al ajuste tarifario, cumplimos con informarle que se a ajustado el total a pagar, su nuevo monto es de ' +
  '$' + calculo : 'Le informamos, que no abra aumento de tarifa';

console.log(nuevoCostoAPagar);
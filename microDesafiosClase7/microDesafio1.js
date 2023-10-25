let ingresosEgresos = [1000, 4200, -2100, -500, 700];

function cuentaBancaria(operacionesBancarias) {
    let contadorIngresos = 0;
    let contadorEgresos = 0;

    for (let i = 0; i < operacionesBancarias.length; i++) {
        if (operacionesBancarias[i] >= 0) {
            contadorIngresos += operacionesBancarias[i]; // el += significa que contador ingresos va a valer lo mismo que operaciones bancaria mas 
        } else {                                         //todo lo que se le sume del array
            contadorEgresos += operacionesBancarias[i];
        }
    }
    return {ingresos: contadorIngresos, egresos: contadorEgresos};
}
//console.log(cuentaBancaria(ingresosEgresos));
function totalCuentaBancaria(nombre, apellido, operacionesBancarias) {
    const resultados = cuentaBancaria(operacionesBancarias);
    const { ingresos, egresos } = resultados;

    return `Estimado ${nombre} ${apellido}:
    El monto total de sus retiros es de: $${egresos}
    El monto total de sus ingresos es de: $${ingresos}
    Por lo tanto, su saldo actual en la cuenta es de: $${ingresos + egresos}`;
}

console.log(totalCuentaBancaria('Tomas', 'Montana', ingresosEgresos));     
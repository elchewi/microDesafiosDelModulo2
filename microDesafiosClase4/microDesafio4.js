
    let calculadora = 'Multiplicacion';
    let num1 = 2;                                                                                         // rearmar calculadora en los console log
    let num2 = 2;
    switch(calculadora){
        case 'Suma':
            console.log('El resultado de sumar 2 + 2 es igual a ' + (num1 + num2));
            break
            case 'Resta':
                console.log('El resultado de 2 - 2 es igual a ' + (num1 - num2));
                break
                case 'Multiplicacion':
                    console.log('El resultado de Multiplicar 2 x 2 es igual a ' + (num1 * num2 ));
                    break
                    case 'Divicion':
                        console.log('El resultado de dividir 2 % 2 es igual a ' + (num1 / num2 ));
                        break
    }  
/*
    let calculadora = 'x';
let num1 = 8;
let num2 = 12;
let total = 0
switch(calculadora){
    case '+':
        total = num1 + num2
        break;
        case '-':
            total = num1 - num2
            break;
            case '*':
                total = num1 * num2
                break;
                case '/':
                    total = num1 / num2
                    break;
}if ('/') {
    total = num1 / num2 
    console.log('Resultado da infinito');
}else {
    total = num1 / num2
}
                
                default:
                    console.log('error');  
    */

function sumar (numero1, numero2){
    return numero1 + numero2;
}
console.log(sumar(5,10));

function triple(numero3, numero4){
    let resultadoSuma = sumar (2, 4);
    return resultadoSuma * 3
}
 console.log(triple(resultadoSuma));

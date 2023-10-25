let html = '30 45 25 34 18 23 16 50 72 70';
let css3 = '50 45 71 34 23 45 65 75 63 43 74 70';
let javascript = '70 65 58 45 23 57 34 17 72';
let nodeJs = '45 56 73 34 65 72 70 32';

let promediosHtml = html.split(' ');
let promediosCss3 = css3.split(' ')
let promediosJavascript = javascript.split(' ');
let promediosNodeJs = nodeJs.split(' ');

function calcularPromedios(clase1,clase2,clase3,clase4,numeroDeClase) {
    let promedio = 0;
    let cantidadAprobados = 0;
    switch(numeroDeClase){
        case 1:{
            for (let i = 0; i <= clase1.length; i++) {
                if(clase1[i]>= 40){
                    promedio += parseInt(clase1[i]);
                    cantidadAprobados++;
                }
            }
           promedio = promedio/cantidadAprobados;
           return promedio;
        }
        case 2:{
            for (let i = 0; i < clase2.length; i++) {
                if(clase2[i]>= 40){
                    promedio += parseInt(clase2[i]);
                    cantidadAprobados++;
                }
            }
           promedio = promedio/cantidadAprobados;
           return promedio;
        }
        case 3:{
            for (let i = 0; i < clase3.length; i++) {
                if(clase3[i]>= 40){
                    promedio += parseInt(clase3[i]);
                    cantidadAprobados++;
                }
            }
           promedio = promedio/contador;
           return promedio;
        }
        case 4:{
            for (let i = 0; i < clase4.length; i++) {
                if(clase4[i]>= 40){
                    promedio += parseInt(clase4[i]);
                    cantidadAprobados++;
                }
            }
           promedio = promedio/cantidadAprobados;
           return promedio;
        }
        default:
            return `Seleccione valor 1 para ingresar en los promedios de html5
            si quiere ingresar en css3 presione 2
            si quiere ingresar en javascript presione 3
            si quiere ingresar en nodeJs presione 4`;
    }
}
console.log(calcularPromedios(promediosHtml, promediosCss3, promediosJavascript,promediosNodeJs, 4));

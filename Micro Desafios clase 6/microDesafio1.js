// este codigo lo que hace es sacar el primer elemento y almacenarlo al final del Array 

let electrodomesticos = ['Horno', 'Microondas', 'Lava platos', 'Hornalla', 'Ventilador', 'Heladera'];
let elUltimoElectro = electrodomesticos.shift();
electrodomesticos.push(elUltimoElectro);

console.log(electrodomesticos);

// este codigo lo que hace es agregar dos nuevos elementos al final de el Array

electrodomesticos.push('Tostadora');
electrodomesticos.push('Lavavajillas');

console.log(electrodomesticos);

// esto muestras la cantidad de objetos que hay dentro de el Array

console.log(electrodomesticos.length);

//  buscar un producto dentro de una Array

console.log(electrodomesticos.indexOf('Tostadora'))
    if(electrodomesticos[3] === 'Ventilador'){
        console.log('Producto encontrado');
    }else{
        console.log('Producto no enctrado');
    }
    

// une todo el Array en un string separados por espacios en blanco
let separadosPorComa = electrodomesticos.join(' ')
console.log(separadosPorComa);

//console.log(electrodomesticos.length);

// crear funcion para cambiar de nombre un producto por otro 
let reemplazo = electrodomesticos.join('-');
let nuevoProducto = 'Parrilla';

function nuevoNombreElectros(texto, cambio, producto) {
    return texto.replace(cambio, producto);

}
console.log(nuevoNombreElectros(reemplazo, 'Ventilador', nuevoProducto));
console.log(nuevoNombreElectros());
let nuevoArrayElectro = nuevoNombreElectros(reemplazo, 'Ventilador', nuevoProducto);

console.log(nuevoArrayElectro.split(' '));
// tener en cuenta los nombres de los parametros, y no repetir nombres 



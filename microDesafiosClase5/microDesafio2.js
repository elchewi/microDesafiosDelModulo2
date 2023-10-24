  // una manera de hacerlo   
 let jamon = true, queso = true, salsaTomate = true, mayonesa = true, mostaza = true, tomate = true;

 
 function hamburguesa(tipoHamburguesa){
switch (tipoHamburguesa) {
    case `Carne a la parrila`:
    return 1800;
    break;
    case `Pollo`:
    return 1500;
    break;
    case `Vegetariana`:
    return 1200;
    break;
    default:
     console.log(`Invalido`);
     break;
}  
}                       
function condimentos (jamon, queso, salsaTomate, mayonesa, mostaza, tomate){                  
    subtotal = 0;
if ( jamon == true){
        subtotal += 30;
}if(queso == true){
        subtotal += 25;
}if(salsaTomate == true){
        subtotal += 5;
}if(mayonesa == true){
        subtotal += 5; 
}if(mostaza == true){
        subtotal += 5;
}if(tomate == true){
        subtotal += 15;
}
 return subtotal 
}   
function total(nombre, apellido) {
    return `Estimado ${nombre} ${apellido} su hamburguesa final es, ${hamburguesa(`Pollo`)+ condimentos(true, true, true, true, true, true)}`;
    
}

console.log(total('Tomas','Montana'));


//-----------------------------------otra manera de hacerlo

const RATE = {'Jamon': 30, 'Queso': 25, 'Salsa Tomate': 5, 'Mayonesa': 5, 'Mostaza': 5, 'Tomate':15}
const hamburguesaRATE = {'Carne a la parrila': 1800, 'Pollo': 1500, 'Vegetariana': 1200}

let tipoCondimento = 'Jamon';
let tipoHamburguesa = 'Carne a la parrilla';
let usuario = 'Tomas Montana';
let valorTotal = 0
function hamburguesa(tipoCondimento, tipoHamburguesa) {
    return RATE ([tipoCondimento] + tipoHamburguesa + valorTotal);     
}
 console.log('Estimado ' + usuario + ', su hamburguesa final es, ' + tipoHamburguesa + ' acompañada con: ' + tipoCondimento + ', esto tendra un valor de ' + '$ ' + valorTotal); 
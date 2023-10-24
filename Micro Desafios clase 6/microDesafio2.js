let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick',  'Elvis','Thor: amor y trueno'];
let peliConMasVistas = peliculas.pop();

peliculas.unshift(peliConMasVistas.toUpperCase()); 

let proxPelisAEstrenar = ['Counter-Strike', 'NOP', 'Vertigo', 'Nick', 'Avatar'];
proxPelisAEstrenar.shift();
let juegoNoPeli = proxPelisAEstrenar.shift();
console.log(proxPelisAEstrenar);
console.log(peliculas);


function cartelera (cartelera1, cartelera2){
    return cartelera1.concat(cartelera2);
}
console.log(cartelera(peliculas, proxPelisAEstrenar));
 //peliculas.forEach((Element) => console.log(Element)); 

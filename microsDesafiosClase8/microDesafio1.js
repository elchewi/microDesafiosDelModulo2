const cursosArray = [
    ["html5", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000]
  ];

  const cursosSeleccionados = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"];
    
  function calculo(cursos, cursosElegidos) {
    let precios=0;
    for (let i = 0; i < cursosElegidos.length; i++) {
        const cursoSeleccionado = cursosElegidos[i].toLowerCase();
        for (let j = 0; j < cursos.length; j++) {
            if (cursos[j][0] == cursoSeleccionado) {
                precios += cursos[j][1];// puse 1 porque html seria el indice 0 y 4000 seria el indice 1 
                break;
            }
        }
    }
    return precios;
}
function mensaje(nombre, apellido, cursos, cursosAHacer){
    return `${nombre} ${apellido} debera pagar $${calculo(cursos,cursosAHacer)} por los cursos a realizar`
}

console.log(mensaje ('Tomas','Montana',cursosArray,cursosSeleccionados));
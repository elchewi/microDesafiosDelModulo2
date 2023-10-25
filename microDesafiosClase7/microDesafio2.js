// micro desafio 2 tabla de multiplicar

function tablasDeMultiplicar (){
    for(let i = 1; i <= 10; i++){
        console.log(`tabla del: ${i}`);
        for(let n=1;n<=10; n++){
            console.log(`${i} * ${n}= ${i*n}`); 
        }
        console.log(`----------`);
    }
}
tablasDeMultiplicar();

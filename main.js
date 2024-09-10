// Esercizio 1


function stampaNumeri(){
    let testo ='';
    for(let i = 1; i <= 100; i++){
        testo += i;
        testo += ' ';
        if(i % 10 == 0){
           testo += '\n';
        }
    }
    console.log(testo);
}

stampaNumeri();

// Esercizio 2

function sommaeMedia(num1, num2, num3, num4, num5){
   let somma =  num1 + num2 + num3 + num4 + num5;
   let media = somma  / 5;
   console.log(media);
    console.log(somma);
}

sommaeMedia(5, 8, 5, 10, 4);



// Esercizio 3

function QualeTriangolo(){
     lato1 = prompt('inserisci il primo lato');
     lato2 = prompt('inserisci il secondo lato');
     lato3 = prompt('inserisci il terzo lato');
    if(lato1 == lato2 && lato2 == lato3){
        alert('equilatero');
    }
    else if(lato1 == lato2 || lato2 == lato3 || lato1 == lato3){
        alert('è isoscele');
    }
    else if(lato1 != lato2 && lato2 != lato3 && lato1 != lato3){
        alert(' è uno scaleno');
    }
}

QualeTriangolo();

// Esercizio 4

function tabellineFactory(){
   let n = prompt('inserisci un numero');
    for(let i = 0; i <= 10; i++){
        let tabellina = n * i;
        console.log(`${n} x ${i} = ${tabellina}`);
    }
}

tabellineFactory();
////// Bucle for para saber si un numero es primo. ///// 
function esPrimo(num) {
    if(num == 0 || num == 1 || num == 4){
      return false
    }
    for(var i = 2; i < num / 2; i++){
        if(num % i == 0){
            return false;
        }
}
    return true
}
esPrimo(5)

////// do while para repetir un codigo por un maximo de 8 veces. ////
function doWhile(num) {
    var num = num;
    var x = 0;
    do {
      x = x + 1;
      num = num + 5;
    }
    while(x < 8);
    return num;
}
doWhile(5)

/////////// while ///////////////

function ej(num) {
    while (num < 10){
        console.log('Numero menor que 10')
    }
}
ej(9)

///////// for in /////////

function example() {
    const object = {
        dog: 'juaco',
        breed : 'Pug',
        age: '1 month'
    }
    for(let property in object) {
        console.log(object[property])
    };
}


////////// for of //////////

let hi = "hello";

for (let value of hi) {
  console.log(value);
}
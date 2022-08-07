// tipo de dado
// booleanos

//conversao implicita
const numero = 456;
const numeroString = "456";


console.log(numero === numeroString); //console.log(numero === numeroString); resultado = false

console.log(numero + numeroString); // //console.log(numero + numeroString); resultado = 456456 porque ele transforma os dois numeros em strings e concatena

//Number()
//String()

//conversao explicita

console.log(numero + Number(numeroString));

/*simulção de erro, 
const numero = 456;
const numeroString = "456a"; letra no aspas

console.log(numero + Number(numeroString));

resultado = NaN (not a number)
*/
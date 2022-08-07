// == (dois iguais) comparaçao implícita

const numero = 5;
const texto = "5";

console.log(numero == texto); // resultado true, conversão de String para number automaticamente

// === (três iguais) comparaçao explícita

console.log(numero === texto); // resultado false, necessita fazer a conversao manualmente

//typeof

console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor
// === compara o valor e o tipo de dado

// atualmente alguns códigos possuem "==", porém as boas práticas pedem para utilizar os "===" e realiar a conversao explicita

Number();
String();
// templateString = StringModelo

const nome = "Fidel";
const idade = 2022 - 2005;
const cidadeNascimento = "Jundiai";

/*const apresentacao = "Meu nome é " + nome + ", minha idade é " // concatenaão sem templateString
+ idade + " e nasci na cidade de " + cidadeNascimento ;
*/

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}.`;

console.log(apresentacao);
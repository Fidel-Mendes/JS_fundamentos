//parametros de function

            //  n    n
function soma (num1,num2){
    return num1 + num2;
}
                //argumento 1 , argumento2
console.log(soma(2, 5));
console.log(soma(23, -52));
console.log(soma(12, 223));

//parametro x argumentos

//ordem dos parametros

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(16, "Fidel"));  ordem invertida, resultado = Meu nome é 16 e minha idade é Fidel
console.log(nomeIdade("Fidel", 16));

function multiplica(num1, num2){
    return num1 * num2;
}
                            //9         //6
//console.log(multiplica(soma(4, 5), soma(3, 3))); // resultado = 54 (9 vezes 6)

console.log(multiplica(soma(4, 5))); //resultado NaN

//correão

function multiplicaC(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicaC(soma(4, 5))); //resultado = 9 (4 + 5)

// boa pratica passar poucos argumentos para a fuction


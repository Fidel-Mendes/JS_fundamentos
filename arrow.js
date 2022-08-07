
function apresentar (nome){
    return `meu nome é ${nome}`;
}

//arrow function utilia => (uma flexinha)

                    //um unico parametro, não é necessario abrir parenteses
const apresentarArrow = nome => `meu nome é ${nome}`;

//dois parametros, necessário abrir parenteses
const soma = (num1 , num2) => num1 + num2;

// A arrow function não pode ser nomeada e sempre começa com uma const

//arrow function com mais de uma linha de instrução

const somaNumerosP = (num1, num2) => {
    if(num1 || num2 > 10){
        return "somente números de 1 a 9";
    }else{
        return num1 + num2;
    }
}

//arrow function é uma function mais rapida e curta, e possue vantagens quando mexemos com objetos

//declaração de function usamos para melhor entendimento

// Hoisting : arrow function se comporta como expressão
//funções 

/*let x = "";
console.log(x);
x = "oi";*/

// 1) declara a função
                      //String
function imprimeTexto (texto){
    console.log(texto);
}

// 2) executa a função (1 ou + vees)

imprimeTexto(soma()); // é possivel executar uma função dentro de outra função
imprimeTexto("outro texto");

// 3 Existem tres formas de escrever funções

function soma(){
    return 2 + 2; // o return deve sempre ser a ultima linha da funação
}

//console.log(soma());
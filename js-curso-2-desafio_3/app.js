// //EX01
// function calculaIMC(altura,peso){
//     let altura2 = Math.pow(altura,2);
//     let imc = (peso / altura2);
//     return imc;
// }

// function exibeIMC(){
//     let altura = prompt('Entre com a altura - EX. (1.90)');
//     let peso = prompt('Entre com o peso');
//     alert('O IMC é: ' +  calculaIMC(altura,peso).toFixed(1) + ' KG/M²') ;
// }

// //EX02
// function calculaFatorial(n){
//     for(i = n-1; i > 0; i--){
//      n *= i;
//     }
//     return n;
// }

// function exibeFatorial(){
//     let numero = prompt('Entre com um número para obter o seu fatorial: ');
//     alert(`O fatorial de ${numero} é `+ calculaFatorial(numero));
// }

// //EX03
// function converteDolar(dolar){
//     let real = dolar * 4.80;

//     return real;
// }

// function exibeReal(){
//     let dolar = prompt('Entre com o valor em dolar');

//     let palavraDolar = dolar == 1 ? 'dólar' : 'doláres'
//     alert(`US$${dolar} ${palavraDolar} é igual a R$` + converteDolar(dolar) + ` reais`);
// }


// //EX04
// function calculaArea(altura, largura){
//     let area = altura * largura;
//     let perimetro = (altura * 2) + (largura * 2);

// }

// function exibeAreaPerimetro(){
//     let altura = prompt('Entre com a altura da sala');
//     let largura = prompt('Entre com a largura da sala');

//     alert(`US$${dolar} ${palavraDolar} é igual a R$` + converteDolar(dolar) + ` reais`);
// }

//EX05


//EX06

function calculaTabuada(n){
    for(i = 1; i <= 10; i++){
        let result = n * i;
        alert(`${n} X ${i} = ${result}`);
    }
}

function exibeTabuada(){
    let numero = prompt('Entre com o número que deseja a tabuada');
    calculaTabuada(numero);
}
//EX01
function calculaIMC(altura,peso){
    let altura2 = Math.pow(altura,2);
    let imc = (peso / altura2);
    return imc;
}

function exibeIMC(){
    let altura = prompt('Entre com a altura - EX. (1.90)');
    let peso = prompt('Entre com o peso');
    console.log('O IMC é: ' +  calculaIMC(altura,peso).toFixed(1) + ' KG/M²') ;
}

//EX02
function calculaFatorial(n){
    if(n == 0 || n == 1){
        return 1;
    }

    for(i = n-1; i > 0; i--){
     n *= i;
    }
    return n;
}

function exibeFatorial(){
    let numero = prompt('Entre com um número para obter o seu fatorial: ');
    console.log(`O fatorial de ${numero} é `+ calculaFatorial(numero));
}

//EX03
function converteDolar(dolar){
    let real = dolar * 4.80;

    return real;
}

function exibeReal(){
    let dolar = prompt('Entre com o valor em dolar');

    let palavraDolar = dolar == 1 ? 'dólar' : 'doláres'
    console.log(`US$${dolar} ${palavraDolar} é igual a R$` + converteDolar(dolar) + ` reais`);
}

//EX04
function calculaArea(altura, largura){
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    console.log(`A área da sala é ${area} e o perímetro é ${perimetro}`);
}

function solicitaAltLarg(){
    let altura = prompt('Entre com a altura da sala');
    let largura = prompt('Entre com a largura da sala');

    calculaArea(altura,largura);
}

//EX05
function calculaAreaCircular(r){
    const pi = 3.1415926535898;
    //Math.PI

    let area = (pi * (r * r));
    let perimetro = 2 * pi * r;

    console.log(`A área do círculo é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}`);
}

function solicitaAreaPerim(){
    let raio = prompt('Entre com o raio do círculo: ');
    calculaAreaCircular(raio);
}
    
// //EX06
function calculaTabuada(n){
    for(i = 1; i <= 10; i++){
        let result = n * i;
        console.log(`${n} X ${i} = ${result}`);
    }
}

function exibeTabuada(){
    let numero = prompt('Entre com o número que deseja a tabuada');
    calculaTabuada(numero);
}
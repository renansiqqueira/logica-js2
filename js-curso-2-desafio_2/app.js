//EX01
function exibirSaudacao(){
    console.log('Olá Mundo!');
}

//EX02
function exibirNome(nome){
    console.log(`Olá, ${nome}!`);
}

//EX03
function dobrarN(n){
    let dobro = n *= 2;
    return dobro;
}

//EX04
function obterMedia(x, y, z){
    let media = (x + y + z)/3
    return media;
}

//EX05
function obterMaior(x, y){
    // if(x > y){
    //     console.log(x)
    //     return x;
    // }else{
    //     console.log(y)
    //     return y;
    // }

    return x > y ? x : y;
}

//EX06
function obterQuadradoN(n){
    //let quadrado = n *= n;
    let quadrado = Math.pow(n,2);
    console.log(quadrado);
    return quadrado;
}
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numSecreto = gerarNumAleatorio();
console.log(numSecreto);
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function exibirTexto(tag, texto){
    let tagEscolhida = document.querySelector(tag);
    tagEscolhida.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numSecreto);
}

function gerarNumAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
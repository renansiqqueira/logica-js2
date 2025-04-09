// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let qtdTentativas = 0;
let palavraTentativa;

let numSecreto = gerarNumAleatorio();
console.log(numSecreto);
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function exibirTexto(tag, texto){
    let tagEscolhida = document.querySelector(tag);
    tagEscolhida.innerHTML = texto;
}

function verificarChute(){
    qtdTentativas++;
    
    palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa';

    let chute = document.querySelector('input').value;

    if(chute == numSecreto){
      let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${qtdTentativas} ${palavraTentativa}.`
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', mensagemTentativas);
    }else{
        exibirTexto('h1', 'Tente novamente');
        let mensagemErro = numSecreto > chute ? `O número é secreto é maior que ${chute}.` : `O número é secreto é menor que ${chute}.`
        exibirTexto('p', mensagemErro);
    }
}

function gerarNumAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
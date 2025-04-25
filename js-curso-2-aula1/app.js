// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosGerados = [];
let qtdTentativas = 0;
let numeroMaxLista = 10;
reIniciarJogo();

function exibirTexto(tag, texto){
    let tagEscolhida = document.querySelector(tag);
    tagEscolhida.innerHTML = texto;

    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.3});
}

function gerarNumAleatorio(){
    let numeroGerado = parseInt(Math.random() * numeroMaxLista + 1);
    let qtdElementosLista = listaNumerosGerados.length;

    if(qtdElementosLista == numeroMaxLista){
        listaNumerosGerados = [];
    }

    if(listaNumerosGerados.includes(numeroGerado)){
        return gerarNumAleatorio();
    }else{
        listaNumerosGerados.push(numeroGerado);
        console.log(listaNumerosGerados);
        return numeroGerado;
    }
}

function reIniciarJogo(){
    qtdTentativas = 0;
    numSecreto = gerarNumAleatorio();
    limparCampo();
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    qtdTentativas++;
    
    let palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa';

    if(chute == numSecreto){
      let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${qtdTentativas} ${palavraTentativa}.`
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTexto('h1', 'Tente novamente');
        let mensagemErro = numSecreto > chute ? `O número secreto é maior que ${chute}.` : `O número secreto é menor que ${chute}.`
        exibirTexto('p', mensagemErro);
        document.getElementById('reiniciar').setAttribute('disabled', 'True');
        limparCampo();
    }
}
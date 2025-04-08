let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibeNoConsole(){
    console.log('O botão console foi clicado');
}

function exibirAlert(){
    alert('Eu amo JS!!!');
}

function exibirMensagemPersonalizada(){
    let cidade = prompt('Informe o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaNumeros(){
    let n1 = parseInt(prompt('Informe o primeiro número da soma'));
    let n2 = parseInt(prompt('Informe o segundo número da soma'));
    let soma = n1 + n2;
    alert(`${n1} + ${n2} = ${soma}`);
}
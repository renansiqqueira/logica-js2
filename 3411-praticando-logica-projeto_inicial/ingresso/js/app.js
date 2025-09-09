function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
     let qtdCompra = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso.value == 'pista' && qtdCompra > 0){
        comprarPista(qtdCompra);
    }else if(tipoIngresso.value == 'superior' && qtdCompra > 0){
        comprarSuperior(qtdCompra);
    }else if(tipoIngresso.value == 'inferior' && qtdCompra > 0){
        comprarInferior(qtdCompra);
    }else{
        alert('A quantidade de ingressos deve ser maior que 0')
    }
}


function comprarPista(qtdCompra){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtdCompra <= qtdPista){
        qtdPista -= qtdCompra;
        alert('Compra concluída com sucesso');
        document.getElementById('qtd-pista').textContent = qtdPista;
    }else{
        alert('Quantidade indisponível');
    }
}


function comprarSuperior(qtdCompra){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtdCompra <= qtdSuperior){
        qtdSuperior -= qtdCompra;
        alert('Compra concluída com sucesso');
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }else{
        alert('Quantidade indisponível');
    }
}

function comprarInferior(qtdCompra){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtdCompra <= qtdInferior){
        qtdInferior -= qtdCompra;
        alert('Compra concluída com sucesso');
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }else{
        alert('Quantidade indisponível');
    }
}

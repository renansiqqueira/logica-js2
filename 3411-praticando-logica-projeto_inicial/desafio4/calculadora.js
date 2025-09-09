let opcao = prompt('Qual operação deseja realizar?' +
    '\n\n1 - Somar\n' +
    '\n2 - Subtrair\n' +
    '\n3 - Multiplicar\n' + 
    '\n4 - Dividir\n');

function enviar(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let result = document.getElementById('result');

    
    switch(opcao){
        case '1': 
            result.innerHTML = somar(n1,n2);
            break;

        case '2':
            result.innerHTML = subtrair(n1,n2);
            break;
            
        case '3':
            result.innerHTML = multiplicar(n1,n2);
            break;
            
        case '4':
            result.innerHTML = dividir(n1,n2);
            break;
        
        default:
            alert('Entre com uma opção válida para operação');
            break;           
    }

}


function somar(n1,n2){
    return n1 + n2;
}

function subtrair(n1,n2){
    return n1 - n2;
}

function multiplicar(n1,n2){
    return n1 * n2;
}

function dividir (n1,n2){
    return n1 / n2;
}

let opcao = prompt('1 - Celsius -> Fahrenheit \n' + '2 - Fahrenheit -> Celsius');

function enviar(){
    let p = document.getElementById('paragrafo');
    let grau = parseFloat(document.getElementById('inputGrau').value);

   switch(opcao){
        case '1': 
            p.innerHTML = grau + '° Celsius é igual a ' + converterCelsius(grau).toFixed(2) + '° Fahrenheit';
            break;

        case '2':
            p.innerHTML = grau + '° Fahrenheit é igual a ' + converterFahrenheit(grau).toFixed(2) + '° Celsius';
            break;

        default:
            alert('Opção Inválida');
   }
}


function converterCelsius(grau){
    return ((grau * 1.8) + 32);
}

function converterFahrenheit(grau){
    return ((grau - 32 ) * 5)/9;
}


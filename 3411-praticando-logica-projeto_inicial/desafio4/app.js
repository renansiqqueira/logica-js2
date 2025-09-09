function enviar(){
    let input = document.querySelector('input').value;
    let paragrafoElement = document.querySelector('p');

    
    paragrafoElement.innerHTML = converteString(input);
}

function converteString(input){
   return parseInt(input);
}

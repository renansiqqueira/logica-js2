function enviar(){
    let resultado = document.getElementById('resultado');
    let input = parseInt(document.querySelector('input').value);
    resultado.innerHTML = parOuImpar(input);
}

function parOuImpar(input){
   if(input % 2 == 0){
    return 'Par';
   }else{
    return 'Ímpar';
   }
}

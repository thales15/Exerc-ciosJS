function Verificar(event){
    event.preventDefault();
    var palavra = document.getElementById("palindromo").value;
    var palavraInvertida = palavra.split("").reverse().join("");

    if(palavra === palavraInvertida){
        alert('A palavra é um palindromo: ' + palavra + ' => ' + palavraInvertida)
    }else{
        alert('A palavra não é um palindromo: ' + palavra + ' => ' + palavraInvertida)
    }
}
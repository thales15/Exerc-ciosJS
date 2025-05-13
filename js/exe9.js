function misturar() {
    event.preventDefault();
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;
    var maxLength = Math.max(palavra1.length, palavra2.length);
    var palavraIntercalada = "";

    for (var i = 0; i < maxLength; i++) {
        if (i < palavra1.length) {
            palavraIntercalada += palavra1[i];
        }
        if (i < palavra2.length) {
            palavraIntercalada += palavra2[i];
        }
    }


    document.getElementById("resultado").value = palavraIntercalada;
}
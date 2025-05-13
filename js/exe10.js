function calcular(event) {
    event.preventDefault();
    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const numero3 = parseFloat(document.getElementById("num3").value);

    const numeros = [numero1, numero2, numero3];
    const soma = numero1 + numero2 + numero3;
    const media = soma / 3;
    const produto = numero1 * numero2 * numero3;
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);

    document.getElementById("nums").textContent = numeros.join(", ");
    document.getElementById("soma").textContent = soma;
    document.getElementById("media").textContent = media.toFixed(2);
    document.getElementById("produto").textContent = produto;
    document.getElementById("maior").textContent = maior;
    document.getElementById("menor").textContent = menor;
}
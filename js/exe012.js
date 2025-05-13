function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo = document.getElementById('result')
    if (num % 2 == 0) {
        tipo.innerHTML = `<p><strong>É PAR!!</strong>. Parabéns ganhou <strong>R$1000!</strong></p>`
    } else {
        tipo.innerHTML = `<p><strong>É ÍMPAR!</strong>. Parabéns ganhou <strong>R$5000!</strong></p>`
    }

    
}
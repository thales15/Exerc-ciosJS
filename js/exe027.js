function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada do ${n}</h2>`
    let c = 1
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}
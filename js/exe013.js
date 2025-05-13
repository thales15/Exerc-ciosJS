function maior() {
    let n1 = Number(window.prompt('Digite a idade da primeira pessoa: '))
    let n2 = Number(window.prompt('Digite a idade da segunda pessoa: '))
    
    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando as idades <strong>${n1}</strong> e <strong>${n2}</strong>,respectivamente, a <strong>primeira pessoa</strong> é mais velha</p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analisando as idades <strong>${n1}</strong> e <strong>${n2}</strong>, respectivamente, a <strong>segunda pessoa</strong> é a mais velha</p>`
    } else {
        res.innerHTML = `<p>Analisando as idades <strong>${n1}</strong> e <strong>${n2}</strong>, ambos possuem a <strong>mesma idade</strong></p>`
    }
}
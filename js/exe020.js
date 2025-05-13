function estação() { // Sim, é possível usar acentuação
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <strong>${mês}</strong>, estamos na estação <strong><strong>${estação}</strong></strong>.</p>`
}

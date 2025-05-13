function busca(event) {
    event.preventDefault();

    const palavra = document.getElementById("palavra").value.trim();
    const completo = `No princípio, não havia código — apenas ideias soltas em cabeças curiosas. Mas em 1843, uma jovem matemática chamada Ada Lovelace olhou para os símbolos e engrenagens da Máquina Analítica de Charles Babbage e enxergou mais do que cálculos: ela viu potencial criativo. Com isso, escreveu o que muitos consideram o primeiro algoritmo da história — e sem saber, acendeu a fagulha da era digital.

      Décadas depois, enquanto o mundo enfrentava guerras, máquinas começaram a falar em linguagens de zeros e uns. Alan Turing, com sua mente brilhante, mostrou que qualquer problema computacional poderia ser resolvido por uma máquina ideal — e deu ao mundo não só uma ferramenta matemática, mas um novo jeito de pensar.
      
      Quando os primeiros computadores surgiram, gigantes como o ENIAC, os programadores (na época, quase todos mulheres) digitavam instruções manualmente, sem editores de texto, sem mouse, sem tela — só fios e switches.
      
      Com o tempo, surgiram as linguagens: Assembly, Fortran, COBOL. Depois, vieram os rebeldes criadores do C, que ensinaram ao mundo que controlar cada byte da memória podia ser poderoso — e perigoso. C deu origem ao Unix, que gerou o Linux, que hoje roda o planeta inteiro sem fazer alarde.
      
      Na virada do milênio, já tínhamos navegadores, redes e a tal web. JavaScript, criado em 10 dias, virou a cola invisível da internet. Python, com sua sintaxe simples e alma elegante, conquistou cientistas e desenvolvedores com o lema: “Legibilidade importa.”
      
      Hoje, programar é mais do que dizer a um computador o que fazer. É uma forma de expressão, criação, revolução. Cada linha de código carrega um pouco da história de quem veio antes — e quem escreve agora está, sem saber, construindo o próximo capítulo.`;
    const textoElemento = document.getElementById("texto");
    const resultadoElemento = document.getElementById("resultado");


    const regex = new RegExp(`(${palavra})`, "gi");
    const ocorrencias = completo.match(regex);

    if (ocorrencias) {
        const textoDestacado = completo.replace(regex, `<span style="background-color: yellow; color: black">$1</span>`);
        textoElemento.innerHTML = textoDestacado;

        resultadoElemento.textContent = `A palavra "${palavra}" foi encontrada ${ocorrencias.length} vez(es).`;
        resultadoElemento.style.color = "white";
    } else {
        // Caso não haja ocorrências, exibe uma mensagem
        textoElemento.innerHTML = completo;
        resultadoElemento.textContent = `A palavra "${palavra}" não foi encontrada no texto.`;
        resultadoElemento.style.color = "red";
    }
}
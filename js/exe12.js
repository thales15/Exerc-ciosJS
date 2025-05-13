function ampliarImagem(img) {
    const imagemAmpliada = document.getElementById("imagemAmpliada");
    imagemAmpliada.src = img.src;
    imagemAmpliada.alt = img.alt;
}
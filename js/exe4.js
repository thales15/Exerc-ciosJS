function apagar(){
    const p = document.getElementById("paragrafo");
    const button = document.querySelector("button");

    if (p.style.visibility === "hidden") {
        p.style.visibility = "visible";
        button.textContent = "Ocultar";
    } else {
        p.style.visibility = "hidden";
        button.textContent = "Mostrar";
    }
}
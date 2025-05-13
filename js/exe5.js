function checking(event){
    event.preventDefault;
    var senha = document.getElementById("senha").value;
    var confirmar = document.getElementById("confirmar").value;

    if(senha == confirmar){
        alert('Login realizado com êxito')
    }else{
        alert('As senhas não coincidem')
    }
}
function habilitarPessoaFisica() {
    document.getElementById('CPF').disabled = false;
    document.getElementById('CNPJ').disabled = true;

    document.getElementById('data').disabled = false;
}

function habilitarPessoaJuridica() {
    document.getElementById('CNPJ').disabled = false;
    document.getElementById('CPF').disabled = true;

    document.getElementById('data').disabled = true;
}
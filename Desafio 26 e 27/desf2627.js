document.getElementById('cep').addEventListener('blur', function() {
    let cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!('erro' in data)) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert("CEP não encontrado.");
                    clearAddress();
                }
            })
            .catch(error => {
                alert("Erro ao buscar CEP.");
                console.error(error);
                clearAddress();
            });
    } else {
        alert("CEP inválido.");
        clearAddress();
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Usuário cadastrado com sucesso!');
    clearAll();
});

function clearAddress(){
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

function clearAll(){
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cep').value = '';
    clearAddress();
}

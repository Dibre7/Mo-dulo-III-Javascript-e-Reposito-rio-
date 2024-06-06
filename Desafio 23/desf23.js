
// Lista de itens com seus valores
const itemValores = {
    "Caderno": "R$ 15,00",
    "Calculadora": "R$ 30,00",
    "Livro": "R$ 45,00"
};

function itemValor() {
    // Captura o valor inserido pelo usuário
    const itemInput = document.getElementById('itemInput').value;
            
    // Seleciona a área onde o valor será exibido
    const displayArea = document.getElementById('displayArea');
            
    // Verifica se o item inserido está na lista de itens pré-estabelecidos
    if (itemValores[itemInput]) {
    // Exibe o item e seu valor
        displayArea.textContent = `O valor do item ${itemInput} é ${itemValores[itemInput]}`;
    } else {
     // Exibe uma mensagem de erro se o item não estiver na lista
        displayArea.textContent = `Item não encontrado. Por favor, insira uma dos itens como Caderno, Calculadora ou Livro.`;
    }
}
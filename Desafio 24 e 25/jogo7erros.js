// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [ // (1) Corrigido: Trocado parenteses por colchetes
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10", // (2) Corrigido: Colocado aspas
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementsById('lista-desenhos')[0]; // (3) Corrigido: Usar getElementsById e pegar o primeiro elemento da coleção
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement('li'); // (4) Corrigido: 'li' precisa estar entre aspas
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
    const novoDesenho = document.getElementById('novo-desenho').value; // (5) Corrigido: Pegar o valor do input
    if (novoDesenho.trim() !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Substitui o elemento no índice atual
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista(); // (6) Corrigido: Chamar a função exibirLista() corretamente
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega
window.onload = exibirLista; // (7) Corrigido: Chamar a função exibirLista ao carregar a página

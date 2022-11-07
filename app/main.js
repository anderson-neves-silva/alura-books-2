let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();  // chamada que faz a requisição e busca os livros da API.
const elementoParaInserirLivros = document.getElementById('livros');  // capturando o elemento para inserir os livros.

async function getBuscarLivrosDaAPI() {  // função assícrona por isso definimos como async, fazendo a requisição e buscando os livros, o await significa espere por uma promessa.
    const res = await fetch(endpointDaAPI);  //  realizando a requisição e atribuindo em res.
    livros = await res.json();  // atribuindo a livros a resposta da requisição transformada em json.
    console.table(livros);  // mostrando de uma forma que parece com uma tabela ao invés de exibir como console log.
    let livrosComDesconto = aplicarDesconto(livros);  // aplicar desconto nos livros e será retornando objeto.
    exibirOsLivrosNaTela(livrosComDesconto);  // chamando a função e passando livros já com desconto.
}

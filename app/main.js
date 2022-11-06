let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();  // chamando a função
const elementoParaInserirLivros = document.getElementById('livros');  // capturando o elemento para inserir os livros

async function getBuscarLivrosDaAPI() {  // fazendo a requisição e buscando os livro, função assícrona, o await significa espere por uma promessa
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);  // mostrando de uma forma que parece com uma tabela ao invés de exibir como console log
    let livrosComDesconto = aplicarDesconto(livros);  // aplicar desconto nos livros e será retornando objeto
    exibirOsLivrosNaTela(livrosComDesconto);  // chamando a função passando livros 
}

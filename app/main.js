let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
// chamando a função
getBuscarLivrosDaAPI();

// fazendo a requisição e buscando os livro, função assícrona, o await significa espere por uma promessa
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    // console.log(livros);
    // mostrando de uma forma que parece com uma tabela ao invés de exibir como console log
    console.table(livros);
}

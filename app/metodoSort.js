let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');  // capturando o elemento.
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);  // adicionando um evento de click que chama a função .

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);  // precisamos oegar os livros de algum car e no arquivo "main" já temos uma variável livros.
  console.table(livrosOrdenados);
  exibirOsLivrosNaTela(livrosOrdenados);  // chamando a função exibirOsLivrosNaTela, que está no arquivo "metodoForEach" passando os livros ordenados.
} 

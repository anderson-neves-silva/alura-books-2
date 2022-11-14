function calcularValorTotalDeLivrosDisponiveis(livros) {  // função que terá um retorno.
   return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2);  // o "0" significa que temos que o primeiro índice que comece com um valor zero.
}


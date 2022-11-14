const botoes = document.querySelectorAll('.btn');  // pegando todos os botões da tela.
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));  // significa que cada botão eu quero realizar uma ação que é chamar a função filtrarLivros.

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);  // qual o botão está sendo clicado.
  const categoria = elementoBtn.value;
  let livrosFiltrados = categoria == 'disponivel' ?  // se categoria for disponivel, faz o filtro por disponibilidade, se não faz o filtro por categoria passando a categoria que temos com parâmetro. 
  filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);   
  exibirOsLivrosNaTela(livrosFiltrados);  // como já temos a função que exibe os livros na tela, eu apenas chamo ela aqui, note que os livros estão se repetindo na tela após clicar novamente no mesmo botão, então o que preciso é apenas ir na função exibirLivrosNaTela e fazer uma chamada de innerHTML passando vazio no início dela.

  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);  // métdodo reduce.
    exibirTotalDosLivrosDisponivelNaTela(valorTotal);  //  passando o valor da variável que guarda o valor total de livros disponíveis nessa função.
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirTotalDosLivrosDisponivelNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}

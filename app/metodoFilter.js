const botoes = document.querySelectorAll('.btn');  // pegando todos os botões da tela.
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));  // significa que cada botão eu quero realizar uma ação que é chamar a função filtrarLivros.

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);  // qual o botão está sendo clicado.
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);  // como já temos a função que exibe os livros na tela, eu apenas chamo ela aqui, note que os livros estão se repetindo na tela após clicar novamente no mesmo botão, então o que preciso é apenas ir na função exibirLivrosNaTela e fazer uma chamada de innerHTML passando vazio no início dela.
}
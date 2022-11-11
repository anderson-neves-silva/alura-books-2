const elementoParaInserirLivros = document.getElementById('livros');  // capturando o elemento para inserir os livros.

function exibirOsLivrosNaTela(listaDeLivros) {  // função que cria cada livro na tela, ela recebe uma lista de livros no parâmetro, aqui eu uso template string para inserir o os dados vindos da API para ficar de forma dinâmica ${ }.
  elementoParaInserirLivros.innerHTML = '';  // passando vazio aqui para mostrar apenas os livros clicados.
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro);  // função que verifica a disponibilidade do livro, observação: a classe "livro__imagens" passa a ser baseada no valor que tem lá na quantidade da API, se valor for “0 ou menos” muda a visualização do livro.
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';  // fazendo o mesmo “if” usando o operador ternário, descrição do comando, se livro quantidade for maior que “ 0 ” faça algo, o “ ? ” é se for então retorne algo, o “ : “ é se não for, faça algo.
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt=${livro.alt}" />  
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    `
  });    
}

// função que verifica se o livro está disponível, observação: if tradicional.
// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livro__imagens indisponivel';
//   }
// }

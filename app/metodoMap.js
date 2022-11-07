function aplicarDesconto(livros) {
    const desconto = 0.3;  // definindo o quanto de desconto.
    livrosComDesconto = livros.map(livro => {
        return {... livro, preco: livro.preco - (livro.preco * desconto)} // aqui a chaves indica que estamos retornando um objeto, e os “ . . . ” significa que irá fazer uma cópia de todo o nosso array para um outro objeto, significando faz uma cópia de todos os livro mas eu vou precisar alterar apenas o “preço” dele.
    })
    return livrosComDesconto;
}

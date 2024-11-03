const listaDeBotoes = document.querySelectorAll('.thead__btn');
const listaDeImagens = document.querySelectorAll('.thead__img');

/**Percorre todos os botões de seleção de imagem */
listaDeBotoes.forEach((botao, indexDoBotao)=>{
    /**Adiciona uma ação para cada vez que ele for clicado */
    botao.addEventListener('click', () => {
        
        /**Faz com que a imagem correspondente a posição do botão apareça */
        listaDeImagens[indexDoBotao].classList.add('thead__img--active');
        botao.classList.add('thead__btn--selected');

        removeSelecaoDosBotoesNaoClicados(indexDoBotao);
        removeImagensNaoSelecionadas(indexDoBotao);
    });
})

function removeSelecaoDosBotoesNaoClicados(indexDoBotaoClicado) {
    listaDeBotoes.forEach((botaoDiferente, indexDoBotao)=>{
        if (indexDoBotao != indexDoBotaoClicado) {
            botaoDiferente.classList.remove('thead__btn--selected');
        }
    })
}

function removeImagensNaoSelecionadas(indexDoBotao) {
    listaDeImagens.forEach((imagem, indexDaImagem)=>{
        if (indexDaImagem != indexDoBotao) {
            imagem.classList.remove('thead__img--active');
        }
    })
}
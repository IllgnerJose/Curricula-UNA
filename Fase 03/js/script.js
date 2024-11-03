/**Funções para cumprir essa etapa da atividade:
 * Adicione ao projeto mais de uma foto de perfil e crie um código que permita que 
 * acessar visualizar as fotos da mesma forma que hoje podemos visualizar 
 * fotos de produtos em um portal e-commerce.
 */
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

/**Funções para cumprir essa etapa da atividade:
 * Deverá ser criada uma maneira de inserir novas UCs na lista de UCs já existentes. 
 * Não é necessário salvar os novos elementos em banco de dados, apenas mostrar na tela. 
 * Pode ser feito utilizando a função prompt.
 */
const botaoParaAdicionarUc = document.querySelector('#tbody__botao-para-adicionar-ucs');
const campoParaAdicionarUc = document.querySelector('#tbody__campo-para-adicionar-ucs');

/**Mostra o campo de inserção quando o botão é clicado */
botaoParaAdicionarUc.addEventListener("click", () => {
    botaoParaAdicionarUc.classList.add("tbody__botao-para-adicionar-ucs--disabled");
    campoParaAdicionarUc.classList.remove("tbody__campo-para-adicionar-ucs--disabled");
});

const listaDeUcs = document.querySelector('.tbody__lista-de-ucs');
const campoDeUc  = document.querySelector('#tbody__input-para-adicionar-ucs');
const botaoDeSalvar = document.querySelector('#tbody__botao-para-salvar-ucs');

const ucBase = document.querySelector('.tbody__uc ');
const botaoParaSubirUcBase = document.querySelector('.tbody__botao-para-subir-uc');
const botaoParaDescerUcBase = document.querySelector('.tbody__botao-para-descer-uc'); 

botaoDeSalvar.addEventListener("click", () => {

    let valorDaUc = campoDeUc.value;

    if (valorDaUc != '') {
        let novaUc = document.createElement("li");

        let cloneDaUC = ucBase.cloneNode(false);
        cloneDaUC.textContent = valorDaUc;

        let cloneDoBotaoParaSubirBase = botaoParaSubirUcBase.cloneNode(true);
        let cloneDoBotaoParaDescerBase = botaoParaDescerUcBase.cloneNode(true);

        novaUc.appendChild(cloneDaUC);
        novaUc.appendChild(cloneDoBotaoParaSubirBase);
        novaUc.appendChild(cloneDoBotaoParaDescerBase);

        listaDeUcs.appendChild(novaUc);
    }
});

/**Funções para cumprir essa etapa da atividade:
 * Deverá permitir a ordenação manual das UCs, ou seja, clicando em uma seta para cima ou para baixo, 
 * a uc selecionada deve mudar de ordem na tabela que está sendo mostrada. 
 * Pode-se utilizar a abordagem de arrastar a Célula também.
 */

function sobeUc () {    
    const ucsParaMovimentacao = document.querySelectorAll(".tbody__uc");
    const botaoParaSubirUc = document.querySelectorAll (".tbody__botao-para-subir-uc");

    botaoParaSubirUc.forEach((botaoParaSubir, index)=>{
        botaoParaSubir.addEventListener("click", () => {
            if (index-1 < 0) {
                let textoDaUcQueEstaSubindo = ucsParaMovimentacao[index].textContent;
                ucsParaMovimentacao[index].textContent = ucsParaMovimentacao[ucsParaMovimentacao.length - 1].textContent;
                ucsParaMovimentacao[ucsParaMovimentacao.length - 1].textContent = textoDaUcQueEstaSubindo;
            } else if (index-1 >= 0) {
                let textoDaUcQueEstaSubindo = ucsParaMovimentacao[index].textContent;
                ucsParaMovimentacao[index].textContent = ucsParaMovimentacao[index-1].textContent;
                ucsParaMovimentacao[index-1].textContent = textoDaUcQueEstaSubindo;
            }
        })
    });
}

function desceUc () {
    const ucsParaMovimentacao = document.querySelectorAll(".tbody__uc");
    const botaoParaDescerUc = document.querySelectorAll(".tbody__botao-para-descer-uc");

    botaoParaDescerUc.forEach((botaoParaDescer, index)=>{
        botaoParaDescer.addEventListener("click", () => {
            if (index+1 > ucsParaMovimentacao.length - 1) {
                let textoDaUcQueEstaDescendo = ucsParaMovimentacao[index].textContent;
                ucsParaMovimentacao[index].textContent = ucsParaMovimentacao[0].textContent;
                ucsParaMovimentacao[0].textContent = textoDaUcQueEstaDescendo;
            } else if (index+1 <= ucsParaMovimentacao.length - 1) {
                let textoDaUcQueEstaDescendo = ucsParaMovimentacao[index].textContent;
                ucsParaMovimentacao[index].textContent = ucsParaMovimentacao[index+1].textContent;
                ucsParaMovimentacao[index+1].textContent = textoDaUcQueEstaDescendo;
            }
        })
    });
}

/**Funções para cumprir essa etapa da atividade:
 * Deverá ser incluído o campo CPF no formulário e depois de digitar o valor, ao sair do mesmo, 
 * o sistema deve validar se o valor do CPF digitado obedece à máscara padrão de CPF (ddd.ddd.ddd-dd).
 */

cpf = document.querySelector(".tbody__campo-de-cpf");
botaoDeSalvarContato = document.querySelector(".tbody__botao-para-salvar-contato");
cpfInfo = document.querySelector(".tbody__cpf-info");

botaoDeSalvarContato.addEventListener ("click", () => {
    cpfInfo.textContent = verificaCpfInserido(cpf.value);
});

function verificaCpfInserido(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    
    if (regex.test(cpf)) {
        return "Formato de CPF válido.";
    } else {
        return "Formato de CPF inválido. Use ddd.ddd.ddd-dd.";
    }
}

/**Funções para cumprir essa etapa da atividade:
 * Ao digitar o e-mail e sair do campo, deve-se validar a máscara base do e-mail.
 */
email = document.querySelector(".tbody__campo-de-email");
botaoDeSalvarContato = document.querySelector(".tbody__botao-para-salvar-contato");
emailInfo = document.querySelector(".tbody__email-info");

botaoDeSalvarContato.addEventListener ("click", () => {
    emailInfo.textContent = verificaEmailInserido(email.value);
});

function verificaEmailInserido (email) {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regex.test(email)) {
        return "Formato de e-mail válido.";
    } else {
        return "Formato de e-mail inválido. Use nome@dominio.com.";
    }
}

/**Funções para cumprir essa etapa da atividade:
 * Crie a possibilidade da inserção de novas informações relacionadas à sua descrição de perfil pessoal, 
 * para este item não utilize prompt, utilize a entrada direta no HTML e DOM.
 */
const botaoParaAdicionarInfo = document.querySelector('#tbody__botao-para-adicionar-infos');
const campoParaAdicionarInfo = document.querySelector('#tbody__campo-para-adicionar-infos');

/**Mostra o campo de inserção quando o botão é clicado */
botaoParaAdicionarInfo.addEventListener("click", () => {
    botaoParaAdicionarInfo.classList.add("tbody__botao-para-adicionar-infos--disabled");
    campoParaAdicionarInfo.classList.remove("tbody__campo-para-adicionar-infos--disabled");
});

const listaDeInfo = document.querySelector('.tbody__lista-de-infos');
const campoDeInfo  = document.querySelector('#tbody__input-para-adicionar-infos');
const botaoDeSalvarInfo = document.querySelector('#tbody__botao-para-salvar-infos');

botaoDeSalvarInfo.addEventListener("click", () => {

    let valorDaInfo = campoDeInfo.value;

    if (valorDaInfo != '') {
        let novaInfo = document.createElement("li");

        novaInfo.textContent = valorDaInfo;

        listaDeInfo.appendChild(novaInfo);
    }
});


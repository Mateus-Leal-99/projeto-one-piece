/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const carrossel = document.querySelectorAll('.descricao');
const imagens = document.querySelectorAll('.logo');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior      
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderLogoAtivo();

        esconderDescricaoAtivo();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarLogoDeFundo(indice);

        mostrarDescricaoDeFundo(indice);
    })
})

function mostrarLogoDeFundo(indice) {
    imagens[indice].classList.add('ativo');
}

function mostrarDescricaoDeFundo(indice) {
    carrossel[indice].classList.add('ativo');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderLogoAtivo() {
    const logoAtivo = document.querySelector('.ativo');
    logoAtivo.classList.remove('ativo');
}

function esconderDescricaoAtivo() {
    const descricaoAtivo = document.querySelector('.ativo');
    descricaoAtivo.classList.remove('ativo');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

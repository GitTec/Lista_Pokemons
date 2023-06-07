/* 
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que
    alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicarmos no botão de troca de tema, adicionar a classe
    modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a
    imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de trocar de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de trocar de 
        tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua

    - objetivo 2 - quando clicar no botão de trocar de tema, caso o body já tenha a classe
    modo-escuro, remoer a classse pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro no body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

/*objetivo 1 - quando clicarmos no botão de troca de tema, adicionar a classe
modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a
imagem pra lua*/

//passo 1 - pegar no JS o elemento HTML correspondente ao botão de trocar de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //getElement id - usado para pegar por id

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");    //query usado pra consultar um seletor (classe, tag)

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuário no botão de trocar de tema
botaoAlterarTema.addEventListener("click", () => {    //criar uma ação que vai ser disparada

    //passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); //contains verifica se tem a classe modo-escuro

    body.classList.toggle("modo-escuro");   //toggle serve para alternar entre dois
    
    if (modoEscuroEstaAtivo) {
        /*passo 7 - remover a classe do modo-escuro no body
        body.classList.remove("modo-escuro")*/

        //passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        /*passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");  pega a lista de classes do body*/

        //passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    };


});


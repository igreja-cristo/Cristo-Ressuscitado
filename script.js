const imagens = document.querySelectorAll("ul li img");
const modal = document.getElementById("modal");
const modalConteudo = document.getElementById("modal-conteudo");


imagens.forEach(img => {
    img.addEventListener("click", () => {
        const arquivo = img.dataset.arquivo;

    });
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalConteudo.innerHTML = "";
    }
});

/* ============================
   MENU LATERAL (TOGGLE)
============================ */

// Seleciona os elementos essenciais do menu lateral
let botao = document.querySelector('.toggle');          // Botão que abre/fecha o menu
let menuLateral = document.querySelector('.menu-lateral'); // Menu lateral
let topo = document.querySelector('body');              // Body para aplicar efeito de blur/bloqueio
let background = document.querySelector('.background'); // Fundo escurecido atrás do menu

// Abre ou fecha o menu ao clicar no botão
botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');     // Mostra/esconde menu
    botao.classList.toggle('ativo');           // Anima o ícone de menu
    topo.classList.toggle('ativo');            // Bloqueia a rolagem ou aplica efeitos
    background.classList.toggle('ativo');      // Ativa o fundo escurecido

    // Muda a cor de fundo da página conforme o menu está aberto ou fechado
    document.body.style.backgroundColor = 
        menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1';
});

// Fecha o menu ao clicar no fundo escuro
background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    topo.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.style.backgroundColor = '#ecf0f1';
});


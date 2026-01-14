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

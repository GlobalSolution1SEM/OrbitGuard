const trocaTema = document.querySelector(".troca-tema");
const botaoTema = document.querySelector("#botaoTema");
const textoTema = document.querySelector("#textoTema");
const opcoesTema = document.querySelectorAll("[data-tema]");

function fecharDropdownTema() {
    trocaTema.classList.remove("aberto");
}

function limparTema() {
    document.body.classList.remove("tema-eclipse");
    document.body.classList.remove("tema-lunar");
}

function limparOpcaoAtiva() {
    opcoesTema.forEach(function(opcao) {
        opcao.classList.remove("ativo");
    });
}

botaoTema.addEventListener("click", function() {
    trocaTema.classList.toggle("aberto");
});

opcoesTema.forEach(function(opcao) {
    opcao.addEventListener("click", function() {
        let tema = opcao.dataset.tema;

        limparTema();
        limparOpcaoAtiva();

        if (tema === "eclipse") {
            document.body.classList.add("tema-eclipse");
        }

        if (tema === "lunar") {
            document.body.classList.add("tema-lunar");
        }

        textoTema.textContent = opcao.textContent;
        opcao.classList.add("ativo");
        fecharDropdownTema();
    });
});
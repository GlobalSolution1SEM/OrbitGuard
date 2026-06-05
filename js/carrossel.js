const slides = document.querySelectorAll("[data-item]");
const botaoAnterior = document.querySelector("[data-anterior]");
const botaoProximo = document.querySelector("[data-proximo]");
const indicadores = document.querySelectorAll("[data-indicador]");

let slideAtual = 0;

function mostrarSlide() {
    slides.forEach(function(slide) {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(function(indicador) {
        indicador.classList.remove("ativo");
    });

    slides[slideAtual].classList.add("ativo");
    indicadores[slideAtual].classList.add("ativo");
}

botaoProximo.addEventListener("click", function() {
    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide();
});

botaoAnterior.addEventListener("click", function() {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide();
});

indicadores.forEach(function(indicador, indice) {
    indicador.addEventListener("click", function() {
        slideAtual = indice;
        mostrarSlide();
    });
});
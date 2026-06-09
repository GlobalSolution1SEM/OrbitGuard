const btnOrbital = document.querySelector("#btnOrbital");
const btnEclipse = document.querySelector("#btnEclipse");
const btnLunar = document.querySelector("#btnLunar");

function limparTemaAtivo() {
    btnOrbital.classList.remove("ativo");
    btnEclipse.classList.remove("ativo");
    btnLunar.classList.remove("ativo");
}

btnOrbital.addEventListener("click", function() {
    document.body.classList.remove("tema-eclipse");
    document.body.classList.remove("tema-lunar");
    limparTemaAtivo();
    btnOrbital.classList.add("ativo");
});

btnEclipse.addEventListener("click", function() {
    document.body.classList.remove("tema-lunar");
    document.body.classList.add("tema-eclipse");
    limparTemaAtivo();
    btnEclipse.classList.add("ativo");
});

btnLunar.addEventListener("click", function() {
    document.body.classList.remove("tema-eclipse");
    document.body.classList.add("tema-lunar");
    limparTemaAtivo();
    btnLunar.classList.add("ativo");
});

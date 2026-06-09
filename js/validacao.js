const formularioContato = document.querySelector("#formularioContato");
const campoNome = document.querySelector("#nomeContato");
const campoEmail = document.querySelector("#emailContato");
const campoArea = document.querySelector("#areaContato");
const campoMensagem = document.querySelector("#mensagemContato");
const resultadoContato = document.querySelector("#resultadoContato");

function mostrarErro(texto) {
    resultadoContato.textContent = texto;
    resultadoContato.classList.remove("sucesso");
    resultadoContato.classList.add("erro");
}

function mostrarSucesso(texto) {
    resultadoContato.textContent = texto;
    resultadoContato.classList.remove("erro");
    resultadoContato.classList.add("sucesso");
}

formularioContato.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome = campoNome.value.trim();
    let email = campoEmail.value.trim();
    let area = campoArea.value.trim();
    let mensagem = campoMensagem.value.trim();
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nome === "" || email === "" || area === "" || mensagem === "") {
        mostrarErro("Preencha todos os campos antes de enviar.");
        return;
    }

    if (nome.length < 3) {
        mostrarErro("Digite um nome com pelo menos 3 caracteres.");
        return;
    }

    if (/\d/.test(nome)) {
        mostrarErro("O nome não deve conter números.");
        return;
    }

    if (emailValido === false) {
        mostrarErro("Digite um e-mail válido.");
        return;
    }

    if (mensagem.length < 10) {
        mostrarErro("A mensagem deve ter pelo menos 10 caracteres.");
        return;
    }

    mostrarSucesso("Contato enviado com sucesso.");
    formularioContato.reset();
});

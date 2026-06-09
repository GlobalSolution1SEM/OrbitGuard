const numeroPergunta = document.querySelector("#numeroPergunta");
const placarQuiz = document.querySelector("#placarQuiz");
const progressoQuiz = document.querySelector("#progressoQuiz");
const perguntaQuiz = document.querySelector("#perguntaQuiz");
const alternativasQuiz = document.querySelector("#alternativasQuiz");
const feedbackQuiz = document.querySelector("#feedbackQuiz");
const tituloFeedback = document.querySelector("#tituloFeedback");
const resumoResposta = document.querySelector("#resumoResposta");
const botaoProxima = document.querySelector("#botaoProxima");
const conteudoQuiz = document.querySelector("#conteudoQuiz");
const resultadoFinal = document.querySelector("#resultadoFinal");
const tituloResultado = document.querySelector("#tituloResultado");
const textoResultado = document.querySelector("#textoResultado");
const refazerQuiz = document.querySelector("#refazerQuiz");

const perguntas = [
    {
        pergunta: "Qual e a massa aproximada de todos os objetos espaciais em orbita da Terra?",
        opcoes: ["Mais de 16.200 toneladas", "Cerca de 900 toneladas", "Apenas 120 toneladas", "Menos de 50 toneladas"],
        correta: 0,
        resumo: "A ESA estima mais de 16.200 toneladas de objetos espaciais em orbita. Esse volume mostra por que cada decisao orbital precisa considerar risco e consequencia."
    },
    {
        pergunta: "Quantos objetos espaciais sao rastreados regularmente por redes de vigilancia?",
        opcoes: ["Cerca de 4.000", "Cerca de 44.870", "Cerca de 1.000", "Cerca de 800"],
        correta: 1,
        resumo: "A ESA indica cerca de 44.870 objetos rastreados. Mesmo assim, muitos fragmentos menores continuam fora do monitoramento direto."
    },
    {
        pergunta: "Quantos fragmentos entre 1 cm e 10 cm podem existir em orbita?",
        opcoes: ["12 mil", "80 mil", "1,2 milhao", "300 mil"],
        correta: 2,
        resumo: "Modelos da ESA estimam 1,2 milhao de objetos entre 1 cm e 10 cm. Eles sao pequenos, mas podem causar danos graves por causa da velocidade."
    },
    {
        pergunta: "Qual e a melhor descricao para a Sindrome de Kessler?",
        opcoes: ["Falha de bateria em satelites", "Cadeia de colisoes que gera mais detritos", "Perda de sinal por tempestade solar", "Queda controlada de foguetes"],
        correta: 1,
        resumo: "A Sindrome de Kessler e uma reacao em cadeia: colisao gera detritos, que aumentam o risco de novas colisoes."
    },
    {
        pergunta: "Por que um fragmento pequeno pode ser perigoso para um satelite?",
        opcoes: ["Porque em orbita ele se move muito rapido", "Porque sempre carrega combustivel", "Porque emite radiacao", "Porque atrai outros satelites"],
        correta: 0,
        resumo: "A NASA explica que detritos orbitais podem se mover a velocidades muito altas. O impacto de um objeto pequeno pode danificar estruturas sensiveis."
    },
    {
        pergunta: "Qual velocidade media de impacto a NASA cita para detritos orbitais?",
        opcoes: ["Cerca de 800 km/h", "Cerca de 5.000 km/h", "Cerca de 36.000 km/h", "Cerca de 120 km/h"],
        correta: 2,
        resumo: "A NASA cita velocidade media de impacto em torno de 22.370 mph, aproximadamente 36.000 km/h. Por isso o tamanho do fragmento nao conta sozinho."
    },
    {
        pergunta: "O que aconteceu em 2024 que reforcou a preocupacao com fragmentacoes?",
        opcoes: ["Nenhum novo objeto foi rastreado", "Eventos adicionaram mais de 3.000 objetos rastreados", "Todos os detritos foram removidos", "A orbita baixa ficou vazia"],
        correta: 1,
        resumo: "Segundo a ESA, eventos de fragmentacao em 2024 adicionaram pelo menos mais de 3.000 objetos rastreados."
    },
    {
        pergunta: "Por que a janela de contato e importante em uma decisao orbital?",
        opcoes: ["Porque define se ainda ha tempo para enviar comando", "Porque muda a cor do satelite", "Porque elimina o detrito automaticamente", "Porque mede a temperatura da Terra"],
        correta: 0,
        resumo: "Mesmo com risco alto, uma manobra depende de tempo, contato e viabilidade de comando. Essa e a ideia do Action Window no OrbitGuard."
    },
    {
        pergunta: "Qual acao seria mais fraca diante de um alerta orbital serio?",
        opcoes: ["Comparar risco, tempo e impacto", "Registrar a justificativa da decisao", "Ignorar o alerta sem analisar contexto", "Preparar uma manobra se houver janela"],
        correta: 2,
        resumo: "Ignorar um alerta sem contexto aumenta a chance de erro. O operador precisa entender risco, urgencia, confianca e consequencia."
    },
    {
        pergunta: "Por que apenas parar de gerar novos detritos nao resolve tudo?",
        opcoes: ["Porque os detritos existentes ainda podem colidir e se fragmentar", "Porque satelites nao precisam de orbita", "Porque radares param de funcionar", "Porque todo detrito cai no mesmo dia"],
        correta: 0,
        resumo: "A ESA alerta que a populacao de detritos pode continuar crescendo por fragmentacoes. Por isso mitigacao e remocao ativa entram na discussao."
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarPergunta() {
    let item = perguntas[perguntaAtual];

    numeroPergunta.textContent = "Pergunta " + String(perguntaAtual + 1).padStart(2, "0");
    placarQuiz.textContent = "Pontuacao: " + pontuacao;
    progressoQuiz.style.width = ((perguntaAtual) / perguntas.length) * 100 + "%";
    perguntaQuiz.textContent = item.pergunta;
    alternativasQuiz.innerHTML = "";
    feedbackQuiz.classList.remove("mostrar");
    botaoProxima.disabled = true;
    respondeu = false;

    item.opcoes.forEach(function(opcao, indice) {
        let botao = document.createElement("button");
        botao.classList.add("alternativa");
        botao.textContent = opcao;

        botao.addEventListener("click", function() {
            responderPergunta(indice, botao);
        });

        alternativasQuiz.append(botao);
    });

    if (perguntaAtual === perguntas.length - 1) {
        botaoProxima.textContent = "Ver resultado";
    } else {
        botaoProxima.textContent = "Proxima pergunta";
    }
}

function responderPergunta(indiceEscolhido, botaoEscolhido) {
    if (respondeu === true) {
        return;
    }

    respondeu = true;
    let item = perguntas[perguntaAtual];
    let botoes = document.querySelectorAll(".alternativa");

    botoes.forEach(function(botao, indice) {
        botao.disabled = true;

        if (indice === item.correta) {
            botao.classList.add("correta");
        }
    });

    if (indiceEscolhido === item.correta) {
        pontuacao++;
        tituloFeedback.textContent = "Resposta correta";
    } else {
        botaoEscolhido.classList.add("errada");
        tituloFeedback.textContent = "Resposta incorreta";
    }

    placarQuiz.textContent = "Pontuacao: " + pontuacao;
    resumoResposta.textContent = item.resumo;
    feedbackQuiz.classList.add("mostrar");
    botaoProxima.disabled = false;
}

function mostrarResultado() {
    progressoQuiz.style.width = "100%";
    conteudoQuiz.classList.add("escondido");
    resultadoFinal.classList.remove("escondido");
    placarQuiz.textContent = "Pontuacao: " + pontuacao + " de " + perguntas.length;

    if (pontuacao >= 8) {
        tituloResultado.textContent = "Nivel operador orbital";
        textoResultado.textContent = "Voce entendeu bem a relacao entre detritos, risco, tempo e decisao. Esse e o tipo de leitura que o OrbitGuard tenta apoiar.";
    } else if (pontuacao >= 5) {
        tituloResultado.textContent = "Nivel analise em progresso";
        textoResultado.textContent = "Voce reconhece parte do problema, mas ainda precisa conectar melhor dados orbitais com acao operacional.";
    } else {
        tituloResultado.textContent = "Nivel alerta inicial";
        textoResultado.textContent = "O resultado mostra como o tema pode parecer distante. Detritos pequenos, velocidade alta e decisoes atrasadas criam risco real.";
    }
}

botaoProxima.addEventListener("click", function() {
    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
    } else {
        mostrarPergunta();
    }
});

refazerQuiz.addEventListener("click", function() {
    perguntaAtual = 0;
    pontuacao = 0;
    conteudoQuiz.classList.remove("escondido");
    resultadoFinal.classList.add("escondido");
    mostrarPergunta();
});

mostrarPergunta();

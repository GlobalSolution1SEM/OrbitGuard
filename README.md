# OrbitGuard

OrbitGuard e uma landing page interativa sobre apoio a decisao orbital em cenarios de risco causados por lixo espacial.

A proposta apresenta um console conceitual para ajudar operadores a interpretar alertas, avaliar janelas de contato e justificar decisoes diante de possiveis colisoes orbitais.

## O Que É O OrbitGuard

OrbitGuard e uma proposta de solucao digital voltada ao apoio de decisoes em operacoes orbitais.

O projeto parte de um problema real: a quantidade crescente de lixo espacial em volta da Terra aumenta o risco de colisao com satelites em funcionamento.

A ideia do OrbitGuard nao e remover detritos fisicamente. A solucao atua antes da decisao, organizando dados criticos para que o operador entenda o risco e escolha a melhor resposta possivel.

Na proposta, o sistema funciona como um console de decisao orbital. Ele transforma alertas tecnicos em uma leitura mais clara sobre risco, tempo disponivel, impacto esperado e possiveis acoes.

## Problema Abordado

Satelites sustentam servicos importantes como GPS, internet, comunicacao, previsao do tempo, monitoramento ambiental e respostas a emergencias.

Quando um detrito espacial se aproxima de um satelite, o operador precisa decidir rapidamente se deve monitorar, manobrar, priorizar comunicacao ou escalar o alerta.

Essa decisao pode ser dificil porque envolve tempo curto, muitos dados tecnicos e impacto direto em servicos usados na Terra.

O OrbitGuard foi pensado para reduzir essa incerteza, apresentando informacoes essenciais de forma objetiva e justificavel.

## Como A Solucao Funciona

O fluxo conceitual do OrbitGuard organiza a decisao em etapas:

1. O alerta orbital e recebido.
2. O sistema resume o risco principal no Risk Brief.
3. O Debris DNA apresenta informacoes sobre o objeto detectado.
4. A Action Window mostra tempo restante e janela de contato.
5. O simulador compara possiveis impactos da decisao.
6. O console sugere uma acao operacional.
7. A decisao fica registrada com contexto e justificativa.

Esse fluxo ajuda a transformar um alerta complexo em uma decisao mais compreensivel, sem depender apenas de tabelas extensas ou sinais soltos.

## Objetivo

O projeto busca comunicar, de forma visual e objetiva, como detritos espaciais podem afetar satelites e servicos essenciais na Terra.

A pagina tambem mostra como o OrbitGuard poderia organizar informacoes criticas para apoiar uma decisao mais clara em pouco tempo.

## Funcionalidades

- Landing page com navegacao entre secoes.
- Hero visual com identidade espacial escura.
- Secoes de Problema, Tecnologia, Objetivos, Publico-alvo, Beneficios, Aplicacao e Contato.
- Carrossel dinamico na secao de objetivos.
- Troca de tema com tres opcoes visuais.
- Formulario de contato com validacao em JavaScript.
- Quiz dinamico com 10 perguntas sobre lixo espacial.
- Feedback explicativo apos cada resposta do quiz.
- Resultado final com pontuacao.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Flexbox
- Git e GitHub

O projeto foi desenvolvido sem frameworks ou bibliotecas externas de JavaScript.

## Estrutura De Pastas

```text
OrbitGuard/
|-- assets/
|   |-- debris-field.png
|   |-- debris-threat.png
|   |-- hero-orbitguard.png
|   |-- objetivo-acoes.png
|   |-- objetivo-registro.png
|   |-- objetivo-risco.png
|   |-- objetivo-sobrecarga.png
|   |-- orbital-infrastructure.png
|   `-- publico-orbitguard.png
|-- css/
|   |-- quiz.css
|   |-- responsive.css
|   `-- styles.css
|-- js/
|   |-- carrossel.js
|   |-- quiz.js
|   |-- tema.js
|   `-- validacao.js
|-- AI.md
|-- index.html
|-- LICENSE
|-- quiz.html
`-- README.md
```

## Paginas

### `index.html`

Pagina principal do OrbitGuard.

Contem a apresentacao da solucao, navegacao por secoes, carrossel, troca de tema, formulario e chamada para o quiz.

### `quiz.html`

Pagina separada com quiz dinamico.

O quiz contem 10 perguntas sobre lixo espacial, risco orbital e tomada de decisao. Cada resposta apresenta um resumo curto para reforcar o aprendizado.

## Arquivos JavaScript

### `js/carrossel.js`

Controla os slides da secao de objetivos.

Permite avancar, voltar e selecionar itens pelos indicadores.

### `js/tema.js`

Controla a troca de tema da pagina.

As opcoes alteram as cores principais do layout mantendo a identidade visual escura.

### `js/validacao.js`

Valida o formulario de contato.

Impede o envio com campos vazios e verifica informacoes basicas antes de mostrar a mensagem final.

### `js/quiz.js`

Controla o quiz dinamico.

Exibe perguntas, alternativas, feedback de acerto ou erro, resumo explicativo e pontuacao final.

## Como Executar

1. Baixe ou clone o repositorio.
2. Abra o arquivo `index.html` no navegador.
3. Para acessar o quiz diretamente, abra `quiz.html`.

Tambem e possivel navegar para o quiz pela chamada presente no final da secao Aplicacao.

## Fontes De Conteudo

Algumas perguntas do quiz foram baseadas em dados e materiais educativos sobre lixo espacial:

- [ESA Space Debris Statistics](https://sdup.esoc.esa.int/discosweb/statistics/)
- [ESA Space Environment Report 2025](https://www.esa.int/Space_Safety/Space_Debris/ESA_Space_Environment_Report_2025)
- [NASA - What Is Orbital Debris?](https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-orbital-debris-grades-5-8/)

## Equipe

- Vitor - RM 569720
- Joao - RM 570569
- Joao - RM 569934
- Davi - RM 572337
- Gabriel - RM 570508

## Observacao Sobre Uso De IA

O arquivo `AI.md` registra interacoes em que houve apoio de inteligencia artificial durante o desenvolvimento.

Esse registro descreve o que foi solicitado, o que foi retornado e quais ajustes foram aceitos ou rejeitados no projeto.

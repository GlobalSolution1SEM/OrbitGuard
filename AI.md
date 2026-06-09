# Registro de uso de Inteligencia Artificial

Este arquivo registra as interações com a Inteligência Artificial para auxiliar no projeto. A IA utilizada como apoio foi o **Codex**

A IA foi usada como ferramenta auxiliar para revisar ideias, sugerir melhorias, ajustar trechos de interface, apoiar a escrita de textos, orientar nas logicas do codigo JavaScript e gerar imagens para uso no site.

## Interacao 01 - Ajuste visual da landing page

**Prompt solicitado para a IA**

> Quero que me ajude na identidade visual da landing page para um tema mais escuro e espacial. Quero sugestao de cores que remetam a temas espaciais e alguns ajustes no front

**O que a IA retornou**

O Codex sugeriu uma direcao visual mais escura e espacial para a landing page, com:

- fundo preto e grafite;
- textos em branco e prata;
- acento laranja orbital;
- poucos elementos coloridos;
- visual mais parecido com uma pagina de produto espacial.

**O que foi alterado ou rejeitado e o motivo**

Foi aproveitada a direcao visual escura e a pagina foi ajustada para combinar com temas espaciais e com a proposta do OrbitGuard.
No CSS, a paleta passou a usar tons de preto, grafite, cinza e laranja orbital nas variaveis de cor.
No hero, foi usado um fundo espacial escuro para criar mais impacto visual logo na primeira tela.
Foram rejeitados azul, verde, ciano e efeitos neon, pois deixavam o layout com aparencia artificial e muito chamativa.
Tambem foram evitados blocos com cara de painel generico, porque a proposta era parecer uma solucao espacial mais seria.

## Interacao 02 - Estrutura do front-end

**Prompt solicitado para a IA**

> Me ajude a organizar a estrutura do front da landing page. Preciso de ajustar nos textos, imagens, botoes e divs para a pagina ficar mais bonita e facil de navegar.

**O que a IA retornou**

O Codex sugeriu organizar a pagina em blocos principais, seguindo uma ordem visual simples:

- area de apoio visual no hero
- secao Problema logo depois da primeira tela
- secao Tecnologia com texto e lista de tecnologias
- secao Objetivos com carrossel
- E uma estrutura pré-definida para as seções seguintes como publico-alvo, beneficios e aplicação.

Tambem foi sugerido deixar os textos principais em areas mais visiveis e usar divs apenas para agrupar elementos relacionados.

**O que foi alterado ou rejeitado e o motivo**

- O conteudo principal do hero foi colocado dentro da area `inicio`, com titulo, subtitulo e botoes juntos.
- O titulo principal foi separado em duas linhas para dar mais destaque ao nome OrbitGuard.
- Os botoes foram agrupados em `botoes-inicio`, para facilitar o alinhamento pelo CSS.
- O pequeno fluxo de decisao foi colocado no final do hero para reforcar a ideia de risco, analise e acao.
- Foram rejeitadas divs sem funcao clara, porque deixariam o HTML mais dificil de entender.

## Interacao 03 - Textos curtos e organizacao de conteudo

**Prompt solicitado para a IA**

> Revise os textos da pagina para ficarem curtos e objetivos. Cada secao precisa estar clara, com no maximo dois paragrafos e linguagem facil de entender.

**O que a IA retornou**

O Codex sugeriu reduzir textos longos e deixar as secoes mais objetivas, especialmente a secao Problema.
Também sugeriu usar frases mais diretas para apresentar risco, decisao e impacto.

**O que foi alterado ou rejeitado e o motivo**

- Os textos foram adaptados para ficarem mais curtos e escaneaveis.
- Na secao Problema, o texto foi reduzido para explicar detritos orbitais, risco de colisao e impacto em poucos blocos.
- Na secao Tecnologia, os paragrafos foram mantidos curtos e a lista de ferramentas foi separada do texto principal.
- Na secao Objetivos, cada item do carrossel ficou com uma frase curta para facilitar a leitura.
- Foram rejeitados paragrafos longos com explicacoes muito detalhadas, porque deixavam a landing page cansativa.

Alguns textos explicativos foram mantidos em elementos que nao eram paragrafos, para preservar informacao sem quebrar a regra de limite por secao.

## Interacao 04 - Ajustes de semantica no HTML e CSS

**Prompt solicitado para a IA**

> Me ajude a revisar a semantica do HTML e a organizacao do CSS. Quero deixar o codigo mais correto, com secoes bem definidas e estrutura facil de manter.

**O que a IA retornou**

O Codex sugeriu ajustes para melhorar a estrutura do HTML, como:
- manter IDs nas secoes para a navegacao do menu;

Tambem sugeriu ajustes no CSS, como:

- organizar estilos por partes da pagina;
- manter variaveis CSS para cores e medidas;

**O que foi alterado ou rejeitado e o motivo**

- O HTML foi ajustado para deixar a estrutura mais semantica e clara.
- Os IDs das secoes foram mantidos para o menu navegar corretamente entre `problema`, `tecnologia`, `objetivos`, `publico-alvo`, `beneficios` e `aplicacao` .
- O CSS foi organizado em ordem, como `cabecalho`, `inicio`, `problema`, `tecnologia`, `objetivos` e `rodape` para fácil manutenção.
- E utilizar variaveis para cores e medidas;


## Interacao 05 - Estrutura do carrossel

**Prompt solicitado para a IA**

> Me ajude a revisar por que meu carrossel nao esta funcionando. Nao sei se o problema esta na logica ou na selecao dos elementos do DOM. Quero corrigir usando JavaScript puro, sem framework ou biblioteca.

**O que a IA retornou**

O Codex explicou que o problema estava na tentativa de controlar varios slides selecionando apenas um elemento.

O codigo que nao estava funcionando corretamente:

```js
const itemCarrossel = document.querySelector(".item-carrossel");
const botaoProximo = document.querySelector(".botao-carrossel");

let posicao = 0;

botaoProximo.addEventListener("click", function() {
    posicao++;
    itemCarrossel[posicao].classList.add("ativo");
});
```

Essa parte do codigo estava dando problema porque `document.querySelector` pega apenas o primeiro elemento encontrado.

Como `itemCarrossel` nao era uma lista, o acesso `itemCarrossel[posicao]` quebrava a logica do carrossel.

O Codex sugeriu usar uma lista de itens do carrossel com `querySelectorAll` e controlar qual deles recebe a classe `ativo`.

Tambem foi sugerida uma estrutura de carrossel na secao Objetivos, com quatro itens:

- reduzir sobrecarga;
- explicar o risco;
- comparar acoes;
- registrar decisao.

Tambem explicou em chat uma logica simples para o JavaScript, usando:

- `document.querySelector`;
- `querySelectorAll`;
- `addEventListener`;
- atributos `data-*` no HTML;
- uma variavel de posicao;
- `classList.add`;
- `classList.remove`;
- classe `ativo`.

**O que foi alterado ou rejeitado e o motivo**

- A explicacao foi usada para ajustar a logica do carrossel no arquivo JavaScript.
- A selecao de apenas um item foi trocada por uma lista de slides usando `querySelectorAll`.
- Foi criada uma variavel para guardar o slide atual e controlar qual item deveria aparecer.
- Tambem foi criada uma funcao para remover a classe `ativo` de todos os slides e adicionar essa classe apenas no slide atual.
- No botao proximo, a logica foi corrigida para avancar os slides e voltar ao primeiro item ao chegar no final.
- No botao anterior, a logica foi corrigida para voltar os slides e ir para o ultimo item ao passar do primeiro.
- Os indicadores foram conectados ao JavaScript para trocar de slide quando o usuario clicar em cada bolinha.
- Tambem foi usado `data-*` no HTML, como `data-item`, `data-anterior`, `data-proximo` e `data-indicador`.
- Esse ajuste ajudou a separar melhor os elementos usados pelo JavaScript das classes usadas para estilizar no CSS e foi um conhecimento - agregado no projeto.

A ideia inicial foi mantida, mas a forma de selecionar e trocar os slides foi corrigida para funcionar corretamente.

## Interacao 06 - Animacoes em CSS

**Prompt solicitado para a IA**

> Me ajude a pensar em animacoes CSS para deixar a pagina com mais clima espacial, mas sem exagerar e sem usar efeito neon.

**O que a IA retornou**

O Codex sugeriu animacoes discretas em CSS para reforcar o clima espacial, como:

- movimento sutil no fundo do hero;
- orbitas com flutuacao leve;
- entrada suave do conteudo;
- animacao discreta na linha da marca.

**O que foi alterado ou rejeitado e o motivo**

- Foram aceitas animacoes discretas no fundo do hero, para dar sensacao de profundidade sem atrapalhar a leitura.
- A animacao das orbitas foi mantida com movimento leve, usando uma ideia parecida com `flutuarOrbita`.
- A entrada suave do conteudo foi mantida para o hero aparecer de forma menos seca, usando uma ideia parecida com `mostrarConteudo`.
- A linha da marca recebeu animacao discreta, usando uma ideia parecida com `sinalMarca`.
- Foram rejeitadas animacoes de neon piscando, pois fugiam da identidade escura escolhida.
- Tambem foram rejeitados letreiros passando na parte inferior, porque deixavam a tela com aparencia poluida.
- A linha forte de varredura atravessando a tela tambem foi removida, pois chamava mais atencao do que o conteudo.
- O texto vertical de descoberta foi retirado porque não ajudava na navegacao nem na explicacao do produto.

## Interacao 07 - Geracao de imagens

**Prompt solicitado para a IA**

> Me ajude a criar imagens relacionadas ao tema do OrbitGuard. Quero assets com visual espacial escuro, tons de preto e laranja orbital, sem texto dentro da imagem.

Depois:

> Agora preciso de quatro imagens para o carrossel de objetivos, cada uma representando uma parte da solucao: sobrecarga, risco, ações e registro.

**O que a IA retornou**

O Codex gerou imagens proprias para o projeto, incluindo imagens de apoio para o projeto

- `objetivo-sobrecarga.png`;
- `objetivo-risco.png`;
- `objetivo-acoes.png`;
- `objetivo-registro.png`;
- `publico-orbitguard.png`;
- `orbital-infrastructure.png`;

As imagens seguiram o tema escuro, espacial e com acentos em laranja orbital.

**O que foi alterado ou rejeitado e o motivo**

As imagens geradas foram usadas como assets locais na pasta `assets`.


## Interacao 08 - Implementacao dos temas de fundo

**Prompt solicitado para a IA**

> Me ajude a implementar as tres opcoes de tema de fundo da pagina estou sem ideia das cores que podem combinar com site. Os botoes ja existem e o script também, preciso somente da definiçaõ das cores.

**O que a IA retornou**

O Codex sugeriu manter tres temas:

- Orbital, como tema principal atual;
- Eclipse, com preto e vermelho escuro;
- Lunar, com preto, cinza frio e prata.

Tambem foi sugerido usar variaveis CSS para trocar as cores principais sem duplicar todo o CSS.

**O que foi alterado ou rejeitado e o motivo**

- O CSS dos botoes foi criado para remover a aparencia padrao do navegador.
- O controle de tema passou a parecer um seletor compacto dentro da navbar.
- Foram adicionadas variaveis de fundo para os temas Orbital, Eclipse e Lunar.
- O fundo geral da pagina passou a usar variaveis no `body::before`.
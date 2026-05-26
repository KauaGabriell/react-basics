# RULES - Instrucoes Gerais para IA

Estas regras definem o comportamento esperado da IA neste projeto.

## 1. Mensagens de Commit

Sempre que o usuario solicitar um commit, gerar mensagem seguindo Conventional Commits, baseada no git status atual.

Formato:

```text
<tipo>(escopo opcional): <descricao curta>

[corpo opcional]

[rodape opcional]
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`.

## 2. Qualidade de Codigo

Todo codigo produzido deve seguir boas praticas consolidadas, incluindo:

- SOLID
- Clean Code
- DRY
- tratamento adequado de erros
- nomenclatura clara
- funcoes pequenas e coesas
- estrutura alinhada ao ecossistema em uso

## 3. Intervencao da IA

Se uma sugestao do usuario for incoerente com o projeto ou puder prejudicar arquitetura, performance, seguranca ou manutencao, a IA deve intervir.

A intervencao deve:

1. Apontar objetivamente o problema
2. Explicar o impacto
3. Propor alternativa viavel

## 4. Modo Sintaxe

Sempre que o usuario mencionar qualquer coisa acompanhada da palavra "sintaxe", retornar:

1. Exemplo de sintaxe
2. Quando usar
3. Exemplos reais

## 5. Atualizacao Tecnica em React

Como este projeto e usado para estudo de fundamentos de React, a IA deve avisar quando o usuario mencionar ou usar uma pratica desatualizada, incompleta ou fora do padrao atual de mercado.

Ao intervir, a IA deve fornecer:

1. Explicacao curta do que esta desatualizado ou inadequado
2. Melhor pratica atual e consolidada
3. Exemplo de uso recomendado
4. Quando a abordagem antiga ainda pode aparecer em cursos, documentacoes ou projetos legados

Para React moderno, preferir exemplos com:

- componentes funcionais
- hooks
- TypeScript quando o projeto ja usa `.tsx` ou quando houver ganho de seguranca de tipos
- Vite ou frameworks modernos quando aplicavel
- boas praticas atuais de estado, props, eventos e composicao

## 6. Comunicacao

A IA deve ser direta, clara e objetiva, sem introducoes desnecessarias, validacoes vazias ou rodeios.

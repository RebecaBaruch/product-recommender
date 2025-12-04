# 🚀 Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web.

-----

## Missão

Desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. A solução implementa a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, recebendo recomendações de produtos correspondentes.

-----

## ✨ Implementações e Destaques do Projeto (Entregáveis)

O desenvolvimento deste projeto foi além dos requisitos básicos, com foco na robustez, modularidade, UX e acessibilidade:

  * **Lógica de Negócios Central:** Implementação completa do serviço de recomendação (`recommendation.service.js`) para determinar pontuações e lidar com desempates (tie-breaking) em cenários de `SingleProduct` e `MultipleProducts`.
  * **Componente Modular:** Criação do componente **`MultiSelect`** para melhorar a usabilidade e a seleção de múltiplas preferências pelo usuário.
  * **Design Responsivo:** O *layout* da aplicação foi ajustado utilizando **Tailwind CSS** para garantir uma visualização e funcionalidade completas em dispositivos **mobile, tablet e desktop**.
  * **Melhorias de Acessibilidade (A11y):** Implementação de atributos ARIA (`aria-*`) e melhorias semânticas para garantir o uso adequado por leitores de tela e tecnologias assistivas.
  * **Limpeza de Formulário:** Adicionada funcionalidade de **limpeza completa** (reset) do formulário e dos resultados.
  * **Cobertura de Testes:** Ampliada a cobertura de testes unitários (`recommendation.service.js`) para validar a lógica de *score* e cenários de empate.
  * **Estrutura Monorepo:** Organização do projeto utilizando **Lerna** e **Yarn Workspaces** para gerenciar o `frontend` e o `backend` como pacotes separados.

-----

## Contexto

Este projeto utiliza um **Monorepo** para gerenciar o `frontend` (React.js) e o `backend` (json-server) em um único repositório, facilitando a execução e o desenvolvimento.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

  * **React.js:** Para o desenvolvimento do front-end.
  * **Tailwind CSS:** Para estilização e desenvolvimento de layout responsivo.
  * **json-server:** Para simular um servidor RESTful com dados de produtos.
  * **Lerna / Yarn Workspaces:** Para gerenciar a arquitetura de Monorepo.

-----

## Requisitos Técnicos

### Versão do Node.js

Este projeto requer Node.js versão **18.3 ou superior**.

#### Usando `nvm` (Node Version Manager):

1.  Instale `nvm` seguindo as instruções em: `https://github.com/nvm-sh/nvm`
2.  Instale e use a versão 18.3 do Node.js: `nvm install 18.3` & `nvm use 18.3`

-----

## Foco do Desenvolvimento

O foco da implementação concentrou-se principalmente nos seguintes arquivos e componentes:

1.  `App.js`: Lógica principal para gerenciamento de estado e fluxo de recomendação.
2.  `Form.js`: Componente que processa as entradas do usuário, gera e exibe as recomendações.
3.  `recommendation.service.js`: Implementação da lógica de negócios e *score* de produtos.
4.  `MultiSelect.js`: Novo componente modular para seleção de múltiplas preferências.

-----

## Requisitos do Desafio

  * Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
  * Utilizar React.js para o desenvolvimento do front-end.
  * Consumir a API fornecida pelo json-server para obter os dados dos produtos.
  * Seguir as boas práticas de desenvolvimento, organização de código e implementar testes unitários.

-----

## 🏃 Como Executar (Monorepo)

O projeto está configurado como um Monorepo gerenciado por Lerna/Yarn Workspaces.

1.  Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Instale as dependências na raiz (instala dependências de todos os pacotes):

    ```bash
    yarn install
    ```

3.  Para instalar o projeto e as dependências internas, execute:

    ```bash
    ./install.sh
    ```

4.  Inicie a aplicação (inicia front-end e back-end simultaneamente):

    ```bash
    yarn start
    ```

### Scripts Disponíveis

  * `start`: Inicia o frontend e o backend simultaneamente (`lerna run --parallel start`).
  * `start:frontend`: Inicia apenas a parte frontend da aplicação.
  * `start:backend`: Inicia apenas a parte backend da aplicação.
  * `dev`: Alias para iniciar simultaneamente a parte frontend e backend (alternativa ao `start`).
  * `test`: Executa os testes unitários.

-----

## Critérios de Aceite (Implementados)

1.  O serviço de recomendação deve receber as preferências e funcionalidades do usuário através de um formulário.
2.  O serviço deve retornar recomendações com base nas preferências e funcionalidades selecionadas.
3.  Se o tipo de recomendação for **"SingleProduct"**, o serviço retorna apenas um produto que melhor corresponde.
4.  Se o tipo de recomendação for **"MultipleProducts"**, o serviço retorna uma lista de produtos que correspondem.
5.  Em caso de empate na seleção, o serviço retorna o **último produto** que atende aos critérios (lógica de desempate implementada).
6.  O serviço é capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7.  O serviço é **modular** e facilmente **extensível** para futuras atualizações.

-----

## Autor

Desenvolvido por Rebeca Baruch

## Licença

Este projeto está licenciado sob a [Licença MIT](https://www.google.com/search?q=LICENSE).

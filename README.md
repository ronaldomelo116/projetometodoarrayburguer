# Método Burguers 🍔

Este é um projeto prático desenvolvido com HTML, CSS e JavaScript para demonstrar e facilitar o entendimento dos principais métodos de array do JavaScript: **forEach**, **map**, **reduce** e **filter**.

A aplicação simula o cardápio de uma hamburgueria, onde o usuário pode interagir com os botões para aplicar os métodos de array sobre os dados dos produtos e visualizar os resultados na tela.

## 🎯 Objetivo do Projeto

O principal objetivo deste projeto é servir como uma ferramenta de estudo visual e interativa para entender como os métodos de array do JavaScript manipulam dados.

## 🚀 Funcionalidades

A aplicação possui quatro botões principais, cada um representando um método de array:

*   **Ver tudo (forEach):** Percorre a lista de hambúrgueres e os renderiza na tela, mostrando a imagem, nome e preço. É a visualização padrão.
*   **Mapear (map):** Aplica a regra de negócio para gerar um desconto de 10% em todos os lanches, gerando um novo array com os valores atualizados, sem modificar a lista original.
*   **Somar tudo (reduce):** Simula a ação de fechar a conta do restaurante. Ele soma o valor de todos os hambúrgueres disponíveis e exibe o valor total da compra.
*   **Filtrar (filter):** Analisa todos os hambúrgueres do cardápio e filtra apenas aqueles que possuem a propriedade `vegan: true`, exibindo apenas as opções veganas para o usuário.

Em todas as ações, uma pequena explicação sobre o comportamento do método utilizado é exibida na tela.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica do projeto.
*   **CSS3:** Estilização da página (variáveis, flexbox, responsividade, etc).
*   **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e uso dos métodos de array (`forEach`, `map`, `reduce`, `filter`).

## 📁 Estrutura de Arquivos

*   `index.html`: Arquivo principal contendo a estrutura da página.
*   `style.css`: Arquivo com todas as regras de estilização da aplicação.
*   `script.js`: Arquivo contendo toda a lógica de interação, funções e métodos aplicados aos dados.
*   `products.js`: Arquivo simulando um banco de dados, contendo um array de objetos com as informações de cada hambúrguer (nome, preço, se é vegano e caminho da imagem).
*   `assets/`: Pasta contendo os recursos visuais (imagens dos hambúrgueres).


---

Feito com 💡 para estudos práticos de JavaScript!

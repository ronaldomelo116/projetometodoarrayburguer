# Método Burguers 🍔🍟

![Preview do Projeto](https://github.com/ronaldomelo116/projetometodoarrayburguer/blob/main/preview-metodo-burguers.gif?raw=true)

Uma aplicação web interativa desenvolvida para ensinar e demonstrar na prática o funcionamento dos quatro principais métodos de iteração de arrays no JavaScript: **`forEach()`**, **`map()`**, **`reduce()`** e **`filter()`**.

Inspirada na identidade visual de uma hamburgueria, a aplicação simula o cardápio e o fluxo de pedidos de um restaurante, aplicando manipulações em tempo real sobre os dados e renderizando o resultado instantaneamente na tela.

---

## 🎯 Objetivo

Servir como um guia visual e didático para estudantes e desenvolvedores entenderem o comportamento, sintaxe e casos de uso de cada método de array do JavaScript, facilitando a fixação de conceitos essenciais do desenvolvimento front-end.

---

## 🚀 Funcionalidades

A aplicação conta com quatro ações principais na barra superior, cada uma representando um método de array:

### 1. 👁️ Ver tudo — `forEach()`
* **Comportamento:** Percorre a lista de produtos sem alterar o array original e renderiza cada hambúrguer e sobremesa em formato de card.
* **Exibição:** Imagem, nome e preço formatado em Real brasileiro (`R$`).

### 2. 🏷️ Desconto — `map()`
* **Comportamento:** Percorre o array e retorna um **novo array** com os valores transformados.
* **Destaque visual:** Aplica **10% de desconto** em todos os produtos, exibindo o **preço antigo riscado** e uma **etiqueta com `-10%`** ao lado do preço com desconto.

### 3. 🧾 Somar tudo — `reduce()`
* **Comportamento:** Reduz todos os itens do array a um **único valor acumulado**.
* **Destaque visual:** Simula um cupom fiscal de fechamento de conta, listando todos os itens e calculando o **Total da Compra**.

### 4. 🍦 Filtrar — `filter()`
* **Comportamento:** Retorna um **novo array** contendo apenas os elementos que atendem a uma condição (`product.dessert === true`).
* **Destaque visual:** Exibe na tela apenas as sobremesas do cardápio, centralizadas de forma fluida.

---

## 💡 Recursos Visuais e Interatividade

* **Guias de Sintaxe com Efeito Foco:** Abaixo do cardápio, cada método exibe um bloco retrátil interativo (`<details>` / `<summary>`) contendo a explicação e uma imagem explicativa da sintaxe do método com efeito cinema/foco ao passar o mouse.
* **Design Responsivo Completo:** Layout otimizado para celulares, tablets e computadores, ajustando botões em grade 2x2 no mobile e cards em colunas fluidas.
* **Sticky Footer:** Rodapé fixado na base da página mesmo em visualizações com poucos itens, sem sobreposição de conteúdo.
* **Formatação Monetária:** Valores formatados automaticamente com a API nativa `Intl` / `toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica (`<header>`, `<main>`, `<details>`, `<footer>`).
* **CSS3:**
  * Flexbox e CSS Grid combinados para alinhamento dinâmico.
  * Variáveis CSS (`:root`) com paleta temática de cores.
  * Media Queries (`@media (max-width: 768px)`) para responsividade mobile.
  * Transições, pseudo-classes (`:hover`) e efeitos visuais com `box-shadow`.
* **JavaScript (ES6+):**
  * Métodos de Array: `forEach()`, `map()`, `reduce()`, `filter()`.
  * Manipulação dinâmica do DOM.
  * Spread Operator (`...`) e Arrow Functions.
* **Tipografia e Ícones:**
  * Fontes do Google: [Poppins](https://fonts.google.com/specimen/Poppins) e [Fraunces](https://fonts.google.com/specimen/Fraunces).
  * Ícones por [Flaticon Uicons](https://www.flaticon.com/uicons).

---

## 📁 Estrutura de Pastas

```bash
projetometodoarrayburguer/
│
├── assets/
│   └── img/                 # Imagens dos lanches, sobremesas e sintaxes
│
├── index.html               # Estrutura principal da página
├── style.css                # Estilos, variáveis e responsividade mobile
├── script.js                # Lógica de manipulação do DOM e métodos de array
├── products.js              # Base de dados (mock) com o array de produtos
└── README.md                # Documentação do projeto
```

---

## 💻 Como Executar o Projeto

1. Clone este repositório ou baixe os arquivos em sua máquina:
   ```bash
   git clone https://github.com/seu-usuario/projetometodoarrayburguer.git
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em qualquer navegador moderno (ou utilize a extensão **Live Server** no VS Code).

---

## 👨‍💻 Autor

Desenvolvido por **Ronaldo Mello**  
*Projeto criado para fins educacionais e aperfeiçoamento em JavaScript moderno.*

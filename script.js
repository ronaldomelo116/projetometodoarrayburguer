const buttonshowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonReduceAll = document.querySelector('.reduce-all');
const buttonfilterAll = document.querySelector('.filter-all');
const list = document.querySelector('ul');
const explanationMethod = document.querySelector('.explanation-method');
const forEachName = buttonshowAll.querySelector('.method-name').innerHTML;
const mapName = buttonMapAll.querySelector('.method-name').innerHTML;
const reduceName = buttonReduceAll.querySelector('.method-name').innerHTML;
const filterName = buttonfilterAll.querySelector('.method-name').innerHTML;
const instruction = document.querySelector('.instruction');

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    return newValue
}


function showAll(productAll) {
    let myli = '';
    productAll.forEach(product => {
        myli += `
    <li class="burger-item">
        <img class="burger-img" src=${product.src}>
        <p class="item-name">${product.name}</p>
        <p class="item-price">
        ${product.oldPrince ? `<span class="old-price">${formatCurrency(product.oldPrince)}</span>` : ''}
        ${formatCurrency(product.price)}
        ${product.discount ? `<span class="discount-badge">
        ${product.discount}</span>` : ''}</p>
    </li>
    `;
    });
    instruction.textContent = '';
    list.innerHTML = myli;
    explanationMethod.innerHTML = `<details>
    <summary>
    <span class="method-name explanation">${forEachName}</span>: 
    percorre cada item do array e executa uma ação para cada um.<br>Aqui, ele cria um card para cada produto do cardápio.
    </summary>
    <img src="./assets/img/sintaxe_foreach.png" class="sintaxe-img">
    </details>`;
}

function showPriceDescont() {
    const princeDescont = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
        discount: '-10%',
        oldPrince: product.price,
    }));

    showAll(princeDescont)
    explanationMethod.innerHTML = `<details>
    <summary>
    <span class="method-name explanation">${mapName}</span>: 
    percorre o array e cria um NOVO array com cada item transformado. Aqui, <br> ele aplica <span class="method-name explanation">10%</span> de desconto no preço de todos os produtos.
    </summary>
    <img src="./assets/img/sintaxe_map.png" class="sintaxe-img">
    </details>`;
}

function sumAll() {
    const someAll = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    let receiptItems = '';
    menuOptions.forEach(product => {
        receiptItems += `
         <p class="item-name" style="font-size: 1rem; margin-bottom: 0;">${product.name}</p>
         <p style="margin-bottom: 10px;">${formatCurrency(product.price)}</p>
        `;
    });

    list.innerHTML = `
         <li class="burger-item reduce-item">
            ${receiptItems}
            <hr style="border: 1px solid var(--bk-red); margin-bottom: 15px;">
            <p class="item-price">Total da Compra <br>${formatCurrency(someAll)}</p>
        </li>
        `
    explanationMethod.innerHTML = `<details>
    <summary>
    <span class="method-name explanation">${reduceName}</span>: percorre o array e junta todos os itens em um único valor.<br>Aqui, ele soma o preço de todos os produtos do cardápio.
    </summary>
    <img src="./assets/img/sintaxe_reduce.png" class="sintaxe-img">
    </details>`;
}

function filterList() {
    const filterJustDessert = menuOptions.filter(product => product.dessert);
    showAll(filterJustDessert);
    explanationMethod.innerHTML = `<details>
    <summary>
    <span class="method-name explanation">${filterName}</span>: cria um NOVO array apenas com os itens que passam em uma condição.<br>Aqui, ele filtrou e mostra apenas as <span class="method-name explanation">sopremesas</span>.
    </summary>
    <img src="./assets/img/sintaxe_filter.png" class="sintaxe-img">
    </details>`;
}

buttonshowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', showPriceDescont);
buttonReduceAll.addEventListener('click', sumAll);
buttonfilterAll.addEventListener('click', filterList);



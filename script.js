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
        <p class="item-price">${formatCurrency(product.price)}</p>
    </li>
    `;
    });
    list.innerHTML = myli;
    /* explanationMethod.innerHTML = '<span >forEach</span>: percorre cada item do array e executa uma ação para cada um.<br>Aqui, ele cria um card para cada produto do cardápio.'; */
    explanationMethod.innerHTML = `<span style ="color: var(--color-Black-Cherry); font-weight: bold;">${forEachName}</span>: percorre cada item do array e executa uma ação para cada um.<br>Aqui, ele cria um card para cada produto do cardápio.`;
}

function showPriceDescont() {
    const princeDescont = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));

    showAll(princeDescont)
    explanationMethod.innerHTML = `<span style ="color: var(--color-Black-Cherry); font-weight: bold;">${mapName}</span>: percorre o array e cria um NOVO array com cada item transformado. Aqui, <br> ele aplica 10% de desconto no preço de todos os produtos.`;
}

function sumAll() {
    const someAll = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    let receiptItems = '';
    menuOptions.forEach(product => {
        receiptItems += `
         <p class="item-name" style="font-size: 1rem; margin-bottom: 0;">${product.name}</p>
         <p style="color: var(--color-Golden-Glow); margin-bottom: 15px;">${formatCurrency(product.price)}</p>
        `;
    });

    list.innerHTML = `
         <li class="burger-item reduce-item">
            ${receiptItems}
            <hr style="border: 1px solid var(--color-Golden-Glow); margin-bottom: 15px;">
            <p class="item-price">Total da Compra <br>${formatCurrency(someAll)}</p>
        </li>
        `
    explanationMethod.innerHTML = `<span style ="color: var(--color-Black-Cherry); font-weight: bold;">${reduceName}</span>: percorre o array e junta todos os itens em um único valor.<br>Aqui, ele soma o preço de todos os produtos do cardápio.`;
}

function filterList(){
    const filterJustVegan = menuOptions.filter(product => product.vegan);
    showAll(filterJustVegan);
    explanationMethod.innerHTML = `<span style ="color: var(--color-Black-Cherry); font-weight: bold;">${filterName}</span>: cria um NOVO array apenas com os itens que passam em uma condição.<br>Aqui, ele filtrou e mostra apenas os lanches veganos.`;
}

buttonshowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', showPriceDescont);
buttonReduceAll.addEventListener('click', sumAll);
buttonfilterAll.addEventListener('click', filterList);



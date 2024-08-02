const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let itemsToShow = 3; // Definido inicialmente para 3 itens
let index = 0;

// Função para atualizar o número de itens a serem mostrados com base na largura da janela
function updateItemsToShow() {
    if (window.innerWidth <= 500) {
        itemsToShow = 1;
    } else {
        itemsToShow = 3;
    }
    showItem(index); // Atualiza a exibição
}

updateItemsToShow();

// Atualiza o número de itens a serem mostrados quando a janela é redimensionada
window.addEventListener('resize', updateItemsToShow);

function showItem(index) {
    const translateX = -index * (100 / itemsToShow);
    carouselInner.style.transform = `translateX(${translateX}%)`;
}

next.addEventListener('click', () => {
    if (index < items.length - itemsToShow) {
        index++;
    } else {
        index = 0;
    }
    showItem(index);
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - itemsToShow;
    }
    showItem(index);
});

// Auto slide
setInterval(() => {
    if (index < items.length - itemsToShow) {
        index++;
    } else {
        index = 0;
    }
    showItem(index);
}, 3000);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const itemsToShow = 3; // Mostrar 3 itens ao mesmo tempo
let index = 0;

function showItem(index) {
    const translateX = -index * (100 / itemsToShow); // Ajustar a largura de translação
    carouselInner.style.transform = `translateX(${translateX}%)`;
}

next.addEventListener('click', () => {
    if (index < items.length - itemsToShow) {
        index++;
    } else {
        index = 0; // Voltar ao início quando chegar ao final
    }
    showItem(index);
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - itemsToShow; // Ir para o final quando estiver no início
    }
    showItem(index);
});

// Auto slide
setInterval(() => {
    if (index < items.length - itemsToShow) {
        index++;
    } else {
        index = 0; // Voltar ao início quando chegar ao final
    }
    showItem(index);
}, 3000);

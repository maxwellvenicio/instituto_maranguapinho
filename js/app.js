
//menu mobile --------------------------------------------------------
const btnMobile = document.getElementById("btn-mobile");

//funcao para adicionar e remover a class active
function toggleMenu (event){
    console.log("Função toggleMenu chamada");
    if(event.type === "touchstart") event.preventDefault(); // verifica se o evento é touch
    const navMenu = document.getElementById("nav");
    navMenu.classList.toggle("active");

    const active = nav.classList.contains('active'); //verifica se no nav existe a class active ou não; 
    event.currentTarget.setAttribute("aria-expanded", active); //setando o atributo "true" quando expandido

    //alterar o atributo "Abrir menu" para "Fechar menu" no aria-label
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");   
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


////////////////////////////


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



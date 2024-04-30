const productCards = document.querySelectorAll(".catalog__item");
const modalWindow = document.getElementById("modal");
const modalRegistration = document.getElementById("modalreg");
const modalButtons = document.querySelectorAll(".button__item");


productCards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.classList.add('catalog__item-anim');
    });

    card.addEventListener('mouseout', function () {
        card.classList.remove('catalog__item-anim');
    });

    card.addEventListener('click', function () {
        card.classList.add('catalog__item-click');
        modalWindow.style.display = "flex"; 
    });
});

modalButtons.forEach(function (btns) {
    btns.addEventListener('click', function () {
        modalRegistration.style.display = "flex";
    });
});


window.addEventListener('click', function (event) {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
        productCards.forEach(function (card) {
            card.addEventListener('click', function () {
                card.classList.remove('catalog__item-click');
            });
        });
    }
});


// 🅺🅻🆅🅽🅼🆁🆃
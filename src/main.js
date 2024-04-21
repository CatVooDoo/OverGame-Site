let productCards = document.querySelectorAll(".catalog__item");
const modalWindow = document.getElementById("modal");

productCards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.classList.add('catalog__item-anim');
    });

    card.addEventListener('mouseout', function () {
        card.classList.remove('catalog__item-anim');
    });

    card.addEventListener('click', function () {
        card.classList.add('catalog__item-click');
        modalWindow.style.display = "flex"; // Изменить значение display для показа модального окна
    });
});

// Добавить обработчик события для закрытия модального окна

window.addEventListener('click', function (event) {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none"; // Скрыть модальное окно при клике вне его области
        productCards.forEach(function (card) {
            card.addEventListener('click', function () {
                card.classList.remove('catalog__item-click');
            });
        });
    }
});

// 🅺🅻🆅🅽🅼🆁🆃

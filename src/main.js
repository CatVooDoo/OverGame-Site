let productCards = document.querySelectorAll(".catalog__item");

productCards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.classList.add('catalog__item-anim');
        console.log('класс добавлен');
    });

    card.addEventListener('mouseout', function () {
        card.classList.remove('catalog__item-anim');
        console.log('класс удален');
    });
});
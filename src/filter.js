const catalogRussifier = document.querySelectorAll(".russifier");
const catalogModify = document.querySelectorAll(".modify");
const buttons = document.querySelectorAll('.filter__button');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

function filterItems(category) {
    const filters = document.querySelectorAll(".filter__button");
    filters.forEach(function (filter) {
        if (filter.id === category) {
            filter.classList.add('active');
        } else {
            filter.classList.remove('active');
        }
    });

    const catalogRussifier = document.querySelectorAll(".russifier");
    const catalogModify = document.querySelectorAll(".modify");

    catalogRussifier.forEach(function (item) {
        item.style.display = "none";
    });

    catalogModify.forEach(function (item) {
        item.style.display = "none";
    });

    if (category === 'all') {
        catalogRussifier.forEach(function (item) {
            item.style.display = "block";
        });
        catalogModify.forEach(function (item) {
            item.style.display = "block";
        });
    } else if (category === 'russifier') {
        catalogRussifier.forEach(function (item) {
            item.style.display = "block";
        });
    } else if (category === 'modify') {
        catalogModify.forEach(function (item) {
            item.style.display = "block";
        });
    }

    const catalog = document.querySelector('.catalog__list');
    catalog.style.display = 'none';
    catalog.offsetHeight;
    catalog.style.display = 'grid';
}

// 🅺🅻🆅🅽🅼🆁🆃
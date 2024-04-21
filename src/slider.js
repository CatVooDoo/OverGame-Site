const sliderItem1 = document.querySelector(".item1");
const sliderItem2 = document.querySelector(".item2");
const sliderItem3 = document.querySelector(".item3");

let items = [sliderItem1, sliderItem2, sliderItem3];
let currentItem = 0;

function slider() {
    setInterval(function () {
        items[currentItem].style.display = "none";
        currentItem = (currentItem + 1) % items.length;
        items[currentItem].style.display = "block";
    }, 10000)
}

slider(); 

// 🅺🅻🆅🅽🅼🆁🆃

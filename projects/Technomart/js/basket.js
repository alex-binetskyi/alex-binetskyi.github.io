var linkBasket = document.querySelectorAll(".buy-product");
console.log(linkBasket);
var popupBasket = document.querySelector(".modal-basket-add");
console.log(popupBasket);
var closeBasket = popupBasket.querySelector(".modal-close");
console.log(closeBasket);

for (i = 0; i < linkBasket.length; i++) {
    linkBasket[i].addEventListener('click', function () {
        popupBasket.classList.add("modal-show");
    });
}

closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupBasket.classList.contains("modal-show")) {
            popupBasket.classList.remove("modal-show");
        }
    }
});
// Form

var linkForm = document.querySelector(".write-us-button");
var popupForm = document.querySelector(".modal-write-us");
var closeForm = popupForm.querySelector(".modal-close");

linkForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupForm.classList.add("modal-show");
});

closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 ) {
        evt.preventDefault();
        if (popupForm.classList.contains("modal-show")) {
            popupForm.classList.remove("modal-show");
        }
    }
});

// Map
var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
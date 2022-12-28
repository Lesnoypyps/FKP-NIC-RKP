

document.addEventListener('DOMContentLoaded', () => {
    let callbackButton = document.getElementById('callback-button');
    let modal1 = document.getElementById('modal-1');
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];

    callbackButton.onclick = function () {
        modal1.classList.add('modal__active');
    };
    closeButton.onclick = function () {
        modal1.classList.remove('modal__active');
    };
    console.log(closeButton)
});
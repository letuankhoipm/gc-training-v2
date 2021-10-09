var nav = document.querySelector('.nav-collapse')
var overlay = document.querySelector('.nav-overlay')

function collapse() {
    nav.classList.toggle('active')
    overlay.classList.toggle('active');
}
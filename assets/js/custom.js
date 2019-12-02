const navbarBtn = document.querySelector('.navbar__btn');
const navbarMenu = document.querySelector('.navbar__menu');

function showNavbar() {
    navbarMenu.classList.toggle('show');
}
navbarBtn.addEventListener('click', showNavbar);
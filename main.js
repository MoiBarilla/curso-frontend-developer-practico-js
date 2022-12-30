const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');

});

menu.addEventListener('click', toggleHamburgerMenu = () => {
    mobileMenu.classList.toggle('inactive');
});
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
    //console.table('Hola');

});


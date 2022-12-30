const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu = () => {

    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed) {
    productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

});

menu.addEventListener('click', toggleHamburgerMenu = () => {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if(!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
});

shoppingCart.addEventListener('click', toggleShoppingCartProducts = () => {

    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if ( (!isMobileMenuClosed) || (!isDesktopMenuClosed) ){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
        productDetail.classList.toggle('inactive');
    
});
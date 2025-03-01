const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu = () => {

    let isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if ((!isShoppingCartContainerClosed) || (!isProductDetailClosed) ) {
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

});

menu.addEventListener('click', toggleHamburgerMenu = () => {
    let isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if ((!isShoppingCartContainerClosed) || (!isProductDetailClosed) ) {
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

shoppingCart.addEventListener('click', toggleShoppingCartProducts = () => {

    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if ((!isMobileMenuClosed) || (!isDesktopMenuClosed) || (!isProductDetailClosed) ) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

});

function openProductDetail() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if( isProductDetailClosed ) {
    productDetail.classList.remove('inactive');
    }
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

productDetailClose.addEventListener('click', closeProductDetail = () => {
    productDetail.classList.add('inactive');
});

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});
productList.push({
    name: 'Smartphone',
    price: 210,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 430,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Keyboard',
    price: 85,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Microphone',
    price: 235,
    image: 'https://images.pexels.com/photos/2097428/pexels-photo-2097428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(array) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfoFigure.appendChild(productImgCard);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
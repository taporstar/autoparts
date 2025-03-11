// Открытие/закрытие модального окна для соцсетей
document.getElementById('social-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('social-modal').style.display = 'flex';
});

document.getElementById('close-social-modal').addEventListener('click', () => {
    document.getElementById('social-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для акций
document.getElementById('promo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('promo-modal').style.display = 'flex';
});

document.getElementById('close-promo-modal').addEventListener('click', () => {
    document.getElementById('promo-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "О нас"
document.getElementById('about-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about-modal').style.display = 'flex';
});

document.getElementById('close-about-modal').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'none';
});

// Закрытие модалок при клике вне окна
window.addEventListener('click', (e) => {
    const socialModal = document.getElementById('social-modal');
    const promoModal = document.getElementById('promo-modal');
    const aboutModal = document.getElementById('about-modal');
    if (e.target === socialModal) {
        socialModal.style.display = 'none';
    }
    if (e.target === promoModal) {
        promoModal.style.display = 'none';
    }
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});
// Открытие/закрытие модального окна для соцсетей
document.getElementById('social-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('social-modal').style.display = 'flex';
});

document.getElementById('close-social-modal').addEventListener('click', () => {
    document.getElementById('social-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для акций
document.getElementById('promo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('promo-modal').style.display = 'flex';
});

document.getElementById('close-promo-modal').addEventListener('click', () => {
    document.getElementById('promo-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "О нас"
document.getElementById('about-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('about-modal').style.display = 'flex';
});

document.getElementById('close-about-modal').addEventListener('click', () => {
    document.getElementById('about-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Каталог"
document.getElementById('catalog-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('catalog-modal').style.display = 'flex';
});

document.getElementById('close-catalog-modal').addEventListener('click', () => {
    document.getElementById('catalog-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Поиск запчастей"
document.getElementById('search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('search-modal').style.display = 'flex';
});

document.getElementById('close-search-modal').addEventListener('click', () => {
    document.getElementById('search-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Корзина"
document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cart-modal').style.display = 'flex';
});

document.getElementById('close-cart-modal').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Контакты"
document.getElementById('contact-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact-modal').style.display = 'flex';
});

document.getElementById('close-contact-modal').addEventListener('click', () => {
    document.getElementById('contact-modal').style.display = 'none';
});

// Закрытие модалок при клике вне окна
window.addEventListener('click', (e) => {
    const socialModal = document.getElementById('social-modal');
    const promoModal = document.getElementById('promo-modal');
    const aboutModal = document.getElementById('about-modal');
    const catalogModal = document.getElementById('catalog-modal');
    const searchModal = document.getElementById('search-modal');
    const cartModal = document.getElementById('cart-modal');
    const contactModal = document.getElementById('contact-modal');
    if (e.target === socialModal) {
        socialModal.style.display = 'none';
    }
    if (e.target === promoModal) {
        promoModal.style.display = 'none';
    }
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
    if (e.target === catalogModal) {
        catalogModal.style.display = 'none';
    }
    if (e.target === searchModal) {
        searchModal.style.display = 'none';
    }
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

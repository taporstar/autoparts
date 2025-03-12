// Скрываем строку поиска при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.remove('active');
});

// Обработчик клика для таблички "Магазин автозапчастей"
document.getElementById('sign-content').addEventListener('click', () => {
    const signContent = document.getElementById('sign-content');
    signContent.classList.remove('jiggle');
    void signContent.offsetWidth; // Триггер перерисовки для сброса анимации
    signContent.classList.add('jiggle');
});

// Открытие/закрытие модального окна для соцсетей
document.getElementById('social-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('modal-active');
    document.getElementById('social-modal').style.display = 'flex';
});

document.getElementById('close-social-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('social-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для акций
document.getElementById('promo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('modal-active');
    document.getElementById('promo-modal').style.display = 'flex';
});

document.getElementById('close-promo-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('promo-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "О нас"
document.getElementById('about-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('modal-active');
    document.getElementById('about-modal').style.display = 'flex';
});

document.getElementById('close-about-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('about-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Каталог"
document.getElementById('catalog-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Это не нужно, так как ссылка на catalog.html, но оставим для консистентности
    window.location.href = 'catalog.html'; // Убедимся, что переход работает
});

document.getElementById('close-catalog-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('catalog-modal').style.display = 'none';
});

// Открытие/закрытие строки поиска
document.getElementById('search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('search-active');
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.add('active');
});

document.getElementById('close-search-bar').addEventListener('click', () => {
    document.body.classList.remove('search-active');
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.remove('active');
});

// Открытие/закрытие модального окна для "Корзина"
document.getElementById('cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('modal-active');
    document.getElementById('cart-modal').style.display = 'flex';
});

document.getElementById('close-cart-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('cart-modal').style.display = 'none';
});

// Открытие/закрытие модального окна для "Контакты"
document.getElementById('contact-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('modal-active');
    document.getElementById('contact-modal').style.display = 'flex';
});

document.getElementById('close-contact-modal').addEventListener('click', () => {
    document.body.classList.remove('modal-active');
    document.getElementById('contact-modal').style.display = 'none';
});

// Закрытие модалок и строки поиска при клике вне окна
window.addEventListener('click', (e) => {
    const socialModal = document.getElementById('social-modal');
    const promoModal = document.getElementById('promo-modal');
    const aboutModal = document.getElementById('about-modal');
    const catalogModal = document.getElementById('catalog-modal');
    const searchBar = document.getElementById('search-bar');
    const cartModal = document.getElementById('cart-modal');
    const contactModal = document.getElementById('contact-modal');

    if (e.target === socialModal) {
        document.body.classList.remove('modal-active');
        socialModal.style.display = 'none';
    }
    if (e.target === promoModal) {
        document.body.classList.remove('modal-active');
        promoModal.style.display = 'none';
    }
    if (e.target === aboutModal) {
        document.body.classList.remove('modal-active');
        aboutModal.style.display = 'none';
    }
    if (e.target === catalogModal) {
        document.body.classList.remove('modal-active');
        catalogModal.style.display = 'none';
    }
    if (e.target === searchBar) {
        document.body.classList.remove('search-active');
        searchBar.classList.remove('active');
    }
    if (e.target === cartModal) {
        document.body.classList.remove('modal-active');
        cartModal.style.display = 'none';
    }
    if (e.target === contactModal) {
        document.body.classList.remove('modal-active');
        contactModal.style.display = 'none';
    }
});

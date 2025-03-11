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

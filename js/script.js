// Открытие модального окна
document.getElementById('social-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById('social-modal').style.display = 'flex';
});

// Закрытие модального окна
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('social-modal').style.display = 'none';
});

// Закрытие при клике вне модального окна
window.addEventListener('click', (e) => {
    const modal = document.getElementById('social-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
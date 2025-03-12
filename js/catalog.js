document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Функция для смены слайдов
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Показываем первый слайд
    slides[currentSlide].classList.add('active');

    // Смена слайдов каждые 2 секунды
    let slideInterval = setInterval(showNextSlide, 2000);

    // После последнего слайда останавливаем слайдшоу
    setTimeout(() => {
        clearInterval(slideInterval);
        document.getElementById('slideshow').style.display = 'none'; // Скрываем слайдшоу
        document.body.style.backgroundImage = "url('img/final-bg.jpg')"; // Устанавливаем итоговую картинку
    }, slides.length * 2000); // Время = количество слайдов * 2 секунды
});

document.addEventListener('DOMContentLoaded', () => {
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
    const puzzle = document.getElementById('puzzle');

    // Задержка перед началом сборки (например, 1 секунда)
    setTimeout(() => {
        puzzlePieces.forEach(piece => {
            piece.classList.add('assembled');
        });
    }, 1000);

    // После сборки (1.5s анимация + 1s задержка = 2.5s) скрываем пазл и устанавливаем фон
    setTimeout(() => {
        puzzle.style.display = 'none';
        document.body.style.backgroundImage = "url('img/final-bg.jpg')";
    }, 2500);
});

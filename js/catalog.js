<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Каталог - AutoParts</title>
    <link rel="stylesheet" href="css/catalog.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <div class="puzzle" id="puzzle">
        <div class="puzzle-piece top-left" style="background-image: url('img/slide1.jpg');"></div>
        <div class="puzzle-piece top-right" style="background-image: url('img/slide2.jpg');"></div>
        <div class="puzzle-piece bottom-left" style="background-image: url('img/slide3.jpg');"></div>
        <div class="puzzle-piece bottom-right" style="background-image: url('img/slide4.jpg');"></div>
    </div>

    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="AutoParts" class="logo-img">
                    <span>AutoParts</span>
                </a>
            </div>
            <nav class="nav">
                <a href="#" class="btn nav-btn" id="engine-btn"><i class="fas fa-cogs"></i> Двигатель</a>
                <a href="#" class="btn nav-btn" id="suspension-btn"><i class="fas fa-car-side"></i> Подвеска</a>
                <a href="#" class="btn nav-btn" id="brakes-btn"><i class="fas fa-stop-circle"></i> Тормоза</a>
                <a href="#" class="btn nav-btn" id="electronics-btn"><i class="fas fa-bolt"></i> Электроника</a>
                <a href="index.html" class="btn nav-btn back-btn"><i class="fas fa-arrow-left"></i> Назад</a>
            </nav>
        </div>
        <div class="hero-text">
            <h1 class="fade-in-text">Каталог запчастей</h1>
            <p class="fade-in-text delay-1">Выберите категорию</p>
        </div>
    </header>

    <script src="js/catalog.js"></script>
</body>
</html>

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const totalSlides = images.length;
    let currentIndex = 0;

    // Defina a largura do container do slider para caber todas as imagens
    slides.style.width = `${totalSlides * 100}%`;

    // Defina a largura de cada slide para ser igual à largura do slider
    images.forEach(image => {
        image.style.width = `${100 / totalSlides}%`;
    });

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const slideWidth = slider.clientWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    setInterval(nextSlide, 3000); // Altere o intervalo para mudar o slide automaticamente
});

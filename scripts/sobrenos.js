(function() {
    const carousel = document.getElementById('SNcarousel');
    const carouselItems = document.querySelectorAll('.SNcarousel-item');
    let currentIndex = 0;
    let animationFrameId;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * 33.33;
        carousel.style.transform = `translateX(${translateX}%)`;
        animationFrameId = requestAnimationFrame(updateCarousel);
    }

    setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (3000 ms)
})();
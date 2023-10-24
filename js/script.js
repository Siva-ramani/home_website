document.addEventListener('DOMContentLoaded', (event) => {
    let currentSlide = 1;
    const totalSlides = 3;

    function changeSlide() {
        const previousSlide = document.querySelector('.slide.active');
        if (previousSlide) {
            previousSlide.classList.remove('active');
        }
        
        currentSlide = (currentSlide % totalSlides) + 1;
        const nextSlide = document.getElementById('slide' + currentSlide);
        
        if (nextSlide) {
            nextSlide.classList.add('active');
        }
    }

    setInterval(changeSlide, 3000);
});

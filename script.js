document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const pagers = document.querySelectorAll('.pager');
    let currentIndex = 0;
    const intervalTime = 5000;  

    function switchSlide(index) {
         slides.forEach(s => s.classList.remove('active'));
        pagers.forEach(p => p.classList.remove('active'));

         slides[index].classList.add('active');
        pagers[index].classList.add('active');
    }

    function autoPlay() {
        currentIndex = (currentIndex + 1) % slides.length;
        switchSlide(currentIndex);
    }

    let slideTimer = setInterval(autoPlay, intervalTime);

     pagers.forEach((pager, idx) => {
        pager.addEventListener('click', () => {
            clearInterval(slideTimer);  
            currentIndex = idx;
            switchSlide(currentIndex);
            slideTimer = setInterval(autoPlay, intervalTime);  
        });
    });
});
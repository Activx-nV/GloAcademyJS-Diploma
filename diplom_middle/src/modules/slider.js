const slider = () => {
    const slide = document.querySelectorAll('.main-slider .slide');
    // const slider = document.querySelector('.portfolio-content'),
    // dotParent = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index) => {
        elem[index].style.display = "none";
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = "";
    };


    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        //prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
        //nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    startSlide(1500);
};

export default slider;

const sliderPhotos = () => {
    const slide = document.querySelectorAll('.gallery-slide'),
        slider = document.querySelector('.slider-wrapper'),
        dot = document.querySelectorAll('.dot');

    let currentSlide = 0,
        interval;


    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
        elem[index].style.display = 'none';
    };

    const prevSlideDot = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlideDot = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        elem[index].style.display = 'block';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'gallery-slide-active');
        prevSlideDot(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'gallery-slide-active');
        nextSlideDot(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (!target.matches('#arrow-left-gallery, #arrow-right-gallery, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-slide-active');
        prevSlideDot(dot, currentSlide, 'dot-active');
        if (target.matches('#arrow-right-gallery')) {
            currentSlide++;
        } else if (target.matches('#arrow-left-gallery')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'gallery-slide-active');
        nextSlideDot(dot, currentSlide, 'dot-active');

    });
    slider.addEventListener('mouseover', event => {
        if (event.target.matches('#arrow-right-gallery') || event.target.matches('#arrow-left-gallery') || event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('#arrow-right-gallery') || event.target.matches('#arrow-left-gallery') || event.target.matches('.dot')) {
            startSlide();
        }
    });
    startSlide(2500);
};

export default sliderPhotos;

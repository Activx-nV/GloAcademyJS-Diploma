const sliderPhotos = () => {
    const slide = document.querySelectorAll('.gallery-slide'),
        slider = document.querySelector('.gallery-slider'),
        dotParent = document.querySelector('.portfolio-dots'),
        dot = document.querySelectorAll('.dot');

    let currentSlide = 0;
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

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (!target.matches('#arrow-left-services, #arrow-right-services, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'gallery-slide-active');
        prevSlideDot(dot, currentSlide, 'dot-active');
        if (target.matches('#arrow-right-services')) {
            currentSlide++;
        } else if (target.matches('#arrow-left-services')) {
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
};

export default sliderPhotos;

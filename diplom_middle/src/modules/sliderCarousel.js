const sliderCarousel = () => {
    const slide = document.querySelectorAll('.carousel-slide'),
        slider = document.querySelector('.services-slider'),
        dotParent = document.querySelector('.portfolio-dots'),
        servicesArrowLeft = document.querySelector('#arrow-left-services'),
        servicesArrowRight = document.querySelector('#arrow-right-services');

    let currentSlide = 0;

    // const prevSlide = () => {
    //     if (slide[0].style.display !== 'block') {
    //         slide[0].style.display = 'block';
    //         slide[5].style.display = 'none';
    //     } else if (slide[1].style.display === 'block') {
    //         console.log();
    //         slide[1].style.display = 'block';
    //         slide[6].style.display = 'none';
    //     } else if (slide[2].style.display === 'block') {
    //         slide[2].style.display = 'block';
    //         slide[7].style.display = 'none';
    //     } else if (slide[3].style.display === 'block') {
    //         slide[3].style.display = 'block';
    //         slide[8].style.display = 'none';
    //     } else if (slide[4].style.display === 'block') {
    //         slide[4].style.display = 'block';
    //         slide[9].style.display = 'none';
    //     }
    // };
    // const nextSlide = () => {
    //     if (slide[0].style.display === 'block') {
    //         slide[0].style.display = 'none';
    //         slide[5].style.display = 'block';
    //     } else if (slide[1].style.display === 'block') {
    //         console.log();
    //         slide[1].style.display = 'none';
    //         slide[6].style.display = 'block';
    //     } else if (slide[2].style.display === 'block') {
    //         slide[2].style.display = 'none';
    //         slide[7].style.display = 'block';
    //     } else if (slide[3].style.display === 'block') {
    //         slide[3].style.display = 'none';
    //         slide[8].style.display = 'block';
    //     } else if (slide[4].style.display === 'block') {
    //         slide[4].style.display = 'none';
    //         slide[9].style.display = 'block';
    //     }
    // };



    // servicesArrowLeft.addEventListener('click', prevSlide);
    // servicesArrowRight.addEventListener('click', nextSlide);

    // slider.addEventListener('click', event => {
    //     event.preventDefault();

    //     const target = event.target;

    //     if (!target.matches('#arrow-left-services, #arrow-right-services')) {
    //         return;
    //     }


    //     if (target.matches('#arrow-right-services')) {
    //         currentSlide++;
    //     } else if (target.matches('#arrow-left-services')) {
    //         currentSlide--;
    //     } else if (target.matches('.dot')) {
    //         dot.forEach((elem, index) => {
    //             if (elem === target) {
    //                 currentSlide = index;
    //             }
    //         });
    //     }
    //     if (currentSlide >= slide.length) {
    //         currentSlide = 0;
    //     } else if (currentSlide < 0) {
    //         currentSlide = slide.length - 1;
    //     }
    //     nextSlide(slide, currentSlide);
    //     //nextSlide(dot, currentSlide, 'dot-active');
    // });


};



export default sliderCarousel;
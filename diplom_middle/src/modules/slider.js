const slider = () => {
    const slide = document.querySelectorAll('.main-slider .slide');
    // const slider = document.querySelector('.portfolio-content'),
    // dotParent = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval;

    // const createDots = () => {
    //     for (let i = 0; i < slide.length; i++) {
    //         if (i === 0) {
    //             const li = document.createElement('li');
    //             li.classList.add('dot');
    //             li.classList.add('dot-active');
    //             dotParent.append(li);
    //         } else {
    //             const li = document.createElement('li');
    //             li.classList.add('dot');
    //             dotParent.append(li);
    //         }
    //     }
    // };
    // createDots();
    // const dot = document.querySelectorAll('.dot');

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

const stickyBurgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    const menuBtn = document.querySelector('.menu-button');

    topMenu.style.overflow = 'hidden';
    const sticky = topMenu.offsetTop;
    function stickyHandler() {
        if (window.pageYOffset >= sticky) {
            topMenu.classList.add("sticky");
        } else {
            topMenu.classList.remove("sticky");
        }
    }
    document.addEventListener('scroll', stickyHandler);
};

export default stickyBurgerMenu;

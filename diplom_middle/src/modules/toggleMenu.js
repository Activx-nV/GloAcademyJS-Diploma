const toggleMenu = () => {
    const btnMenu = document.querySelector('.club-select'),
        menu = document.getElementById('club-list'),
        menuSelector = document.querySelector('.clubs-list').firstElementChild;

    let count = 0;
    const handlerMenu = () => {
        if (menu.style.display !== 'block') {
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count += 0.01;
                menu.style.opacity = count;
                if (count > 1) {
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);

            menu.style.display = 'block';
            menuSelector.textContent = 'Закрыть меню';
        } else if (menu.style.display === 'block') {
            let flyInterval;
            const flyAnimate = function() {
                flyInterval = requestAnimationFrame(flyAnimate);
                count -= 0.01;
                menu.style.opacity = count;
                if (count < 0.2) {
                    menu.style.display = 'none';
                    cancelAnimationFrame(flyInterval);
                }
            };
            flyInterval = requestAnimationFrame(flyAnimate);

            menuSelector.textContent = 'Выбрать клуб';
        }
    };

    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('club-select')) {
            handlerMenu();
        }
    });
};







export default toggleMenu;

const schelkovoCardForm = () => {
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        // ,credentials: 'include'
    });

    function sendSchelkovoForm(form) {
        form.addEventListener('submit', event => {
            console.log(event.target[9].textContent);
            const warningPopUp = document.getElementById('warningPopUp');
            let schelkovoWarningMessage = document.querySelector('.schelkovo-warning');
            const allPageInputs = document.querySelectorAll('input');
            const loadMessage = 'Загрузка...';
            const checkbox = document.querySelectorAll('.checkbox');
            event.preventDefault();
            event.target[9].textContent = loadMessage;

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then(response => {
                if (response.status !== 200) {
                    throw new Error('Status error, something went wrong.');
                }
                allPageInputs.forEach(item => {
                    item.value = '';
                });
                event.target[9].textContent = 'Забронировать карту';
                schelkovoWarningMessage.textContent = 'Заявка отправлена';
                setTimeout(() => {
                    schelkovoWarningMessage.textContent = '';
                }, 3000);
                checkbox.forEach(elem => {
                    elem.checked = false;
                });
            }).catch(error => {
                warningPopUp.style.display = 'block';
                setTimeout(() => {
                    warningPopUp.style.display = 'none';
                }, 3000);
                warningPopUp.addEventListener('click', event => {
                    const target = event.target;
                    if (target.classList.contains('close_icon')) {
                        warningPopUp.style.display = 'none';
                    } else if (target.classList.contains('overlay')) {
                        warningPopUp.style.display = 'none';
                    } else if (target.classList.contains('close-btn')) {
                        warningPopUp.style.display = 'none';
                    }
                });
                setTimeout(() => {
                    event.target[9].textContent = `Забронировать карту`;
                }, 2500);

                console.error(error);
            });
        });
    }
    if (document.location.pathname === '/schelkovo.html') {
        const formCardSchelkovo = document.querySelector('#card_order-schelkovo'),
            schelkovoCheckBox = document.querySelector('.schelkovo-checkbox'),
            month1 = document.querySelector('#t1'),
            month6 = document.querySelector('#t2'),
            month9 = document.querySelector('#t3'),
            month12 = document.querySelector('#t4'),
            monthDaily = document.querySelector('#t5');
        let schelkovoWarningMessage = document.querySelector('.schelkovo-warning');

        formCardSchelkovo.addEventListener('click', event => {
            if (schelkovoCheckBox.checked) {
                sendSchelkovoForm(formCardSchelkovo);
                schelkovoWarningMessage.textContent = "";
            } else if (event.target.className === "btn card-order-btn" && !schelkovoCheckBox.checked) {
                schelkovoWarningMessage.textContent = '<-подтвердите обработку данных';
                return;
            }
        });
    }
};

export default schelkovoCardForm;

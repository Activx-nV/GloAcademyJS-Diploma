const mozaikaCardForm = () => {
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        // ,credentials: 'include'
    });

    function sendMozaikaForm(form) {
        form.addEventListener('submit', event => {
            const warningPopUp = document.getElementById('warningPopUp');
            const popUpThanks = document.querySelector('#thanks');
            let mozaikaWarningMessage = document.querySelector('.mozaika-warning');
            const allPageInputs = document.querySelectorAll('input');
            const loadMessage = 'Загрузка...';
            const checkbox = document.querySelectorAll('.checkbox');
            event.preventDefault();
            mozaikaWarningMessage.textContent = loadMessage;

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
                mozaikaWarningMessage.textContent = 'Забронировать карту';
                mozaikaWarningMessage.textContent = 'Заявка отправлена';
                popUpThanks.style.display = 'block';
                setTimeout(() => {
                    popUpThanks.style.display = 'none';
                }, 3000);
                setTimeout(() => {
                    mozaikaWarningMessage.textContent = '';
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
                    mozaikaWarningMessage.textContent = ``;
                }, 2500);

                console.error(error);
            });
        });
    }
    if (document.location.pathname === '/mozaika.html') {
        const formCardMozaika = document.querySelector('#card_order-mozaika'),
            mozaikaCheckBox = document.querySelector('.mozaika-checkbox'),
            month1 = document.querySelector('#t1'),
            month6 = document.querySelector('#t2'),
            month9 = document.querySelector('#t3'),
            month12 = document.querySelector('#t4'),
            monthDaily = document.querySelector('#t5');
        let mozaikaWarningMessage = document.querySelector('.mozaika-warning');

        formCardMozaika.addEventListener('click', event => {
            if (mozaikaCheckBox.checked) {
                sendMozaikaForm(formCardMozaika);
                mozaikaWarningMessage.textContent = "";
            } else if (event.target.className === "btn card-order-btn" && !mozaikaCheckBox.checked) {
                mozaikaWarningMessage.textContent = '<-подтвердите обработку данных';
                return;
            }
        });
    }
};

export default mozaikaCardForm;

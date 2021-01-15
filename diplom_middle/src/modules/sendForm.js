const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        // ,credentials: 'include'
    });

    const month1 = document.querySelector('#m1'),
        month6 = document.querySelector('#m2'),
        month9 = document.querySelector('#m3'),
        month12 = document.querySelector('#m4');


    const cardOrderBtn = document.querySelector('.card-order-btn');
    const formCard = document.querySelector('#card_order');
    const checkbox = document.querySelectorAll('.checkbox');
    const checkbox1 = document.querySelector('#check1');
    const checkboxCardOrder = document.querySelector('#card_check');
    const popUp = document.querySelector('.popup');
    const popUpThanks = document.querySelector('#thanks');
    const bannerForm = document.getElementById('banner-form');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const statusMessage = document.createElement('div');
    const allPageInputs = document.querySelectorAll('input');
    const formContent = document.querySelector('.form-content');
    const formBtn = document.querySelector('.btn-send');
    const bannerBtn = document.querySelector('.btn');
    const warningMessage = document.querySelector('.warning');
    const warningCardMessage = document.querySelector('.card-order-warning');
    statusMessage.style.cssText = 'font-size: 2rem;';

    formContent.addEventListener('click', event => {
        if (event.target.id === 'check') {
            formBtn.innerText = 'Записаться';
            formHandler(form1);
            formHandler(form2);
        } else if (event.target.className === "btn btn-send") {
            formBtn.style.fontSize = "11px";
            formBtn.innerText = 'подтвердите согласие';
            return;
        }
    });

    bannerForm.addEventListener('click', event => {
        if (event.target.id === 'check1') {
            formHandler(bannerForm);
            warningMessage.textContent = "";
        } else if (event.target.className === "btn" && !checkbox1.checked) {
            warningMessage.textContent = 'подтвердите обработку персональных данных';
            return;
        }
    });

    formCard.addEventListener('click', event => {
        if (event.target.id === 'card_check' && !month1.checked && !month6.checked && !month9.checked && !month12.checked) {
            warningCardMessage.textContent = 'Пожалуйста, выберите на сколько месяцев вы желаете купить абонемент';
            cardOrderBtn.setAttribute('disabled', true);
        } else if (!month1.checked && !month6.checked && !month9.checked && !month12.checked) {
            if (!checkboxCardOrder.checked) {
                warningCardMessage.textContent = 'подтвердите обработку персональных данных';
            }
            if (!month1.checked && !month6.checked && !month9.checked && !month12.checked) {
                warningCardMessage.textContent = '';
            }
            cardOrderBtn.removeAttribute('disabled', true);
            if (event.target.id === 'card_check' && month1.checked || month6.checked || month9.checked || month12.checked) {
                warningCardMessage.textContent = "";
                cardOrderBtn.removeAttribute('disabled', true);
                formHandler(formCard);
                warningCardMessage.textContent = "";
            } else if (event.target.className === "btn card-order-btn" && !checkboxCardOrder.checked) {
                warningCardMessage.textContent = 'подтвердите обработку персональных данных';
                return;
            }
        }
    });

    function formHandler(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            statusMessage.textContent = loadMessage;
            if (event.target === bannerForm) {
                event.target.children[3].innerText = loadMessage;
            } else if (event.target === formCard) {
                event.target.children[8].firstElementChild.textContent = loadMessage;
            } else {
                event.target.lastElementChild.innerText = loadMessage;
            }

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then(response => {
                if (response.status !== 200) {
                    throw new Error('Status error, something went wrong.');
                }
                statusMessage.textContent = successMessage;
                allPageInputs.forEach(item => {
                    item.value = '';
                });
                popUp.style.display = 'none';
                if (event.target === bannerForm) {
                    event.target.children[3].innerText = 'Записаться';
                } else if (event.target === formCard) {
                    event.target.children[8].firstElementChild.textContent = 'Забронировать карту';
                } else {
                    event.target.lastElementChild.innerText = 'Записаться';
                }
                popUpThanks.style.display = 'block';
                setTimeout(() => {
                    popUpThanks.style.display = 'none';
                }, 3000);
                checkbox.forEach(elem => {
                    elem.checked = false;
                });
                popUpThanks.addEventListener('click', event => {
                    const target = event.target;
                    if (target.classList.contains('close_icon')) {
                        popUpThanks.style.display = 'none';
                    } else if (target.classList.contains('overlay')) {
                        popUpThanks.style.display = 'none';
                    } else if (target.classList.contains('close-btn')) {
                        popUpThanks.style.display = 'none';
                    }
                });
            }).catch(error => {
                //statusMessage.textContent = errorMessage;
                if (event.target === bannerForm) {
                    event.target.children[3].innerText = errorMessage;
                    setTimeout(() => {
                        event.target.children[3].innerText = `Записаться`;
                    }, 2500);
                } else if (event.target === formCard) {
                    event.target.children[8].firstElementChild.textContent = errorMessage;
                    setTimeout(() => {
                        event.target.children[8].firstElementChild.textContent = `Забронировать карту`;
                    }, 2500);
                } else {
                    event.target.lastElementChild.innerText = errorMessage;
                    setTimeout(() => {
                        event.target.lastElementChild.textContent = `Записаться`;
                    }, 2500);
                }

                console.error(error);
            });
        });
    }
    formHandler(form1);
    formHandler(form2);
    formHandler(bannerForm);

};

export default sendForm;

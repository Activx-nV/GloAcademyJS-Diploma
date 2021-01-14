const formValidator = () => {
    const formTextInput = document.querySelectorAll('.text-input');
    const formNumberInput = document.querySelectorAll('.num-input');
    //const expandedFormName = document.querySelector('.top-form');
    //const expandedFormMessage = document.querySelector('.mess');
    const formBtns = document.querySelectorAll('.btn-send');
    formTextInput.forEach(item => {
        item.setAttribute('autocomplete', 'off');
    });
    formNumberInput.forEach(item => {
        item.setAttribute('autocomplete', 'off');
    });
    //expandedFormName.setAttribute('autocomplete', 'off');
    //expandedFormMessage.setAttribute('autocomplete', 'off');

    const validatePhoneInput = dom => {
        dom.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value !== '') {
                    if (!item.value.match(/^(\+?[0-9]{8,14})$/g)) {
                        //item.value = item.value.substr(0, item.value.length - 1);
                        formBtns.forEach(btns => {
                            btns.setAttribute('disabled', true);
                        });
                    } else {
                        formBtns.forEach(btns => {
                            btns.removeAttribute('disabled', true);
                        });
                    }
                }
            });
        });
        dom.forEach(item => {
            item.addEventListener('change', () => {
                if (item.value !== '') {
                    if (!item.value.match(/^(\+?[0-9]{8,14})$/g)) {
                        item.value = '';
                    }
                }
            });
        });
    };
    const validateStringInput = dom => {
        dom.forEach(item => {
            item.addEventListener('input', () => {

                // if (!item.value[item.value.length - 1].match(/^[а-яА-Я ]/)) {
                //     item.value = item.value.substr(0, item.value.length - 1);
                // }

                item.value = item.value.replace(/[^А-Яа-яЁё ]/g, "");
            });
        });
    };
    validatePhoneInput(formNumberInput);
    validateStringInput(formTextInput);
    // expandedFormName.addEventListener('input', () => {
    //     expandedFormName.value = expandedFormName.value.replace(/[^А-Яа-яЁё ]/g, "");
    // });
    // expandedFormMessage.addEventListener('input', () => {
    //     expandedFormMessage.value = expandedFormMessage.value.replace(/[^А-Яа-яЁё.,!? ]/g, "");
    // });
};

export default formValidator;

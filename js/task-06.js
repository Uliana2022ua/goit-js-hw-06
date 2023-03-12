const input = document.querySelector('#validation-input');
input.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
    console.log(Number(input.dataset.length));
    console.log(event.currentTarget.value.length);
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}
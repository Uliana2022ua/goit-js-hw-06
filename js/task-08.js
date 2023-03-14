const form = document.querySelector('form.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const usersData = {};

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '')
        return alert(`Please, fill in all the fields`);

    else {
        usersData[email.name] = email.value;
	    usersData[password.name] = password.value;
        console.log(usersData);
        event.currentTarget.reset();
    }
}

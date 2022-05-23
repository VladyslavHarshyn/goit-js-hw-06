'use stict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    const object = {
        email: email.value,
        password: password.value,
        
    };

    if (email.value === "" || password.value === "") {
        return alert("You forgot to put all your info into form...");
    }
    console.log(object)
    event.currentTarget.reset();
})

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const number = document.getElementById('number');
const message = document.getElementById('message');


const showError = function(input, message){
    let formControl = input.parentElement;
    formControl.classlist = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (username.value.trim() === ''){
        showError(username, 'username kaun dega, tera baap?')
    }
})
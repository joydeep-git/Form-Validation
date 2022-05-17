const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const number = document.getElementById('number');
const review = document.getElementById('review');


const showError = function(input, message){
    let formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (username.value.trim() === ''){
        showError(username, 'Username is mandatory')
    }
    if (email.value.trim() === ''){
        showError(email, 'email is mandatory')
    }
    if (password.value.trim() === ''){
        showError(password, 'password is mandatory')
    }
    if (confirmpassword.value.trim() === ''){
        showError(confirmpassword, 'confirming your password is mandatory')
    }
    if (number.value.trim() === ''){
        showError(number, 'number is mandatory')
    }
    if (review.value.trim() === ''){
        showError(review, 'write your thoughts about us')
    }
})
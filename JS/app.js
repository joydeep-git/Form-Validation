const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const number = document.getElementById('number');
const review = document.getElementById('review');

const inputArr = [username, email, password, confirmpassword, number, review];

const showError = function(input, message){
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

const showSuccess = function(input){
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

const checkRequired = function(inputArr){
    inputArr.forEach((input) => {
        if (input.value === '') {
            showError(input, `${input.name} is required`);
        } else {
            showSuccess(input);
        }
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputArr)
});




// <<<=== TIME CONSUMING METHOD  ===>>>

// form.addEventListener('submit', function(e){
//     e.preventDefault();


//     if (username.value.trim() === ''){
//         showError(username, 'Username is mandatory')
//     }else{
//         showSuccess(username)
//     }
//     if (email.value.trim() === ''){
//         showError(email, 'email is mandatory')
//     }else{
//         showSuccess(email)
//     }
//     if (password.value.trim() === ''){
//         showError(password, 'password is mandatory')
//     }else{
//         showSuccess(password)
//     }
//     if (confirmpassword.value.trim() === ''){
//         showError(confirmpassword, 'confirming your password is mandatory')
//     }else{
//         showSuccess(confirmpassword)
//     }
//     if (number.value.trim() === ''){
//         showError(number, 'number is mandatory')
//     }else{
//         showSuccess(number)
//     }
//     if (review.value.trim() === ''){
//         showError(review, 'write your thoughts about us')
//     }else{
//         showSuccess(review)
//     }
// })
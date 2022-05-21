const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const number = document.getElementById('number');
const review = document.getElementById('review');

const inputArr = [username, email, password, confirmpassword, number, review];


const message = function(input){
    let errorMessage = input.id.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)
}

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
            showError(input, `${message(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
};

const checkLength =function(input, min, max){
    if(input.value.trim().length < min){
        showError(input, `${message(input)} has to be atleast ${min} characters`)
    }else if(input.value.trim().length > max){
        showError(input, `${message(input)} should not be more than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

const checkPassword = function(input1, input2){
    if(input1.value.trim() !== '' && input2.value.trim() !== ''){
        if(input1.value.trim() !== input2.value.trim()){
            showError(input2, 'password not matched')
        }else{
            showSuccess(input2)
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputArr);
    checkLength(username, 4, 12);
    checkLength(password, 7, 15);
    checkLength(confirmpassword, 7, 15);
    checkLength(number, 10, 10);
    checkLength(review, 10, 300);
    checkPassword(password, confirmpassword);
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
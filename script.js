let form = document.getElementById('registration');
form.addEventListener('submit', function (event){
event.preventDefault();
let error = {};

let formElement = event.target;

let usernameValue = document.getElementById('nameuser').value;

if (usernameValue == ' '){
    error.username = 'Username field cannot be empty.'
}
if (usernameValue.length < 4){
    error.username = 'Username must be longer than 3 symbols.'
}

let password1 = document.getElementById('passworduser').value;
let password2 = document.getElementById('passwordrepeat').value;

if (password1 == ' '){
    error.userpassword = 'Users password field cannot remain empty.'
}

if (password1 != password2 ){
    error.repeatpassword = 'Password does not match.'
}

let age = false;

formElement.querySelectorAll('[name = "age"]').forEach(element => {
    if (element.checked){
        age = true;
    }
});

if (!age) {
    error.age = "Please select your age";
}

let agree = document.getElementById('conditions').checked;

if (!agree){
    error.agree = 'You must agree to the terms and conditions';
}

formElement.querySelectorAll('.errortext').forEach((item) => {
    item.textContent = ' ';
});
   

for (let item in error){
    let errorDiv = document.getElementById('error_' + item);

    if (errorDiv) {
        errorDiv.textContent = error[item];
    }
}

});
let form = document.getElementById('registration');
form.addEventListener('submit', function (event){
event.preventDefault();
let error = {};

let formElement = event.target;

// User name
let usernameValue = document.getElementById('nameuser').value;

if (usernameValue == ''){
    error.username = 'Username field cannot be empty.';
}
if (usernameValue.length < 4){
    error.username = 'Username must be longer than 3 symbols.';
}

// Password
let password1 = document.getElementById('passworduser').value;
let password2 = document.getElementById('passwordrepeat').value;


if (password1 == ''){
    error.userpassword = 'Users password field cannot remain empty.';
}

if (password1 != password2 ){
    error.repeatpassword = 'Password does not match.';
}





// Age
let age = false;
formElement.querySelectorAll('[name = "age"]').forEach((element) => {
    if (element.checked){
        age = true;
    }
});

if (!age) {
    error.age = "Please select your age";
}

// Terms & Conditions
let conditions = document.getElementById('terms').checked;

if (!conditions){
    error.conditions = 'You must agree to the terms and conditions';
}

formElement.querySelectorAll('.errortext').forEach(item => {
    item.textContent = '';
});
   

for (let item in error){
    let errorDiv = document.getElementById('error_' + item);

    if (errorDiv) {
        errorDiv.textContent = error[item];
    }
}

if (Object.keys(error).length == 0){
    formElement.submit();
} 

// e-mail
let emailField = document.getElementById('iemail');
emailField.addEventListener('keydown', function(){
    let emailValue = document.getElementById('iemail').value;
    let text = document.getElementById('text');
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue.match(pattern)) {
        emailField.style.border = '3px solid green';
        text.innerText = 'Email is correct';
        text.style.color = 'green';
    } else
    emailField.style.border = '3px solid red';
    text.innerText = 'Email is incorrect';
    text.style.color = 'red';
})

});

let toggleIcon = document.getElementById('icontoggle');
let passwordField = document.getElementById('passworduser');

toggleIcon.addEventListener('click', function (){
    if (passwordField.type == 'password'){
        passwordField.setAttribute('type', 'text');
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else 
    passwordField.setAttribute('type', 'password');
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');  
})
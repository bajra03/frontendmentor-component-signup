const $signupForm = document.getElementById('signupForm');
const $errorMsg = document.getElementsByClassName('error-message');
const $errorIcon = document.getElementsByClassName('error-icon');

const $firstName = document.getElementById('firstname');
const $lastName = document.getElementById('lastname');
const $email = document.getElementById('email');
const $password = document.getElementById('password');

$signupForm.addEventListener('submit', (e) => { 
  e.preventDefault();  

  validateForm($firstName, 0, "First Name cannot be empty");
  validateForm($lastName, 1, "Last Name cannot be empty");
  validateForm($email, 2, "Looks like this is not an Email");
  validateForm($password, 3, "Password cannot be empty");
});

let validateForm = (id, index, message) => { 
  if (id.value.trim() === "") {
    id.classList.add('error');
    $errorIcon[index].style.opacity = 1;
    $errorMsg[index].innerHTML = message;
  } else {
    id.classList.remove('error');
    $errorIcon[index].style.opacity = 0;
    $errorMsg[index].innerHTML = "";
  }
}
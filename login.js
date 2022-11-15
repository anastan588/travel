const LOGIN_BUTTON = document.querySelector(".login");
const POP_UP = document.querySelector(".pop-up");
const ACCOUNT_BUTTON = document.querySelector(".account-login-popup");
const OVERLAY = document.querySelector(".overlay");

const SIGN_IN_INPUTS = document.querySelectorAll(".sign-in-form-input");
const SIGN_IN_BUTTON = document.querySelector(".sign-in-button2");

const REGISTER_LINK = document.querySelector(".register-link");
const POP_UP_TITLE = document.querySelector(".pop-up-title");
const REGISTER_SUGGESTION = document.querySelector(".register-suggestion");

let email = SIGN_IN_INPUTS[0];
let password = SIGN_IN_INPUTS[1];

function openPopUp() {
  POP_UP.classList.add("active");
  OVERLAY.classList.add("open");
  POP_UP_TITLE.innerText = "Log in to your account";
  REGISTER_SUGGESTION.innerText = "Don't have an account?";
  REGISTER_LINK.innerText = "Register";
  SIGN_IN_BUTTON.innerText = "Sign In";
}

function closePopUp() {
  POP_UP.classList.remove("active");
  OVERLAY.classList.remove("open");
  POP_UP.classList.remove("register");
  email.value = "";
  password.value = "";
}

LOGIN_BUTTON.addEventListener("click", openPopUp);
ACCOUNT_BUTTON.addEventListener("click", openPopUp);
OVERLAY.addEventListener("click", closePopUp);

function showInputData() {
  alert(`E-mail: ${email.value} \nPassword: ${password.value}`);
}

SIGN_IN_BUTTON.addEventListener("click", showInputData);

function changePopUpToRegisterForm() {
  email.value = "";
  password.value = "";
  POP_UP.classList.toggle("register");
  if (POP_UP.classList.contains("register")) {
    POP_UP_TITLE.innerText = "Create account";
    REGISTER_SUGGESTION.innerText = "Already have an account?";
    REGISTER_LINK.innerText = "Log in";
    SIGN_IN_BUTTON.innerText = "Sign Up";
    document.getElementsByClassName("login-pop-up")[0].style = "height: auto;";
  } else {
    POP_UP_TITLE.innerText = "Log in to your account";
    REGISTER_SUGGESTION.innerText = "Don't have an account? ";
    REGISTER_LINK.innerText = "Register";
    SIGN_IN_BUTTON.innerText = "Sign In";
    document.getElementsByClassName("login-pop-up")[0].style = "height: auto;";
  }
}

REGISTER_LINK.addEventListener("click", changePopUpToRegisterForm);

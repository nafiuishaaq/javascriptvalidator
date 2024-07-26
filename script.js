const hamburger = document.querySelector(".hamburger");
const navLists = document.querySelector(".nav-lists");
const cancel = document.querySelector("#cancel-icon");
const search = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");
const form = document.querySelector(".form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

form.addEventListener("input", function (e) {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorfor(username, "can not be empty");
  } else if (usernameValue.length < 5) {
    setErrorfor(username, "username must contain atleast 5 characters");
  } else {
    setSuccessfor(username);
  }

  if (passwordValue === "") {
    setErrorfor(password, "can not be empty");
  } else if (passwordValue.length < 5) {
    setErrorfor(password, "password must contain atleast 5 characters");
  } else {
    setSuccessfor(password);
  }
}

function setErrorfor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessfor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

hamburger.addEventListener("click", function () {
  navLists.style.display = "block";
  cancel.style.display = "block";
  search.style.display = "none";
  hamburger.style.display = "none";
});

cancel.addEventListener("click", function () {
  navLists.style.display = "none";
  cancel.style.display = "none";
  hamburger.style.display = "block";
  search.style.display = "block";
});

search.addEventListener("click", function () {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});

// MENU CODE
document.addEventListener("DOMContentLoaded", () => {
  const toggleDisplay = (element, displayStyle) => {
    element.style.display = displayStyle;
  };

  document.querySelector(".menu-icon").onclick = () => {
    toggleDisplay(document.getElementById("navbar"), "none");
    toggleDisplay(document.getElementById("mobileNav"), "flex");
  };

  document.querySelector(".cancel-icon").onclick = () => {
    toggleDisplay(document.getElementById("navbar"), "flex");
    toggleDisplay(document.getElementById("mobileNav"), "none");
  };

  document.getElementById("service").onclick = () => {
    toggleDisplay(document.querySelector(".submenuu"), "flex");
    document.querySelector(".downarrow").classList.add("rotatearrow");
  };
});

// FORM VALIDATION CODE
function validateForm() {
  const formFields = [
    {
      id: "username",
      errorId: "username-error",
      minLen: 5,
      errorMessage: "Username must be at least 5 characters long.",
    },
    {
      id: "email",
      errorId: "email-error",
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      errorMessage: "Please enter a valid email address.",
    },
    {
      id: "password1",
      errorId: "password1-error",
      minLen: 8,
      errorMessage: "Password must be at least 8 characters long.",
    },
    {
      id: "password2",
      errorId: "password2-error",
      matchId: "password1",
      errorMessage: "Passwords must match.",
    },
  ];

  let valid = true;

  formFields.forEach(
    ({ id, errorId, minLen, pattern, matchId, errorMessage }) => {
      const field = document.getElementById(id);
      const errorField = document.getElementById(errorId);
      let isValid = true;

      if (
        field.value === "" ||
        (minLen && field.value.length < minLen) ||
        (pattern && !pattern.test(field.value)) ||
        (matchId && field.value !== document.getElementById(matchId).value)
      ) {
        isValid = false;
        valid = false;
      }

      field.classList.toggle("error", !isValid);
      field.classList.toggle("success", isValid);
      errorField.textContent = isValid ? "" : errorMessage;
      field.style.borderColor = isValid ? "green" : "red";
      field.style.borderWidth = "2px";
    }
  );

  return valid;
}

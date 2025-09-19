// simple
document.getElementById("simpleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("ssucces!");
});

// html5
document
  .getElementById("html5ValidationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      alert("ssucces!");
    }
  });

// bootstrap style
document
  .getElementById("bootstrapContactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("ssucces!");
  });

// bootstrap validation
document
  .getElementById("bootstrapValidationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.checkValidity()) {
      alert("ssucces!");
      this.classList.remove("was-validated");
      this.reset();
    }

    this.classList.add("was-validated");
  });

// Advanced
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (password !== confirmPassword) {
      confirmPasswordInput.setCustomValidity("Passwords do not match");
      confirmPasswordInput.classList.add("is-invalid");
    } else {
      confirmPasswordInput.setCustomValidity("");
      confirmPasswordInput.classList.remove("is-invalid");
      if (confirmPassword) {
        confirmPasswordInput.classList.add("is-valid");
      }
    }

    if (this.checkValidity()) {
      alert("ssucces!");
      // Reset form and validation
      this.classList.remove("was-validated");
      this.reset();
      // Clear all validation classes
      const inputs = this.querySelectorAll(".form-control, .form-select");
      inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
    }

    this.classList.add("was-validated");
  });

// confirm password
document
  .getElementById("confirmPassword")
  .addEventListener("input", function () {
    const password = document.getElementById("password").value;
    const confirmPassword = this.value;

    if (password && confirmPassword) {
      if (password === confirmPassword) {
        this.setCustomValidity("");
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
      } else {
        this.setCustomValidity("Passwords do not match");
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
      }
    }
  });

// clear
document.getElementById("password").addEventListener("input", function () {
  const confirmPasswordInput = document.getElementById("confirmPassword");
  if (confirmPasswordInput.value) {
    confirmPasswordInput.dispatchEvent(new Event("input"));
  }
});

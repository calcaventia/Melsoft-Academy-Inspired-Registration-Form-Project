function validateForm(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Clear previous error messages
  clearErrors();

  // Get form values
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let nickName = document.getElementById("nickName").value;
  let city = document.getElementById("city").value;
  let province = document.getElementById("provinceName").value;
  let termsChecked = document.getElementById("gridCheck").checked;

  // Validate email field
  if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    return false;
  }

  // Validate password field
  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number";
    return false;
  }

  // Validate confirm password field
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    return false;
  }

  // Validate name field
  if (!firstName.match(/^[a-zA-Z]+$/)) {
    document.getElementById("firstNameError").textContent =
      "Name must contain only alphabet characters";
    return false;
  }

  // Validate last name field
  if (!lastName.match(/^[a-zA-Z]+$/)) {
    document.getElementById("lastNameError").textContent =
      "Last name must contain only alphabet characters";
    return false;
  }

  // Validate nickname field
  if (nickName.trim() === "") {
    document.getElementById("nickNameError", "Please enter a nickname.");
    return false;
  }

  // Validate city name field
  if (!city.match(/^[a-zA-Z]+$/)) {
    document.getElementById("cityError").textContent =
      "City name must contain only alphabet characters";
    return false;
  }

  // Validate province name field
  if (province === "Choose...") {
    document.getElementById("provinceNameError").textContent =
      "Please select a province.";
    return false;
  }

  // Validate terms of service agreement
  if (!termsChecked) {
    alert("Please agree to the terms of service");
    return false;
  }

  // Registration successful
  document.getElementById("registrationForm").reset();
  document.getElementById("successMessage").style.display = "block";

  // Redirect to a new page (replace 'homepage.html' with the desired page)
  setTimeout(function () {
    window.location.href = "https://app.melsoftacademy.com/wp-login.php";
  }, 2000);

  return true;
}

function clearErrors() {
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  document.getElementById("nickNameError").textContent = "";
  document.getElementById("cityError").textContent = "";
  document.getElementById("provinceNameError").textContent = "";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Clear previous error message
  errorMessage.textContent = "";

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required.";
    return;
  }

  // Simple validation check (you can enhance this as needed)
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    // Redirect or further processing can go here
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});

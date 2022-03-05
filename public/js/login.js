// LOGIN FUNCTION STARTS HERE

const loginFormHandler = async (card) => {
  card.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Invalid email or password");
    }
  }
};
// LOGIN FUNCTION ENDS HERE

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// SIGNUP FUNCTION STARTS HERE

const signUpFormHandler = async (card) => {
  card.preventDefault();

  const first_name = document.querySelector("#signup-name").value.trim();
  const last_name = document.querySelector("#signup-last-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Invalid email or password");
    }
  }
};
// SIGNUP FUNCTION ENDS HERE

document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpFormHandler);

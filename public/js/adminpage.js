newFunction();
function newFunction() {
  (function () {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
}

const newFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  console.log(firstName);
  const lastName = document.querySelector("#last-name").value;
  console.log(lastName);
  const email = document.querySelector("#email").value;
  console.log(email);
  const password = document.querySelector("#password").value;
  console.log(password);
  const weight = document.querySelector("#weight").value;
  console.log(weight);
  const height = document.querySelector("#height").value;
  console.log(height);
  const gender = document.querySelector("#Gender").value;
  console.log(gender);
  const age = document.querySelector("#Age").value;
  console.log(age);
  const goal = document.querySelector("#goal").value;
  console.log(goal);
  if (
    firstName &&
    lastName &&
    email &&
    password &&
    weight &&
    height &&
    gender &&
    age &&
    goal
  ) {
    const response = await fetch(`/api/customers`, {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        weight,
        height,
        sex: gender,
        age,
        goal,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Fail to add Customer");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id"));
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/customer/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/admin");
  } else {
    alert("Failed to delete Customer");
  }
};

document
  .querySelector("#new-customer-form")
  .addEventListener("submit", newFormHandler);

const deletButtons = document.querySelectorAll(".customer-list");
for (const button of deletButtons) {
  button.addEventListener("click", delButtonHandler);
}
console.log(deletButtons);

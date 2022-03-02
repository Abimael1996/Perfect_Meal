var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

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

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const weight = document.querySelector("#weight").value.trim();
  const height = document.querySelector("#height").value.trim();
  const dateOfBirth = document.querySelector("#date-of-birth").value.trim();
  const gender = document.querySelector("#Gender").value.trim();
  const age = document.querySelector("#Age").value.trim();

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    weight &&
    height &&
    dateOfBirth &&
    gender & age
  ) {
    const response = await fetch(`/api/customers`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        weight,
        height,
        dateOfBirth,
        gender,
        age,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Fail to add Customer");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id"));
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/customers/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/admin");
  } else {
    alert("Failed to delete Customer");
  }
};

document
  .querySelector(".new.customer-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".customer-list")
  .addEventListener("click", delButtonHandler);

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
  const nutritionist_id = event.target.getAttribute("data-id");
  
  const firstName = document.querySelector("#first-name").value;
  
  const lastName = document.querySelector("#last-name").value;
  
  const weight = document.querySelector("#weight").value;
  
  const height = document.querySelector("#height").value;
  
  const gender = document.querySelector("#Gender").value;
  
  const age = document.querySelector("#Age").value;
  
  const goal = document.querySelector("#goal").value;
  
  const activity = document.querySelector("#activity").value;
  
  if (
    nutritionist_id &&
    firstName &&
    lastName &&
    weight &&
    height &&
    gender &&
    age &&
    goal &&
    activity
  ) {
    const response = await fetch(`/api/client`, {
      method: "POST",
      body: JSON.stringify({
        nutritionist_id,
        first_name: firstName,
        last_name: lastName,
        weight,
        height,
        sex: gender,
        age,
        goal,
        activity,
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

  const response = await fetch(`/api/client/${id}`, {
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


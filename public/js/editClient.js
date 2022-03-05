const updateClientBtn = document.querySelector("#update-client");
const clientId = document.querySelector("#update-client").getAttribute("data-id");

const putRequest = async (e) => {
    e.preventDefault();

    console.log(clientId);
    const first_name = document.querySelector("#first-name").value;
    console.log(first_name);
    const last_name = document.querySelector("#last-name").value;
    console.log(last_name);
    const weight = document.querySelector("#weight").value;
    console.log(weight);
    const height = document.querySelector("#height").value;
    console.log(height);
    const sex = document.querySelector("#gender").value;
    console.log(sex);
    const age = document.querySelector("#newAge").value;
    console.log(age);
    const goal = document.querySelector("#newGoal").value;
    console.log(goal);
    const activity = document.querySelector("#newActivity").value;
    console.log(activity);

    if (
        clientId &&
        first_name &&
        last_name &&
        weight &&
        height &&
        sex &&
        age &&
        goal &&
        activity
      ) {
        const response = await fetch(`/api/client/${clientId}`, {
          method: "PUT",
          body: JSON.stringify({
            first_name,
            last_name,
            weight,
            height,
            sex,
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
          alert("Fail to update Customer");
        }
      }
}

updateClientBtn.addEventListener("submit", putRequest);

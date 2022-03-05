const updateClientBtn = document.querySelector("#update-client");
const clientId = document.querySelector("#update-client").getAttribute("data-id");

const putRequest = async (e) => {
    e.preventDefault();

    
    const first_name = document.querySelector("#first-name").value;
    
    const last_name = document.querySelector("#last-name").value;
    
    const weight = document.querySelector("#weight").value;
    
    const height = document.querySelector("#height").value;
    
    const sex = document.querySelector("#gender").value;
    
    const age = document.querySelector("#newAge").value;
    
    const goal = document.querySelector("#newGoal").value;
    
    const activity = document.querySelector("#newActivity").value;
    

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

console.log(clientId);

const getClientPlans = async () => {
    const clientPlans = await fetch(`/api/plan/${clientId}`);
    if (clientPlans.ok) {
        const response = await clientPlans.json();
        console.log(response.length);
        if (response.length === 0) {

            const newMealPlan = {
                patient_id: clientId,
            }
            const res = await fetch("/api/plan", {
                method: "POST",
                headers: { "Content-Type": "Application/JSON" },
                body: JSON.stringify(newMealPlan),
            });
            if (res.ok) {
                window.location.reload();
            } else {
                alert("Something went wrong and a plan could not be added to this client");
            }
        }
    } else {
        alert("something went wrong");
    }
}


const postPlan = async (e) => {
    e.preventDefault();

    const newMealPlan = {
        name: planName,
        patient_id: id,
    };


    try {
        const res = await fetch("/api/plan", {
            method: "POST",
            headers: { "Content-Type": "Application/JSON" },
            body: JSON.stringify(newMealPlan),
        });
        if (res.ok) {
            window.location.replace(`${id}/plan`);
        } else {
            alert("something went wrong");
        }

    } catch (err) {

    }

}

getClientPlans();
createPlanBtn.addEventListener("click", postPlan);

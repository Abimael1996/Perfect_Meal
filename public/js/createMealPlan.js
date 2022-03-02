const createPlanBtn = document.querySelector("#create-plan");
const planName = createPlanBtn.getAttribute("data-name");
const id = createPlanBtn.getAttribute("data-id");
console.log(createPlanBtn);
console.log(planName);
console.log(id);

const postPlan = async (e) => {
    e.preventDefault();

    const newMealPlan = {
        name: planName,
        patient_id: id,
    };

    console.log(newMealPlan);
try {
    const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(newMealPlan),
    });
    if(res.ok) {
        window.location.replace(`client/${id}/plan`);
    }else {
        alert("something went wrong");
    }

}catch (err) {
    console.log(err);
}

}

createPlanBtn.addEventListener("click", postPlan);

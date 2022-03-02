// to calculate Food Energy, take "Maintenance Calories" and "Weight by the end of the week"
// and, depending on the later, substract (loss) or add (gain) calories, unless the goal is to maintain.
// To substract: ????
// To add: take 15% of "Maintenance Calories" and add them to "Maintenance Calories"

const maintenanceCal = document.querySelector("#maintenance-cal").textContent;
const currentWeight = document.querySelector("#current-weight").textContent;
const weightGoal = document.querySelector("#goal").getAttribute("data-goal");
const foodEnergyGoal = document.querySelector("#food-energy-goal");
const fatGoal = document.querySelector("#fat-goal");
const proteinGoal = document.querySelector("#protein-goal");
const carbsGoal = document.querySelector("#carbs-goal");

//CALCULATE VALUES

const calculateFoodEnergyGoal = () => {
    if(weightGoal === "gain") {
        return (maintenanceCal/100)*15+ +maintenanceCal;
    }
}

const calculateFatGoal = () => {
    if(weightGoal === "gain") {
        const foodEnergy = foodEnergyGoal.textContent;
        return (foodEnergy/100*30/9);
    }
}

const calculateproteinGoal = () => {
    if(weightGoal === "gain") {
        return proteinGoal.textContent = currentWeight;
    }
}

const calculateCarbsGoal = () => {
    if(weightGoal === "gain") {
        return ((foodEnergyGoal.textContent) - ((fatGoal.textContent * 9) + (proteinGoal.textContent * 4))) / 4;
    }

}
//RENDER ONE MACRO
const renderOneMacro = (macro, calculateMacro) => {
    macro.textContent = Math.round(calculateMacro());
}

// RENDER ALL MACROS

const renderMacros = () => {
    renderOneMacro(foodEnergyGoal, calculateFoodEnergyGoal);
    renderOneMacro(fatGoal, calculateFatGoal);
    renderOneMacro(proteinGoal, calculateproteinGoal);
    renderOneMacro(carbsGoal, calculateCarbsGoal);
}

renderMacros();

console.log(((calculateFoodEnergyGoal()) - ((calculateFatGoal() * 9) + (proteinGoal.textContent * 4))) / 4);

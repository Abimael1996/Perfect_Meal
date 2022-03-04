// to calculate Food Energy, take "Maintenance Calories" and "Weight by the end of the week"
// and, depending on the later, substract (loss) or add (gain) calories, unless the goal is to maintain.
// To substract: take 15% of "Maintenance Calories" and substract them to "Maintenance Calories"
// To add: take 15% of "Maintenance Calories" and add them to "Maintenance Calories"

const weekGoal = document.querySelector("#week-goal");
const age = document.querySelector("#age").textContent;
const sex = document.querySelector("#sex").textContent;
let tdde = document.querySelector("#tdde");
const currentWeight = document.querySelector("#current-weight").textContent;
const currentHeight = document.querySelector("#current-height").textContent;
const activity = document.querySelector("#activity").textContent;
const weightGoal = document.querySelector("#goal").getAttribute("data-goal");
const foodEnergyGoal = document.querySelector("#food-energy-goal");
const fatGoal = document.querySelector("#fat-goal");
const proteinGoal = document.querySelector("#protein-goal");
const carbsGoal = document.querySelector("#carbs-goal");

if(weightGoal === "Gain") {
    weekGoal.textContent = +currentWeight + 1;
}else if (weightGoal === "Lose") {
    weekGoal.textContent = +currentWeight - 1;
}else {
    weekGoal.textContent = currentWeight;
}
//CALCULATE VALUES

const calculateBRM = () => {
    const weightKg = currentWeight/2.2;
    const heightCm = currentHeight * 12 * 2.54;
    if(sex === "Male") {

        return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
        
    }else{
        return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
}

const calculateTDDE = () => {
        if(activity === "Sedentary"){
            const tddeResult = calculateBRM() * 1.2;
            console.log(tddeResult);
            return tddeResult;
        }else if(activity === "Light"){
            const tddeResult = calculateBRM() * 1.4;
            console.log(tddeResult);
            return tddeResult;
        }else if(activity === "Moderate"){
            const tddeResult = calculateBRM() * 1.5;
            console.log(tddeResult);
            return tddeResult;
        }else if(activity === "Heavy"){
            const tddeResult = calculateBRM() * 1.6;
            console.log(tddeResult);
            return tddeResult;
        }else {
            const tddeResult = calculateBRM() * 1.8;
            console.log(tddeResult);
            return tddeResult;
        };
}
const calculateFoodEnergyGoal = () => {
    const tddeResult = tdde.textContent;
    const tdde15 = (tddeResult/100)*15;
    if(weightGoal === "Gain") {
        return tdde15 + +tddeResult;
    }else if (weightGoal === "Lose") {
        return tddeResult - tdde15;
    }else{
        return tddeResult;
    }
}

const calculateFatGoal = () => {
        const foodEnergy = foodEnergyGoal.textContent;
        return (foodEnergy/100*30/9);
}

const calculateproteinGoal = () => {
        return proteinGoal.textContent = currentWeight;
}

const calculateCarbsGoal = () => {
        return ((foodEnergyGoal.textContent) - ((fatGoal.textContent * 9) + (proteinGoal.textContent * 4))) / 4;

}
//RENDER ONE MACRO
const renderOneMacro = (macro, calculateMacro) => {
    macro.textContent = Math.round(calculateMacro());
}

// RENDER ALL MACROS

const renderMacros = () => {
    renderOneMacro(tdde, calculateTDDE);
    renderOneMacro(foodEnergyGoal, calculateFoodEnergyGoal);
    renderOneMacro(fatGoal, calculateFatGoal);
    renderOneMacro(proteinGoal, calculateproteinGoal);
    renderOneMacro(carbsGoal, calculateCarbsGoal); 
}

renderMacros();

//console.log(((calculateFoodEnergyGoal()) - ((calculateFatGoal() * 9) + (proteinGoal.textContent * 4))) / 4);

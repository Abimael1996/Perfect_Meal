const fortnightGoal = document.querySelector("#fortnight-goal");
const age = document.querySelector("#age").textContent;
const sex = document.querySelector("#sex").textContent;
let tdde = document.querySelector("#tdde");
const currentWeight = document.querySelector("#current-weight").textContent;
const currentHeight = document.querySelector("#current-height").textContent;
const activity = document.querySelector("#activity").textContent;
const weightGoal = document.querySelector("#goal").getAttribute("data-goal");
const totalCaloriesGoal = document.querySelector("#total-calories-goal");
const fatGoal = document.querySelector("#fat-goal");
const proteinGoal = document.querySelector("#protein-goal");
const carbsGoal = document.querySelector("#carbs-goal");

//CALCULATE VALUES

if (weightGoal === "Gain") {
    fortnightGoal.textContent = +currentWeight + .5;
} else if (weightGoal === "Lose") {
    fortnightGoal.textContent = +currentWeight - .5;
} else {
    fortnightGoal.textContent = currentWeight;
}

const calculateBRM = () => {
    const heightInCm = currentHeight * 100;
    if (sex === "Male") {

        return (10 * currentWeight) + (6.25 * heightInCm) - (5 * age) + 5;

    } else {
        return (10 * currentWeight) + (6.25 * heightInCm) - (5 * age) - 161;
    }
}

const calculateTDDE = () => {
    if (activity === "Sedentary") {
        const tddeResult = calculateBRM() * 1.2;
        return tddeResult;
    } else if (activity === "Light") {
        const tddeResult = calculateBRM() * 1.4;
        return tddeResult;
    } else if (activity === "Moderate") {
        const tddeResult = calculateBRM() * 1.5;
        return tddeResult;
    } else if (activity === "Heavy") {
        const tddeResult = calculateBRM() * 1.6;
        return tddeResult;
    } else {
        const tddeResult = calculateBRM() * 1.8;
        return tddeResult;
    };
}
const calculateTotalCaloriesGoal = () => {
    const tddeResult = tdde.textContent;
    const tdde15 = (tddeResult / 100) * 15;
    if (weightGoal === "Gain") {
        return tdde15 + +tddeResult;
    } else if (weightGoal === "Lose") {
        return tddeResult - tdde15;
    } else {
        return tddeResult;
    }
}

const calculateFatGoal = () => {
    const totalCalories = totalCaloriesGoal.textContent;
    return (totalCalories / 100 * 30 / 9);
}

const calculateproteinGoal = () => {
    const weightInLb = currentWeight * 2.2;
    return proteinGoal.textContent = weightInLb;
}

const calculateCarbsGoal = () => {
    return ((totalCaloriesGoal.textContent) - ((fatGoal.textContent * 9) + (proteinGoal.textContent * 4))) / 4;

}
//RENDER ONE MACRO
const renderOneMacro = (macro, calculateMacro) => {
    macro.textContent = Math.round(calculateMacro());
}

// RENDER ALL MACROS
const renderMacros = () => {
    renderOneMacro(tdde, calculateTDDE);
    renderOneMacro(totalCaloriesGoal, calculateTotalCaloriesGoal);
    renderOneMacro(fatGoal, calculateFatGoal);
    renderOneMacro(proteinGoal, calculateproteinGoal);
    renderOneMacro(carbsGoal, calculateCarbsGoal);
}

renderMacros();

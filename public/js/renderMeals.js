//const days = document.querySelectorAll(".divDay");
const foodName = document.querySelectorAll(".foodName");

//console.log(days);
//console.log(meals);
//console.log(foodName);

let loop = 0;
let loop2 = 0;
const forLoop = () => {
    for (const day of days) {
        loop++
        console.log("loop " + loop);
        const meals = document.querySelectorAll(".divMeal");
        console.log(meals);
        for (const meal of meals) {
            loop2++
            console.log("loop2 " + loop2);
            console.log(meal.getAttribute("data-meal") === meal.parentElement.parentElement.getAttribute("data-meal"));
            console.log(meal.parentElement.parentElement.getAttribute("data-day") === meal.parentElement.getAttribute("data-day"));
            if (meal.getAttribute("data-meal") === meal.parentElement.parentElement.getAttribute("data-meal")
                && meal.parentElement.parentElement.getAttribute("data-day") === meal.parentElement.getAttribute("data-day")) {
                for (const name of meal.children) {
                    console.log(name.getAttribute("data-name"));
                    name.textContent = name.getAttribute("data-name");
                }
            } else {
                meal.parentElement.remove();
                break;
            }

        }
    }
};




for(const food of foodName) {
    const parent = food.parentElement;
    const grandParent = food.parentElement.parentElement;

    const row = food.parentElement.getAttribute("data-meal");
    const column = food.parentElement.parentElement.getAttribute("data-day");

    const rowParent = parent.parentElement.parentElement.getAttribute("data-meal");
    const columnParent = grandParent.parentElement.getAttribute("data-day");

    const foodName = food.getAttribute("data-name");



    if(row === rowParent && column === columnParent) {
        food.textContent = foodName;
    } 

};

const survFood = document.querySelectorAll(".foodName");

for (const each of survFood) {
    if(!each.textContent) {
        each.parentElement.remove();
    }
};

const divs = document.querySelectorAll(".divDay");

console.log(divs.length);


for (const div of divs) {
    if (div.children.length === 0) {
        div.remove();
    }
}

const cells = document.querySelectorAll(".cell");

for (const cell of cells) {
    if(cell.children.length === 0){
        cell.textContent = "ADD MEAL"
    }
}

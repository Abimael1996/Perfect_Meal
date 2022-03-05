const foodName = document.querySelectorAll(".foodName");

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
        /*<a href=""
        class="btn btn-success btn-rounded add-meal-btn"
        data-toggle="modal"
        data-target="#modalMeal">Add Meal</a>*/
        const addMealTd = document.createElement("a");
        addMealTd.classList.add('btn', 'btn-success', 'btn-rounded' ,'add-meal-btn');
        addMealTd.setAttribute('data-toggle','modal');
        addMealTd.setAttribute('data-target', '#modalMeal');
        addMealTd.textContent = "Add Meal"
        cell.appendChild(addMealTd);
        // cell.textContent = "Add Meal"
    }
}
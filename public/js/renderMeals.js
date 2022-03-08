const foodName = document.querySelectorAll(".foodName");
const cells = document.querySelectorAll(".cell");
let editMode = false;
console.log(editMode);

// Pulls meals from database and renders them into the calendar
// This won't do anything if there is no meals in the database
const renderMeals = () => {
    const foodName = document.querySelectorAll(".foodName");
    for (const food of foodName) {
        const parent = food.parentElement;
        const grandParent = food.parentElement.parentElement;

        const row = food.parentElement.getAttribute("data-meal");
        const column = food.parentElement.parentElement.getAttribute("data-day");

        const rowParent = parent.parentElement.parentElement.getAttribute("data-meal");
        const columnParent = grandParent.parentElement.getAttribute("data-day");

        const foodTitle = food.getAttribute("data-name");
        if (row === rowParent && column === columnParent) {
            // On edit mode, the meals render with a trash icon !!and that icon gets selected for later use!!
            if (editMode) {
                food.setAttribute('data-toggle', 'modal');
                food.setAttribute('data-target', '#modalMeal');
                food.innerHTML = `${foodTitle} <span class="delete-meal"><i class="fas fa-trash-alt float-right text-danger delete-meal"></i></span>`;
            // On "displayed mode", the meals render with no trash icon, you can't delete them from here
            } else {
                food.setAttribute('data-toggle', 'modal');
                food.setAttribute('data-target', '#modalMeal');
                food.innerHTML = foodTitle;
            }
        }
    };

    const survFood = document.querySelectorAll(".foodName");

    for (const each of survFood) {
        if (!each.textContent) {
            each.parentElement.remove();
        }
    };

    const divs = document.querySelectorAll(".divDay");

    for (const div of divs) {
        if (div.children.length === 0) {
            div.remove();
        }
    }
}

// On edit mode, it fills the empty cells with Add Meal buttons
const renderAddBtn = () => {
    if (editMode) {
        for (const cell of cells) {
            if (cell.children.length === 0) {
                const addMealTd = document.createElement("a");
                addMealTd.classList.add('btn', 'btn-success', 'btn-rounded', 'add-meal-btn');
                addMealTd.setAttribute('data-toggle', 'modal');
                addMealTd.setAttribute('data-target', '#modalMeal');
                addMealTd.textContent = "Add Meal";
                cell.appendChild(addMealTd);
            } else {
                const addMealTd = document.createElement("a");
                addMealTd.classList.add('btn', 'btn-success', 'btn-rounded', 'add-meal-btn', 'btn-sm');
                addMealTd.setAttribute('data-toggle', 'modal');
                addMealTd.setAttribute('data-target', '#modalMeal');
                addMealTd.textContent = "Add Meal";
                cell.appendChild(addMealTd);
            }
        }
    }

}

renderMeals();


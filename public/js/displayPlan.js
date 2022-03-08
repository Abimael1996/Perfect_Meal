const foodLabel = document.querySelector("#foodLabel");
const notesLabel = document.querySelector("#notesLabel");
const switchMode = document.querySelector("#display-plan");

const renderModalInfo = (title, note) => {
    hide(createMealBtn);
    hide(updateMealBtn);
    hide(foodTitleInput);
    hide(notesInput);
    foodLabel.textContent = title;
    notesLabel.textContent = note;

    const modal = document.querySelector("#modalMeal");
}

// This button is either Display Plan or Edit Plan
switchMode.addEventListener("click", (e) => {
    e.preventDefault();
    // If we are on display mode, we enter edit mode
    // Then the meals render from the database again but with the buttons as well
    // If there are no meals in the database, the calendar with be full of Add Meal buttons
    if (!editMode) {
        editMode = true;
        console.log(editMode);
        switchMode.textContent = "Display Plan";
        renderAddBtn();
        renderMeals();
        const trashBtn = document.querySelectorAll(".delete-meal");
        trashBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteMeal(e.target.parentElement.parentElement.getAttribute('data-meal-id'), e.target.parentElement.parentElement);
            });
        });
        const addMealBtn = document.querySelectorAll('.add-meal-btn');
        // The add meal buttons return the "coordenates" of the cell it belongs to
        // These values are stored globally and therefore can be used on any function WHILE on edit mode
        // This will also open the modal and will "recieve" the coordenates
        addMealBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                cell = e.target.parentElement;
                mealTime = cell.parentElement.getAttribute('data-mealtime');
                day = cell.getAttribute('data-day');
                foodLabel.textContent = "Food name";
                notesLabel.textContent = "Notes";
                foodTitleInput.value = null;
                notesInput.value = null;
                createMealBtn.setAttribute('disabled', '');
                hide(updateMealBtn);
                show(createMealBtn);
                show(foodTitleInput);
                show(notesInput);
            })
        });
        foodName.forEach(name => {
            name.addEventListener('click', (e) => {
                const title = e.target.getAttribute('data-name');
                const note = e.target.getAttribute('data-note');
                const mealId = e.target.getAttribute("data-meal-id")
                if (editMode) {
                    renderModal(title, note, mealId);
                }
            })
        })
        // When on edit mode the page refreshes and we are taken back into display mode
    } else {
        window.location.reload();
    }
    //   const addMealBtn = document.querySelectorAll(".add-meal-btn");
    //    addMealBtn.forEach(btn => btn.remove());
});



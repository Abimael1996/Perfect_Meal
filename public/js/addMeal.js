const foodTitleInput = document.querySelector('#food-title');
const notesInput = document.querySelector('#notes');
const createMealBtn = document.querySelector('#create-meal');
const updateMealBtn = document.querySelector('#update-meal');
const planTitle = document.querySelector('.plan-title');
const modalTitleSection = document.querySelector('.title-section');
const modalNoteSection = document.querySelector('.note-section');
const closeModalBtn = document.querySelector('.modal-header .close');

let planId = planTitle.getAttribute('data-planid');
let mealTime;
let day;
let postData = {};
let cell;

foodName.forEach(name => {
    name.addEventListener('click', (e) => {
        if (!editMode) {
            const title = e.target.getAttribute('data-name');
            const note = e.target.getAttribute('data-note');
            renderModalInfo(title, note);
        }
    })
});

//Keeps button disabled until a Meal title or Ingredient is added.
foodTitleInput.addEventListener('input', (e) => {
    if (e.target.value != '') {
        createMealBtn.removeAttribute('disabled');
    } else {
        createMealBtn.setAttribute('disabled', '');
    }
});

// Show an element
const show = (elem) => {
    elem.classList.remove('invisible');
};

// Hide an element
const hide = (elem) => {
    elem.classList.add('invisible');
};

// API interaction
const getIngredients = () =>
    fetch('/api/igredients', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

// This function triggers a chain of post requests
// Each request but the first one depends on the previous one
// This chain of requests work perfectly and there is no reason to review them and/or alter it
async function addMeal(postData, cell) {
    const day = await fetch('/api/days', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    const dayResponse = await day.json();
    const mealData = {
        meal_time: mealTime,
        day_id: dayResponse.id
    }

    const meal = await fetch('/api/meals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealData),
    });

    const mealResponse = await meal.json();
    const mealId = mealResponse.id;

    const foodData = {
        name: foodTitleInput.value,
        meal_id: mealId
    }

    const food = await fetch('/api/foods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
    });

    const foodResponse = await food.json();

    const notesData = {
        name: notesInput.value,
        food_id: foodResponse.id
    };

    const note = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(notesData),
    });

    const noteResponse = await note.json();

    // Once the chain is finished, the value of the food title entered in the modal
    // renders on the cell it belongs to
    // These names do not come from the database at this point, although they exist there too
    // Once we switch to Display Mode and then back to Edit Mode, the names will still be there
    // but this time they WILL come from the database
    if (note.ok) {
        const divDay = document.createElement("div");
        const divMeal = document.createElement("div");
        const foodName = document.createElement("p");
        foodName.setAttribute("data-meal-id", mealId);
        foodName.setAttribute("data-name", foodResponse.name);
        foodName.setAttribute("data-note", noteResponse.name);
        foodName.setAttribute("data-toggle", "modal");
        foodName.setAttribute("data-target", "#modalMeal");
        foodName.setAttribute("class", "foodName");
        // Here we create the trash icon for the first time, it should be selected after this point
        foodName.innerHTML = `${foodTitleInput.value} <span class="delete-meal"><i class="fas fa-trash-alt float-right text-danger"></i></span>`;
        cell.prepend(divDay);
        divDay.appendChild(divMeal);
        divMeal.appendChild(foodName);

        foodName.addEventListener("click", (e) => {
            const title = e.target.getAttribute('data-name');
            const note = e.target.getAttribute('data-note');
            const mealId = e.target.getAttribute("data-meal-id")
            if (editMode) {
                renderModal(title, note, mealId);
            }
        })

        const deleteMealBtn = document.querySelectorAll('.delete-meal');
        deleteMealBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(e.target.parentElement.parentElement.getAttribute("data-meal-id"));
                deleteMeal(e.target.parentElement.parentElement.getAttribute('data-meal-id'), e.target.parentElement.parentElement);
            });
        });

    } else {
        new Error('Something went wrong!');
        alert('Something went wrong!');
    }
}

async function deleteMeal(id, foodName) {
    const removeMeal = await fetch(`/api/meals/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (removeMeal.ok) {
        foodName.remove();

    } else {
        new Error('Something went wrong!');
        alert('Something went wrong!');
    }
}

//Functions
function renderModal(title, note, id) {
    show(updateMealBtn);
    hide(createMealBtn);
    show(foodTitleInput);
    show(notesInput);
    foodLabel.textContent = "Food name";
    notesLabel.textContent = "Notes";
    const titleEl = document.createElement('p');
    titleEl.textContent = title;
    modalTitleSection.setAttribute("data-meal-id", id);

    foodTitleInput.value = title;
    notesInput.value = note;
}

updateMealBtn.addEventListener("click", async () => {
    const id = modalTitleSection.getAttribute("data-meal-id");
    const foodData = {
        name: foodTitleInput.value,
    }

    const mealResponse = await fetch(`/api/meals/${id}`);
    const foodId = await mealResponse.json();

    const newFood = await fetch(`/api/foods/${foodId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
    });

    const newFoodResponse = await newFood.json();

    const notesData = {
        name: notesInput.value,
    };

    const getNoteContent = await fetch(`/api/foods/${foodId}`);
    const ingredientId = await getNoteContent.json();

    const finalResponse = await fetch(`/api/notes/${ingredientId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(notesData),
    });

    if (finalResponse.ok) {
        const foodName = document.querySelectorAll(".foodName");
        for (const name of foodName) {
            if (name.getAttribute("data-meal-id") === id) {
                name.innerHTML = `${foodTitleInput.value} <span class="delete-meal"><i class="fas fa-trash-alt float-right text-danger"></i></span>`;
                name.setAttribute("data-name", foodTitleInput.value);
                name.setAttribute("data-note", notesInput.value)

            }
        }
        const deleteMealBtn = document.querySelectorAll('.delete-meal');

        deleteMealBtn.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(e.target.parentElement.parentElement.getAttribute("data-meal-id"));
                deleteMeal(e.target.parentElement.parentElement.getAttribute('data-meal-id'), e.target.parentElement.parentElement);
            });
        })
    } else {
        alert("something went wrong")
    }

})
// Add a new Meal
// Inside the modal we click on Create Meal
// Then we trigger a function that receives the data needed to create a Day
createMealBtn.addEventListener('click', (e) => {
    console.log("CLICKEE ESTO");
    postData.plan_id = planId;
    postData.day = day;

    addMeal(postData, cell);
});



const addMealBtn = document.querySelectorAll('.add-meal-btn');
const foodTitleInput = document.querySelector('#food-title');
const notesInput = document.querySelector('#notes');
const updateMealtBtn = document.querySelector('.update-meal');
const createMealBtn = document.querySelector('.create-meal');
const planTitle = document.querySelector('.plan-title');
const deleteMealBtn = document.querySelectorAll('.delete-meal');
const mealEl = document.querySelectorAll('.foodName');
const modalTitleSection = document.querySelector('.title-section');
const modalNoteSection = document.querySelector('.note-section');
const closeModalBtn = document.querySelector('.modal-header .close');

let planId = planTitle.getAttribute('data-planid');
let mealTime;
let day;
let postData = {};

//Keeps button disabled until a Meal title or Ingredient is added.
addMealBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        mealTime = e.target.parentElement.parentElement.getAttribute('data-mealtime');
        day = e.target.parentElement.getAttribute('data-day');
    })
});

deleteMealBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        deleteMeal(e.target.parentElement.getAttribute('data-meal-id'));
    });
});

foodTitleInput.addEventListener('input', (e) => {
    if (e.target.value != '') {
        createMealBtn.removeAttribute('disabled');
    } else {
        createMealBtn.setAttribute('disabled', '');
    }
});

closeModalBtn.addEventListener('click', () => {
    document.location.reload();
})

mealEl.forEach(meal => {
    meal.addEventListener('click', (e) => {
        const title = e.target.getAttribute('data-name');
        const note = e.target.getAttribute('data-note');
        renderModal(title, note);
    })
});

// Show an element
const show = (elem) => {
    elem.classList.remove('invisible');
};

// Hide an element
const hide = (elem) => {
    elem.style.display = 'none';
};

// API interaction
const getIngredients = () =>
    fetch('/api/igredients', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

async function addMeal(postData) {
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

    if (note.ok) {
        window.location.reload();
    } else {
        new Error('Something went wrong!');
        alert('Something went wrong!');
    }
}

async function deleteMeal(id) {
    const removeMeal = await fetch(`/api/meals/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (removeMeal.ok) {
        window.location.reload();
    } else {
        new Error('Something went wrong!');
        alert('Something went wrong!');
    }
}
//Functions
function renderModal(title, note) {
    hide(createMealBtn);
    const titleDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    titleEl.textContent = title;

    const noteDiv = document.createElement('div');
    const noteEl = document.createElement('p');
    noteEl.textContent = note;

    titleDiv.appendChild(titleEl);
    noteDiv.appendChild(noteEl);
    modalTitleSection.removeChild(document.querySelector('input'));
    modalNoteSection.removeChild(document.querySelector('textarea'));
    modalTitleSection.appendChild(titleDiv);
    modalNoteSection.appendChild(noteDiv);
}

// Add a new Meal
createMealBtn.addEventListener('click', (e) => {
    postData.plan_id = planId;
    postData.day = day;

    addMeal(postData);
});

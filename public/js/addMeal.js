const addMealBtn = document.querySelectorAll('.add-meal-btn');
const foodTitleInput = document.querySelector('#food-title');
const notesInput = document.querySelector('#notes');
const updateMealtBtn = document.querySelector('.update-meal');
const createMealBtn = document.querySelector('.create-meal');
const meal = document.querySelectorAll('.meal');
const planTitle = document.querySelector('.plan-title');

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
    }); ///DELETE 

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


// const deleteIngredient = (id) =>
//     fetch(`/api/ingredients/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

// const getMeals = () =>
//     fetch('/api/meals', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

// const createMeal = (meal) =>
//     fetch('/api/meals', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(meal),
//     });

// const deleteMeal = (id) =>
//     fetch(`/api/meals/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });


//Functions
// const handleIngredientDelete = (e) => {
//     ingredientList.removeChild(e.target.parentElement);
// };

// Add a new Meal
createMealBtn.addEventListener('click', (e) => {
    postData.plan_id = planId;
    postData.day = day;

    console.log(postData)

    addMeal(postData);
    //window.location.reload()
});

//Render Ingredients when clicking on a Meal TODO-------
// meal.forEach(element => {
//     element.addEventListener('click', getAndRenderIngredients());
// });


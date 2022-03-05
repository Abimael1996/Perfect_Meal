const addMealBtn = document.querySelectorAll('.add-meal-btn');
const foodTitleInput = document.querySelector('#food-title');
const ingredientInput = document.querySelector('#ingredient');
const addIngredientBtn = document.querySelector('.add-ingredient');
const updateIngredientBtn = document.querySelector('.update-ingredient');
const createMealBtn = document.querySelector('.create-meal');
const ingredientList = document.querySelectorAll('.list-container .list-group');
const meal = document.querySelectorAll('.meal');
const planTitle = document.querySelector('.plan-title');
let planId = planTitle.getAttribute('data-planid');
let mealTime;
let day;
let postData = {};

// createMealBtn.parentElement.parentElement.getAttribute('data-mealtime')
// createMealBtn.parentElement.getAttribute('data-day')


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

ingredientInput.addEventListener('input', (e) => {
    if (e.target.value != '') {
        addIngredientBtn.removeAttribute('disabled');
    } else {
        addIngredientBtn.setAttribute('disabled', '');
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

async function addIngredient(postData) {
    const day = await fetch('/api/days', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    console.log(day);

    const meal = await fetch('/api/meals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(day),
    });

    console.log(meal);

    const food = await fetch('/api/foods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meal),
    });

    console.log(food);

    const mealFood = await fetch('/api/mealfoods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
    });

    console.log(mealFood);

    const ingredient = await fetch('/api/ingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealFood),
    });

    console.log(mealFood);

    const foodIngredients = await fetch('/api/foodingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
    });

    console.log(foodIngredients);
}


const deleteIngredient = (id) =>
    fetch(`/api/ingredients/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

// const getMeals = () =>
//     fetch('/api/meals', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

const createMeal = (meal) =>
    fetch('/api/meals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meal),
    });

const deleteMeal = (id) =>
    fetch(`/api/meals/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

// Add an ingredient
addIngredientBtn.addEventListener('click', (e) => {
    postData.plan_id = planId;
    postData.day = day;

    console.log(postData);

    addIngredient(postData);
    //getIngredients();
});

//Render Ingredients when clicking on a Meal TODO-------
// meal.forEach(element => {
//     element.addEventListener('click', getAndRenderIngredients());
// });


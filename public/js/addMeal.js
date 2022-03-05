const addMealBtn = document.querySelectorAll('.add-meal-btn');
const foodTitleInput = document.querySelector('#food-title');
const ingredientInput = document.querySelector('#ingredient');
const addIngredientBtn = document.querySelector('.add-ingredient');
const updateIngredientBtn = document.querySelector('.update-ingredient');
const createMealBtn = document.querySelector('.create-meal');
const ingredientList = document.querySelector('.list-container .list-group');
const ingredients = document.querySelectorAll('.ingredient-item')
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
        name: foodTitleInput.value
    }

    const food = await fetch('/api/foods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
    });

    const foodResponse = await food.json();
    const mealFoodData = {
        meal_id: mealId,
        food_id: foodResponse.id
    };

    const mealFood = await fetch('/api/mealfoods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealFoodData),
    });

    const mealFoodResponse = await mealFood.json();
    ////

    const ingredientData = {
        name: ingredient.value
    };

    const ingredient = await fetch('/api/ingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredientData),
    });

    // console.log(mealFood);

    // const foodIngredients = await fetch('/api/foodingredients', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(ingredient),
    // });

    // console.log(foodIngredients);
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

const handleIngredientDelete = (e) => {
    ingredientList.removeChild(e.target.parentElement);
};

// Add an ingredient
createMealBtn.addEventListener('click', (e) => {
    postData.plan_id = planId;
    postData.day = day;

    console.log(postData);

    addMeal(postData);
    //getIngredients();
});

addIngredientBtn.addEventListener('click', (e) => {
    const ingredient = document.createElement("li");
    const delBtnEl = document.createElement('i');

    delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
    );
    delBtnEl.addEventListener('click', handleIngredientDelete);
    ingredient.classList.add('ingredient-item');
    ingredient.style.listStyleType = 'none';
    ingredient.textContent = ingredientInput.value;
    ingredient.append(delBtnEl);
    ingredientList.appendChild(ingredient);
});

//Render Ingredients when clicking on a Meal TODO-------
// meal.forEach(element => {
//     element.addEventListener('click', getAndRenderIngredients());
// });


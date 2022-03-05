const foodTitleInput = document.querySelector('#food-title');
const ingredientInput = document.querySelector('#ingredient');
const addIngredientBtn = document.querySelector('.add-ingredient');
const updateIngredientBtn = document.querySelector('.update-ingredient');
const createMealBtn = document.querySelector('.create-meal');
const ingredientList = document.querySelectorAll('.list-container .list-group');
const addMealBtn = document.querySelectorAll('');
const mealTime = document.querySelectorAll('[id*=meal-]');
const meal = docuemnt.querySelectorAll('.meal');

// mealTime[0].textContent = 'Breakfast';
// mealTime[1].textContent = 'Snack 1';
// mealTime[2].textContent = 'Lunch';
// mealTime[3].textContent = 'Snack 2';
// mealTime[4].textContent = 'Dinner';

//Keeps button disabled until a Meal title or Ingredient is added.
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

//Render Ingredients when clicking on a Meal
meal.forEach(element => {
    element.addEventListener('click', getAndRenderIngredients());
})

addIngredientBtn.addEventListener('click', addIngredientToList(element));

// Show an element
const show = (elem) => {
    elem.classList.remove('invisible');
};

// Hide an element
const hide = (elem) => {
    elem.classList.add('invisible');
};

// activeNote is used to keep track of the note in the textarea
let activeIngredient = {};

// API interaction
const getIngredients = () =>
    fetch('/api/igredients', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

const addIngredient = (ingredient) =>
    fetch('/api/ingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
    });

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

const renderActiveIngredient = () => {
    hide(addIngredientBtn);
    show(updateIngredientBtn);

    if (activeNote.id) {
        ingredientInput.value = activeIngredient.title;
    }
    // } else {
    //     noteTitle.removeAttribute('readonly');
    //     noteText.removeAttribute('readonly');
    //     noteTitle.value = '';
    //     noteText.value = '';
    // }
};

const handleIngredientSave = () => {
  const newIngredient = {
    name: ingredientInput.value,
  };
  saveNote(newIngredient).then(() => {
    getAndRenderIngredients();
    renderActiveIngredient();
  });
};

function addIngredientToList(element) {
    addIngredient(element.target.value);
}
/*-------------
-----------------*/

// Delete the clicked note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const note = e.target;
  const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

  if (activeNote.id === noteId) {
    activeNote = {};
  }

  deleteNote(noteId).then(() => {
    getAndRenderIngredients();
    renderActiveIngredient();
  });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
  renderActiveIngredient();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  activeNote = {};
  renderActiveIngredient();
};

const handleRenderSaveBtn = () => {
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    show(saveNoteBtn);
  }
};

// Render the list of note titles
const renderIngredientList = async (ingredients) => {
  let jsonIngredients = await ingredients.json();
  if (window.location.pathname === '/notes') {
    ingredientList.forEach((el) => (el.innerHTML = ''));
  }

  let ingredientListItems = [];

  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');

    const spanEl = document.createElement('span');
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;
    spanEl.addEventListener('click', handleNoteView);

    liEl.append(spanEl);

    if (delBtn) {
      const delBtnEl = document.createElement('i');
      delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
      );
      delBtnEl.addEventListener('click', handleNoteDelete);

      liEl.append(delBtnEl);
    }

    return liEl;
  };

  if (jsonIngredients.length === 0) {
    ingredientListItems.push(createLi('No saved Notes', false));
  }

  jsonIngredients.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);

    ingredientListItems.push(li);
  });

  if (window.location.pathname === '/notes') {
    ingredientListItems.forEach((note) => noteList[0].append(note));
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderIngredients = () => getIngredients().then(renderIngredientList);

if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);
}



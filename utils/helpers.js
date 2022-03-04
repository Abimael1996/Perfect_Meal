module.exports = {
    next: (id) => {
        return id + 1;
    },
    before: (id) => {
        return id - 1;
    },
    times: (number, options) => {
        var ret = "";

        for (var i = 1, j = number; i < j; i++) {
            ret = ret + options.fn(i);
        }

        return ret;
    },
    setVar: (varName, varValue, options) => {
        options.data.root[varName] = varValue;

    },
    hasMeals: (mealPlan, day, mealTime, options) => {
        if(mealPlan.days.length === 0) return options.inverse(this);

        const indexDay = mealPlan.days.findIndex(element => element.day == day);
        let render = [`<a href=""
        class="btn btn-success btn-rounded btn-sm add-meal-btn"
        data-toggle="modal"
        data-target="#modalMeal">Add Meal</a>`];
        const meals = mealPlan.days[indexDay].meals;

        if (meals.length > 0) {
            const mealIndex = meals.findIndex(element => element.meal_time == mealTime);
            if (mealIndex != -1) {
                const foods = meals[mealIndex].food;
                for (const food of foods) {
                    // render.push('<div>' + food.name + '</div>');
                    render.unshift(`<a href=""
                    class="btn btn-success btn-rounded mb-4 meal"
                    data-toggle="modal"
                    data-target="#modalMeal">${food.name}</a>`)
                }
                return render.join('');
            } else {
                return options.inverse(this);
            }
        } else {
            return options.inverse(this);
        }
    }
};
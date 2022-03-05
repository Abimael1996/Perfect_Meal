module.exports = {
    next: (clients, id) => {
        for (const client of clients) {
            if (client.id === id) {
                if (id != clients[clients.length - 1].id) {
                    return clients[clients.indexOf(client) + 1].id
                } else {
                    return clients[0].id;
                }
            }
        }
    },

    before: (clients, id) => {
        for (const client of clients) {
            if (client.id === id) {
                if (id != clients[0].id) {
                    return clients[clients.indexOf(client) - 1].id
                } else {
                    return clients[clients.length - 1].id;
                }
            }
        }
    },

    nextName: (clients, id) => {
        for (const client of clients) {
            if (client.id === id) {
                if (id != clients[clients.length - 1].id) {
                    return clients[clients.indexOf(client) + 1].first_name
                } else {
                    return clients[0].first_name;
                }
            }
        }
    },

    prevName: (clients, id) => {
        for (const client of clients) {
            if (client.id === id) {
                if (id != clients[0].id) {
                    return clients[clients.indexOf(client) - 1].first_name
                } else {
                    return clients[clients.length - 1].first_name;
                }
            }
        }
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
        
        if (mealPlan.plan.days.length === 0) return options.inverse(this);

        const indexDay = mealPlan.plan.days.findIndex(element => element.day == day);
        let render = [`<a href=""
        class="btn btn-success btn-rounded btn-sm add-meal-btn"
        data-toggle="modal"
        data-target="#modalMeal">Add Meal</a>`];

        if (indexDay === -1) return options.inverse(this);
      
        const meals = mealPlan.plan.days[indexDay].meals;

        if (meals.length > 0) {
            const mealIndex = meals.findIndex(element => element.meal_time == mealTime);
            if (mealIndex != -1) {
                const foods = meals[mealIndex].food;
                for (const food of foods) {
                    // render.push('<div>' + food.name + '</div>');
                    render.unshift(`<a href=""
                    class="btn meal"
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
    },
    oppositeSex: (currentSex) => {
        if (currentSex === "Male") {
            return "Female"
        } else {
            return "Male"
        }
    },

    newGoalA: (currentGoal) => {
        if (currentGoal === "Gain" || currentGoal === "Maintain") {
            return "Lose"
        } else {
            return "Gain"
        }
    },

    newGoalB: (currentGoal) => {
        if (currentGoal === "Gain" || currentGoal === "Lose") {
            return "Maintain"
        } else {
            return "Lose"
        }
    },

    newActivityA: (currentActivity) => {
        if (currentActivity === "Sedentary") {
            return "Light"
        } else {
            return "Sedentary"
        }
    },

    newActivityB: (currentActivity) => {
        if (currentActivity === "Sedentary" || currentActivity === "Light") {
            return "Moderate"
        } else {
            return "Light"
        }
    },

    newActivityC: (currentActivity) => {
        if (currentActivity === "Heavy" || currentActivity === "Athlete") {
            return "Moderate"
        } else {
            return "Heavy"
        }
    },

    newActivityD: (currentActivity) => {
        if (currentActivity === "Athlete") {
            return "Heavy"
        } else {
            return "Athlete"
        }
    },
};
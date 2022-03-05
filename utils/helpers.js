module.exports = {
    next: (clients, id) => {
        for(const client of clients) {
            if (client.id === id) {
                if(id != clients[clients.length - 1].id){
                    return clients[clients.indexOf(client) + 1].id
                }else{
                    return clients[0].id;
                }
            }
        }
    },

    before: (clients, id) => {
        for(const client of clients) {
            if (client.id === id) {
                if(id != clients[0].id){
                    return clients[clients.indexOf(client) - 1].id
                }else{
                    return clients[clients.length - 1].id;
                }
            }
        }
    },

    nextName: (clients, id) => {
        for(const client of clients) {
            if (client.id === id) {
                if(id != clients[clients.length - 1].id){
                    return clients[clients.indexOf(client) + 1].first_name
                }else{
                    return clients[0].first_name;
                }
            }
        }
    },

    prevName: (clients, id) => {
        for(const client of clients) {
            if (client.id === id) {
                if(id != clients[0].id){
                    return clients[clients.indexOf(client) - 1].first_name
                }else{
                    return clients[clients.length - 1].first_name;
                }
            }
        }
    },

    oppositeSex: (currentSex) => {
        if(currentSex === "Male") {
            return "Female"
        }else {
            return "Male"
        }
    },

    newGoalA: (currentGoal) => {
        if(currentGoal === "Gain" || currentGoal === "Maintain") {
            return "Lose"
        }else{
            return "Gain"
        }
    },

    newGoalB: (currentGoal) => {
        if(currentGoal === "Gain" || currentGoal === "Lose") {
            return "Maintain"
        }else{
            return "Lose"
        }
    },

    newActivityA: (currentActivity) => {
        if(currentActivity === "Sedentary") {
            return "Light"
        }else{
            return "Sedentary"
        }
    },

    newActivityB: (currentActivity) => {
        if(currentActivity === "Sedentary" || currentActivity === "Light") {
            return "Moderate"
        }else{
            return "Light"
        }
    },

    newActivityC: (currentActivity) => {
        if(currentActivity === "Heavy" || currentActivity === "Athlete") {
            return "Moderate"
        }else{
            return "Heavy"
        }
    },

    newActivityD: (currentActivity) => {
        if(currentActivity === "Athlete") {
            return "Heavy"
        }else{
            return "Athlete"
        }
    },
};
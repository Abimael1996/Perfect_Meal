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

};
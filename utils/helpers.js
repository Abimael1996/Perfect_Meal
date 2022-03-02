module.exports = {
    next: (id) => {
        return id + 1;
    },

    before: (id) => {
        return id - 1;
    }
};
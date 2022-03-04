module.exports = {
    next: (id) => {
        return id + 1;
    },
    before: (id) => {
        return id - 1;
    },
    times: (number, options) => {
        var ret = "";

        for (var i = 0, j = number; i < j; i++) {
            ret = ret + options.fn(i);
        }

        return ret;
    },
    isEqual: (option1, option2, options) => {
        console.log(option1)
        console.log(option2)
        if (option1 === option2) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },
    setVar: (varName, varValue, options) => {
        options.data.root[varName] = varValue;
    }
};
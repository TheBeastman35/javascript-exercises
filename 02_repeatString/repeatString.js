const repeatString = function(string, num) {
    let bigString = "";

    if (num < 0)
    {
        return 'ERROR';
    }

    for (let i = 0; i < num; ++i)
    {
        bigString = bigString + string;
    }

    return bigString;
};

// Do not edit below this line
module.exports = repeatString;

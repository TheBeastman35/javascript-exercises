const reverseString = function(str) {
    let retString = "";

    for (let i = str.length - 1; i >= 0; --i)
    {
        retString = retString + str.charAt(i);
    }

    return retString;
};

// Do not edit below this line
module.exports = reverseString;

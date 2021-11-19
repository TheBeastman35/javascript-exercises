const removeFromArray = function(array, num) {

    let newArray = [];

    let args = Array.from(arguments);

    for (let i = 0; i < array.length; ++i)
    {
        for (let j = 0; j < args.length; ++j)
        {
            if (array[i] == args[j] && typeof(array[i]) == typeof(args[j]))
            {
                break;
            }

            else if (j == args.length - 1)
            {
                newArray.push(array[i]);
            }
        }
    }

    console.log(newArray);

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

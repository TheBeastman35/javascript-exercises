const sumAll = function(num1, num2) {
    let finNum = 0;

    let i = 0;
    let loopEnd = 0;

    if (num1 == num2)
    {
        return finNum = num1;
    }

    else if (num1 < 0)
    {
        return 'ERROR';
    }

    else if (typeof(num1) != typeof(num2))
    {
        return 'ERROR';
    }

    else if (num1 < num2)
    {
        i = num1;
        loopEnd = num2;
    }

    else
    {
        i = num2;
        loopEnd = num1;
    }

    for (i; i <= loopEnd; ++i)
    {
        finNum += i;
    }

    return finNum;
};

// Do not edit below this line
module.exports = sumAll;

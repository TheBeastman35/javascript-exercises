const fibonacci = function(fibNum) {
    if (fibNum == 1 || fibNum == 2)
    {
        return 1;
    }

    else if (fibNum < 0)
    {
        return "OOPS";
    }

    let fibo = [1, 1];

    let newFib = 0;

    for (let i = 1; i < fibNum; ++i)
    {
        newFib = fibo[i] + fibo[i - 1];
        fibo.push(newFib);
    }

    return fibo[fibNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;

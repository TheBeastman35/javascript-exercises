const palindromes = function (string) {

    let newString = string.toLowerCase();

    //regex to get rid of non-alphanumeric characters
    newString = newString.replace( /[^0-9a-z]/gi, '');

    let revString = "";

    for (let i = newString.length - 1; i >= 0; --i)
    {
        revString = revString + newString.charAt(i);
    }

    if (newString == revString)
    {
        return true;
    }

    else 
    {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;

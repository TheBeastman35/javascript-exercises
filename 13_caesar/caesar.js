const caesar = function(string, shift) {

    let result = '';
  
    for (let i = 0; i < string.length; i++) 
    {
        let charCode = string[i].charCodeAt();
        //Checks if character is lowercase
        if (charCode > 96 && charCode < 123) 
        {
            charCode += shift % 26;
            // Maintains correct shift value past z
            // If the shift passes 'z', the characters resets to 'a' to continue
            if (charCode > 122) 
            {
                charCode = (charCode - 122) + 96;
                //Same as before, but it checks if the shift passes 'a' when shift is a negative numbers
            } 
            else if (charCode < 97) 
            {
                charCode = (charCode - 97) + 123;
            }
        }

        //Functions the same as above, but with capital letters instead of lowercase
        if (charCode > 64 && charCode < 91) 
        {
            charCode += shift % 26;
      
            if (charCode > 90) 
            {
                charCode = (charCode - 90) + 64;
            } 
            else if (charCode < 65) 
            {
                charCode = (charCode - 65) + 91;
            }
        }

        //Adds the character to the result string after it is shifted
        result += String.fromCharCode(charCode);
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;

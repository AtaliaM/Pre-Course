const input = require(`readline-sync`);
const math = require("mathjs");

function isStringPalindrome()
{
    let userInput = input.question("Enter a string: ");

    for (let i = 0, j = userInput.length-1, k = math.floor(userInput.length/2); i < k; i++, j--)
    {
        if (userInput[i] !== userInput[j])
        {
            console.log(`The string ${userInput} is not a palindrome!`);
            return
        }
    }

    console.log(`The string ${userInput} is a palindrome!`);
}

isStringPalindrome();
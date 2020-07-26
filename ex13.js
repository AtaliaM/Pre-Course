const input = require(`readline-sync`);

let userInput = input.question("Enter some string: ");

userInput = userInput.split(" ");

let longestString = "";
let isWordValid = 1;

for (let i = 0, j = userInput.length; i < j; i++)
{
    //checking if the current string doesn't contain symbols/numbers or is all symbols/numbers
    for (let k = 0, l = userInput[i].length; k < l; k++)
    {
        if (userInput[i][k] < "A"  || (userInput[i][k] > "Z" && userInput[i][k] < "a") || userInput[i][k] > "z")
        {
            isWordValid = 0;
            break;
        }

    }
    
    if (isWordValid)
    {
         if ((userInput[i].length > longestString.length))
        {
            longestString = userInput[i];
        }
    }

    isWordValid = 1;
}

console.log(`The longest string is: ${longestString}`);
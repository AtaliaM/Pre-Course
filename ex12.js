const input = require(`readline-sync`);

let userInput = input.question("Enter some string: ");

userInput = userInput.split("");

for (let i = 0, j = userInput.length; i < j; i++)
{
    if (userInput[i] === "i" || userInput[i] === "a" || userInput[i] === "e" || userInput[i] === "o" || 
    userInput[i] === "y" || userInput[i] === "u")
    {
        userInput[i] = userInput[i].toUpperCase();
    }
}

userInput = userInput.join("");
console.log(`result: ${userInput}`);
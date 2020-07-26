const input = require(`readline-sync`);

let userInput = -1;
let Nfactorial = 1;

while (userInput <= 0 || !userInput)
{
    userInput = Number(input.question("Enter a positive number: "));
}

for (let i=1; i <=userInput; i++)
{
    Nfactorial*= i;
}

console.log("The factorial of your number is: " + Nfactorial);
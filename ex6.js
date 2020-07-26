const input = require(`readline-sync`);

let userInput = input.questionInt("please choose a number larger than 10: ");

while (userInput <= 10)
{
    userInput = input.questionInt("please choose a number LARGER than 10: ");
}

console.log("thank you");


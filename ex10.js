const input = require(`readline-sync`);

let userInput = input.question("Enter a string containing several words separated with spaces: ");

console.log(userInput.split(" ").join("*"));



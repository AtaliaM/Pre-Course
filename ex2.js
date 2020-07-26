const input = require(`readline-sync`);
let num1 = input.question("Enter the first number: ");
let num2 = input.question("Enter the second number: ");

GetUserInputAndLog(num1, num2);

function GetUserInputAndLog(num1, num2)
{
    if (Number(num1) + Number(num2) === 10)
    {
        console.log("makes 10");
    }
    else
    {
        console.log("nope");
    }

}

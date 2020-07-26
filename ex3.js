const input = require(`readline-sync`);
let num = -1;
while (num !== 0 && num !== 1 && num !== 2 && num!== 3 && num !== 4 && num!== 5 && num !== 6 && num !== 7
    && num !== 8 && num !== 9)
    {
        num = Number(input.question("Please enter a number between 0 and 9: "));
    }


if (num === 0)
{
    console.log("ZERO");
}
else if (num === 1)
{
    console.log("ONE");
}
else if (num === 2)
{
    console.log("TWO");
}
else if (num === 3)
{
    console.log("THREE");
}
else if (num === 4)
{
    console.log("FOUR");
}
else if (num === 5)
{
    console.log("FIVE");
}
else if (num === 6)
{
    console.log("SIX");
}
else if (num === 7)
{
    console.log("SEVEN");
}
else if (num === 8)
{
    console.log("EIGHT");
}
else
{
    console.log("NINE");
}






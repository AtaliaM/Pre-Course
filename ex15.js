const math = require("mathjs");

function createArray(x)
{
    let array = [];

    for (let i = 0; i < x; i++)
    {
        array[i] = math.floor(Math.random() * 50) + 1;
    }

    let arrayMin = math.min(array);
    let arrayMax = math.max(array);

    console.log(`The minimun number in the array is: ${arrayMin}
The maximum number in the array is: ${arrayMax}`);

}

createArray(15);
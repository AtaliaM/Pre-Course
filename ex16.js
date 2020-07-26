const math = require("mathjs");

function returnIndexofMinAndMax (numArray)
{
    let minAndMaxIndices = [];

    let arrayMin = math.min(numArray);
    let arrayMax = math.max(numArray);

    for (let i = 0, j = numArray.length; i < j; i++)
    {
        if (numArray[i] === arrayMax || numArray[i] === arrayMin)
        {
            minAndMaxIndices.push(i);
        }
    }

    console.log(minAndMaxIndices);
    return minAndMaxIndices;
    
}

returnIndexofMinAndMax([70,23,11,0,-1,12,55,-2]);
returnIndexofMinAndMax([2, 6, 100, 11, 1]);
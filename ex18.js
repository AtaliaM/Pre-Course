const math = require("mathjs");

function reverseArray (numArray)
{
    let temp;

    for (let i = 0, j = numArray.length-1, k = math.floor(numArray.length/2); i < k; i++, j--)
    {
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
    }
    return numArray;
}

let arr = [10,9,8,7,6,5,4,3,2,1];

let firstReveresedArr = reverseArray([1,2,3,4,5]);
let secondReversedArr = reverseArray(arr);

console.log(`Reversed array: ${firstReveresedArr}`);
console.log(`Reversed array: ${secondReversedArr}`);
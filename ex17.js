
function returnCombinedArrayVer1 (stringArray, secondStringArray)
{
    let jointArray = stringArray.concat(secondStringArray);
    console.log(jointArray);
    return jointArray;
}

function returnCombinedArrayVer2 (stringArray, secondStringArray)
{
    let jointArray = [];
    let i, j;

    for (i = 0, j = stringArray.length; i < j; i++)
    {
        jointArray.push(stringArray[i]);
    }

    for (i = 0, j = secondStringArray.length; i < j; i++)
    {
        jointArray.push(secondStringArray[i]);
    }

    console.log(jointArray);
    return jointArray;
}

let firstArr = ["Hello", "and hi"];
let secondArr = ["What's up", "Goodluck", "Byebye"];

returnCombinedArrayVer1(firstArr, secondArr);
returnCombinedArrayVer2(firstArr, secondArr);
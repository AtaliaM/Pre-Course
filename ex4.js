const input = require(`readline-sync`);

let foodKinds = ["meat", "vegetarian", "sweets"];

let numPeople = Number(input.question("How many people are you going with? ")); 

if (!numPeople)
{
    throw "stop execution";
}

let kosherUserSelection = input.question("Should it be Kosher? (type y/n) "); 

if (kosherUserSelection !== 'y' && kosherUserSelection !== 'Y' && kosherUserSelection !== 'n' && 
kosherUserSelection !== 'N')
{
    throw "stop execution"
}

if (kosherUserSelection === 'y' || kosherUserSelection === 'Y')
{
    var mehadrinUserSelection = input.question("Should it be Kashrut Lemehadrin? (type y/n) ");

    if (mehadrinUserSelection !== 'y' && mehadrinUserSelection !== 'Y' && mehadrinUserSelection !== 'n' && 
    mehadrinUserSelection !== 'N')
    {
        throw "stop execution"
    }

}

let foodUserSelection = input.keyInSelect(foodKinds, "What kind of food do you want? ");

if (foodUserSelection === 0) 
{
    if (mehadrinUserSelection == 'y' || mehadrinUserSelection == 'Y')
    {
        console.log("I recommend Bassarush!");
    }

    else if (kosherUserSelection == 'y' || kosherUserSelection == 'Y')
    {
        console.log("I recommend El Gaucho!");
    }

    else
    {
        console.log("I recommend Buckaroo!");
    }


}


else if (foodUserSelection == 1)
{
    if (mehadrinUserSelection == 'y' || mehadrinUserSelection == 'Y')
    {
        console.log("I recommend Gardenia!");
    }

    else if (kosherUserSelection == 'y' || kosherUserSelection == 'Y')
    {
        console.log("I recommend Harduff!");
    }

    else
    {
        console.log("I recommend Vaggie!");
    }
}


else if (foodUserSelection == 2)
{
    if (mehadrinUserSelection == 'y' || mehadrinUserSelection == 'Y')
    {
        console.log("I recommend Sweetale!");
    }
    
    else if (kosherUserSelection == 'y' || kosherUserSelection == 'Y')
    {
        console.log("I recommend Max Brenner!");
    }

    else
    {
        console.log("I recommend Starbucks!");
    }
}

console.log("Thanks for consulting with me!");
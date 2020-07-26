console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
Welcome! Let's find out to which country you most likely travel (after the Corona):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const input = require(`readline-sync`);
const _ = require("underscore");
const math = require("mathjs");

let q1choices = ["Spring", "Summer", "Autumn", "Winter"];
let q1choicesShuffled = _.shuffle(q1choices);
let q2choices = ["Rice", "Cornflakes","Coffe", "Bacon & eggs"];
let q2choicesShuffled = _.shuffle(q2choices);
let q3choices = ["Temples", "Starbucks :D", "Anne Frank's house", "Palaces"];
let q3choicesShuffled = _.shuffle(q3choices);
let q4choices = ["Animation", "Chick Flick","Adventures", "Fantasy"];
let q4choicesShuffled = _.shuffle(q4choices);
let q5choices = ["Karaoke", "Disneyland", "Anything naughty ;)", "Shopping"];
let q5choicesShuffled = _.shuffle(q5choices);
let q6choices = ["Judo", "Football", "Bicycle", "Pollo"];
let q6choicesShuffled = _.shuffle(q6choices);
let q7choices = ["Pink", "Blue", "Red", "White"];
let q7choicesShuffled = _.shuffle(q7choices);
let q8choices = ["Empreor", "Dude/Sis :D", "King", "Queen"];
let q8choicesShuffled = _.shuffle(q8choices);
let q9choices = ["Deer", "Eagle", "Fox", "Owl"];
let q9choicesShuffled = _.shuffle(q9choices);
let q10choices = ["Sayonara", "Bye", "Dakh", "Cheerio"];
let q10choicesShuffled = _.shuffle(q10choices);

let q1userInput = input.keyInSelect(q1choicesShuffled, "What is your favorite season? ");
let q2userInput = input.keyInSelect(q2choicesShuffled, "What is your favorite breakfast? ");
let q3userInput = input.keyInSelect(q3choicesShuffled, "Which attraction you would like to visit? ");
let q4userInput = input.keyInSelect(q4choicesShuffled, "What is your favorite movie genre? ");
let q5userInput = input.keyInSelect(q5choicesShuffled, "What would you like to do in your own leisure at your vacation? ");
let q6userInput = input.keyInSelect(q6choicesShuffled, "What is your favorite sport type? ");
let q7userInput = input.keyInSelect(q7choicesShuffled, "Choose a color: ");
let q8userInput = input.keyInSelect(q8choicesShuffled, "Which title would you like to have? ");
let q9userInput = input.keyInSelect(q9choicesShuffled, "Choose an animal: ");
let q10userInput = input.keyInSelect(q10choicesShuffled, "Last question! How do you like to bid goodbye? ");

let japanTotalPoints = 0;
let usaTotalPoints = 0;
let netherlandTotalPoints = 0;
let englandTotalPoints = 0;

//checking the user answer and matching it to the original array element index, incrementing the 
//matching country total points depends on the user's answer

function incrementCountryPoints(shuffledArray, userChoice, regularArray)
{
    for (let i = 0; i < 4; i++)
{
    if (shuffledArray[userChoice] === regularArray[i])
    {
        if (i === 0)
        {
            japanTotalPoints++;
        }
        else if (i === 1)
        {
            usaTotalPoints++;
        }
        else if (i === 2)
        {
            netherlandTotalPoints++;
        }
        else
        {
            englandTotalPoints++;
        }
    }
}
}

incrementCountryPoints(q1choicesShuffled, q1userInput, q1choices);
incrementCountryPoints(q2choicesShuffled, q2userInput, q2choices);
incrementCountryPoints(q3choicesShuffled, q3userInput, q3choices);
incrementCountryPoints(q4choicesShuffled, q4userInput, q4choices);
incrementCountryPoints(q5choicesShuffled, q5userInput, q5choices);
incrementCountryPoints(q6choicesShuffled, q6userInput, q6choices);
incrementCountryPoints(q7choicesShuffled, q7userInput, q7choices);
incrementCountryPoints(q8choicesShuffled, q8userInput, q8choices);
incrementCountryPoints(q9choicesShuffled, q9userInput, q9choices);
incrementCountryPoints(q10choicesShuffled, q10userInput, q10choices);

//calculating max points//

let maxPoints = math.max(japanTotalPoints, usaTotalPoints, netherlandTotalPoints, englandTotalPoints);

if (maxPoints === japanTotalPoints)
{
    console.log("You're are going to.... Japan!");
}
else if (maxPoints === usaTotalPoints)
{
    console.log("You're going to.... USA!");
}
else if (maxPoints === netherlandTotalPoints)
{
    console.log("You're going to.... The Netherlands!");
}
else
{
    console.log("You're going to.... England!");
}

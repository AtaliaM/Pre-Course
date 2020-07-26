const figlet = require('figlet');
const math = require("mathjs");
const input = require(`readline-sync`);

console.log(figlet.textSync('Hang Man', {
    font: 'Lil Devil',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

let wordsOptions = ["chocolate", "cheesecake", "marshmello", "spongebob", "disney", "pusheen", "fortnite", 
"unicorn", "avengers", "galaxy", "kawaii", "strawberry"];

let numGuessesLeft = 10;
let randomWord = wordsOptions[math.floor(math.random() * wordsOptions.length)]; 
let randomWordAsterisk = [];
let userInput;
let usedLetters = [];
let uncoveredAsterisks = 0, guessingEntireWord = 0;
let i, j;

for (i = 0, j = randomWord.length; i < j; i++)
{
    randomWordAsterisk.push("*");
}

/////game on/////

while (numGuessesLeft > 0)
{
    console.log(`You have ${numGuessesLeft} guesses left.
The word is: ${randomWordAsterisk.join("")}`);

    guessingEntireWord = input.keyInYNStrict("Do you want to guess the entire word? ");

    if (!guessingEntireWord)
        {
            userInput = input.question("What is your guess? Enter a letter: ").toLowerCase();

        ///checking if user's input is valid///
            userInput = isUserLetterInputValid(userInput, usedLetters);

            usedLetters.push(userInput);

        //checking if the guess is right//
            for (i = 0, j = randomWord.length; i < j; i++)
                {
                    if (userInput === randomWord[i])
                    {
                        randomWordAsterisk[i] = userInput;
                        uncoveredAsterisks += 1;
                    }
                }
        
            if (uncoveredAsterisks === randomWordAsterisk.length)
                {
                    console.log("Wow good job! you guessed the word!");
                    printThumbsUp();
                    numGuessesLeft = 0;
                }

        }

    else
        {
            userInput = input.question("Guess the word: ").toLowerCase();

            if (randomWord === userInput)
            {
                console.log("Wow good job! you guessed the word!");
                printThumbsUp();
                numGuessesLeft = 0;
            }

            else
            {
                console.log("That's not the word!");
            }
        }

        numGuessesLeft-=1;
        guessingEntireWord = 0;
}

if (numGuessesLeft === 0)
    {
        console.log("Oh no, you didn't guess the word. Good luck next time!");
        printHangingMan();
        console.log(`BTW, the word was ${randomWord}.`);
    }


function isUserLetterInputValid(userInput, usedLetters)
{
    ///checking if user's input is valid///
    //checking the the user entered only 1 letter, that the input is alphabet only and that the letter is new//
    let i;
    let usedLetter = 0;

    for (i = 0; i < usedLetters.length; i++)
        {
            if (userInput === usedLetters[i])
            {
                usedLetter = 1;
                break;
            }
        }
        while (usedLetter || userInput < "a" || userInput > "z" || userInput.length > 1)
        {
            usedLetter = 0;

            userInput = input.question(`Your input isn't valid. please enter one alphabet letter
(that you didn't enter before): `).toLowerCase();

            for (i = 0; i < usedLetters.length; i++)
            {
                if (userInput === usedLetters[i])
                {
                    usedLetter = 1;
                    break;
                }
            
            }
        }
        return userInput;
}

function printThumbsUp()
{
    console.log(`   
╱╱┏╮
╱╱┃┃
▉━╯┗━╮
▉┈┈┈┈┃
▉╮┈┈┈┃
╱╰━━━╯
`);
}

function printHangingMan()
{
    console.log(`
    _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / \\
    |
   _|___
    `);
}

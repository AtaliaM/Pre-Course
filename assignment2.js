const input = require(`readline-sync`);
const math = require("mathjs");

console.log(`~/~/~/~/~/~  Welcome to WAR ( ͡° ͜ʖ ͡°) ~/~/~/~/~/~`);

let userName = input.question("Please enter your name: ");
let userMoney = 50;
let secondUserName;
let secondUserMoney;

let playAgainstUser = input.keyInYNStrict("Do you want to play against another user? ");

if (playAgainstUser)
{
    secondUserName = input.question("Please enter second user's name: ");
    secondUserMoney = 50;
}

let gameOn = 1;
let draw = 1;
let userCurrCard;
let rivalCurrCard;
let userBet;
let secondUserBet;
let userNextChoice = 0;

while (gameOn)
{

    console.log(`Hello ${userName}! You currently have ${userMoney} ILS.`);
    if (playAgainstUser)
    {
        console.log(`Hello ${secondUserName}! You currently have ${secondUserMoney} ILS.`);
    }

    userBet = input.questionInt(`${userName}, place your bet for the next round (1 to ${userMoney}): `);

    if (userBet <= 0 || userBet > userMoney)
    {
        console.log(`I said between 1 to ${userMoney} and you typed ${userBet}! 
        I don't play with liars!! Bye!`);
        return;
    }

    if (playAgainstUser)
    {
        secondUserBet = input.questionInt(`${secondUserName}, place your bet for the next round (1 to ${secondUserMoney}): `);
        if (secondUserBet <= 0 || secondUserBet > secondUserMoney)
    {
        console.log(`I said between 1 to ${secondUserMoney} and you typed ${secondUserBet}! 
        I don't play with liars!! Bye!`);
        return;
    }
    }

    let userCardSuit, rivalCardSuit; // the rival is the computer or the second user, depending on the game "mode"
    let heart = "♥", spade = "♠", diamond = "♦", club = "♣";
    let randomizeSuite;

    while (draw)
    {
        userCurrCard = math.floor(math.random() * 12) + 1;
        rivalCurrCard = math.floor(math.random() * 12) + 1;

        if (userCurrCard !== rivalCurrCard)
        {
            draw = 0;
        }

        //randomizing the card suit //

        for (let i = 0; i <=1; i++)
        {
            randomizeSuite = math.floor(Math.random() * 4);
            if (randomizeSuite === 0)
            {
                randomizeSuite = heart;
            }
            else if (randomizeSuite === 1)
            {
                randomizeSuite = spade;
            }
            else if (randomizeSuite === 2)
            {
                randomizeSuite = diamond;
            }
            else
            {
                randomizeSuite = club;
            }

            if (i===0)
            {
                userCardSuit = randomizeSuite;
            }
            else
            {
                rivalCardSuit = randomizeSuite;
            }
        }
        
    }

    draw = 1;

    if (playAgainstUser)
    {
        console.log(`${userName} card is ${userCurrCard} ${userCardSuit} and ${secondUserName} card is ${rivalCurrCard} ${rivalCardSuit}.`);
    }

    else
    {
        console.log(`Your card is ${userCurrCard} ${userCardSuit} and my card is ${rivalCurrCard} ${rivalCardSuit}.`);
    }
    

    if (userCurrCard > rivalCurrCard)
    {
        userMoney += userBet;

        if (playAgainstUser)
        {
            secondUserMoney -= secondUserBet;
            console.log(`${userName} won ${userBet}! And now you have ${userMoney}.`);

            if (secondUserMoney === 0)
            {
                console.log(`${secondUserName} lost the game and have ${secondUserMoney}!`);
                return;
            }
        }

        else
        {
            console.log(`You won ${userBet}! And now you have ${userMoney}.`);
        }
    }

    else
    {
        userMoney -= userBet;

        if (playAgainstUser)
        {
            secondUserMoney += secondUserBet;
            console.log(`${secondUserName} won ${secondUserBet}! And now you have ${secondUserMoney}.`);

            if (userMoney === 0)
            {
                console.log(`${userName} lost the game and have ${userMoney}!`);
                return;
            }
        }

        
        //against computer
        if (!playAgainstUser)
        {
            if (userMoney === 0)
            {
                console.log(`You lost ${userBet} and now you have ${userMoney}. You are broke.. Bye bye!`);
                return;
            }

            console.log(`You lost ${userBet} and now you have ${userMoney}.`);
        }

    }

    while (userNextChoice < 1 || userNextChoice > 2)
    {
        userNextChoice = input.questionInt(`What would you like to do?
        1. Play another round.
        2. Leave with my money. :) `);
    }

    if (userNextChoice === 2)
    {
        gameOn = 0;
        console.log(`${userName}, you have ${userMoney} ILS left. Hope we can play again!`);

        if (playAgainstUser)
        {
            console.log(`${secondUserName}, you have ${secondUserMoney} ILS left. Hope we can play again!`);
        }
    }

    userNextChoice = 0;
}

const input = require(`readline-sync`);

let userInput = input.questionInt("Please enter a number: ");

function primeNumbersUpToN(N)
{
  let helperArray = [];
  for (let i = 2; i <=N; i++) // making an helper array with elements from 2 up to N
    {
      helperArray.push(i);
    }
  
  let currPrime = 1;
  let primeNumbers = [];
  let keepGoing = 1;

  for (i = 0; i < helperArray.length; i++)
    {
      for (let k = 0; k < primeNumbers.length; k++)
        {
          if (helperArray[i] === primeNumbers[k])
            {
              keepGoing = 0;
              break;
            }
        }
      if (keepGoing)
        {
          currPrime = helperArray[i];
          primeNumbers.push(currPrime);
         
          for (let j = i+1; j < helperArray.length; j++) //overriding all numbers divided by the current prime number in the helper array
            {
              if (helperArray[j] % currPrime === 0) 
                {
                    helperArray[j] = currPrime;
                }
            }
        
          
        }
      keepGoing =1;
    }
  
  console.log("The prime numbers between 1 and " +  userInput + " are: ");
  console.log(primeNumbers);
  
}

primeNumbersUpToN(userInput);
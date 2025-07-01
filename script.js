const jokes = [
    {joke: 'What does a baby computer call his father?',
     answer: 'Data.'
    },
    {joke: 'After an unsuccessful harvest, why did the farmer decide to try a career in music?',
     answer: 'Because he had a ton of sick beets.'
    },
    {joke: 'I only seem to get sick on weekdays.',
     answer: 'I must have a weekend immune system.'
    },
    {joke: 'My friend was showing me his tool shed and pointed to a ladder.',
     answer: '"That\'s my stepladder," he said. "I never knew my real ladder."'
    },
    {joke: '"This morning, Siri said, "Don\'t call me Shirley."',
     answer: "I accidentally left my phone in Airplane mode."
    },
    {joke: 'Which days are the strongest? Saturday and Sunday.',
     answer: 'The rest are weekdays.'
    },
    {joke: 'If I ever find the doctor who screwed up my limb replacement surgery…',
     answer: 'I\'ll kill him with my bear hands.'
    },
    {joke: 'I asked my date to meet me at the gym but she never showed up.',
     answer: 'I guess the two of us aren\'t going to work out.'
    }
]

/*Store random joke that is currently selected*/
let currentRandomJoke = [];

/*Store previously random Numbers*/
let randomNumbers = [];

/*Helper function to generate random number base on array length.  If array isn't provided, 10 is used as default/*/
const getRandomNumber = (arr) => {
    const arrLength = arr ? arr.length : 10;
    return Math.floor(Math.random() * arrLength);
}

/*Function to select random joke*/
const getRandomJoke = () => {
    let randomNumber = getRandomNumber(jokes);
    
    //Pick new random number if it already exists in randomNumbers array
    while (randomNumbers.indexOf(randomNumber) >= 0 && randomNumbers.length !== jokes.length) {
        randomNumber = getRandomNumber(jokes);
    }
    
    //If randomNumber array equals jokes arrray length, reset it.
    if (randomNumbers.length === jokes.length) {
        randomNumbers = [];
    }
    
    //Push random number to randomNumbers array
    randomNumbers.push(randomNumber);
    
    //Select random joke
    currentRandomJoke = jokes[randomNumber];
    
    //Return random joke
    return `${currentRandomJoke.joke}\n${currentRandomJoke.answer}`;
}

/*Testing function*/
/*console.log(getRandomJoke());

console.log(getRandomJoke());

console.log(getRandomJoke());

console.log(getRandomJoke());

console.log(getRandomJoke());

console.log(getRandomJoke());*/




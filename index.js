// Allow User input
const prompt = require('prompt-sync')();

// Call game function
game();

function game() {

  // Create an array of words that can randomly be chosen and used to compare guesses against
  var words = ["jazz", "books", "window", "picture", "lamp"];
  var randomIndex = Math.floor(Math.random() * words.length);

  // For Testing Purposes Only: Outputs word that needs to be guessed
  // Comment out when done testing
  console.log(randomIndex, words[randomIndex]);

  // Create a full list of Body Parts that can be used to limit the number of guesses
  var bodyParts = ["Right Leg", "Left Leg", "Right Arm", "Left Arm", "Body", "Head"];
  var hungBodyParts = [];
  var numberGuesses = bodyParts.length;

  // Create arrays that track correctly and incorrectly guessed letters
  var alphaGuessedCorrect = [];
  for (var i = 0; i < words[randomIndex].length; i++) {
    alphaGuessedCorrect.push("_");
  }
  var alphaGuessedIncorrect = [];

  // Create variables for prompts
  var wordOrLetter = "";
  var guessedLetter = "";
  var guessedWord = "";


  console.log(`Your word is ${words[randomIndex].length} characters long`);

  // Loop: If the correct word is not guessed, the user is asked if they want to guess
  // a word or letter
  while (bodyParts.length > 0 && guessedWord != words[randomIndex]) {
    console.log(`Hung Body Parts: ${hungBodyParts}`);
    console.log(`Number of Guesses Left: ${numberGuesses}`)
    console.log(`Correct Letter Guesses: ${alphaGuessedCorrect}`);
    console.log(`Incorrect Letter Guesses: ${alphaGuessedIncorrect}`);
    wordOrLetter = prompt (`Would you like to guess the word or a letter? (word/letter) `);
    var lowerCase = wordOrLetter.toLowerCase();

    // If User wants to guess the word
    if (lowerCase === "word") {
      guessedWord = prompt (`What word would you like to guess? `)
      // lowerCase variable is now storing the guess
      lowerCase = guessedWord.toLowerCase();

      // Word is guessed correctly
      // Congrats message is outputed and program closes
      if (lowerCase === words[randomIndex]) {
        console.log(`Congrats! ${words[randomIndex]} was the word!`);
        gameEnd();
      }

      // Word is guessed incorrectly
      // Last word from the bodyParts array is removed and put in hungBodyParts
      // numberGuesses left decreases by 1
      else if (lowerCase != words[randomIndex]) {
        hungBodyParts.push(bodyParts.pop());
        numberGuesses -= 1;
        console.log(`Incorrect.`);
      }
    }

    // If user wants to guess individual letters of the word
    else if (lowerCase === "letter") {
      guessedLetter = prompt (`What letter would you like to guess? `);
      lowerCase = guessedLetter.toLowerCase();

      // Letter guessed correctly
      // Checks if string words[randomIndex] INCLUDES string lowerCase
      // numberGuesses does not decrease
      if (words[randomIndex].includes(lowerCase) === true && lowerCase.length < 2) {
        // Splits words[randomIndex] string into an array of strings
        var wordStringSplit = words[randomIndex].split("");
        // Checks and finds the index position of all matching letters
        var indexLetter = [];
        for (var i = 0; i < wordStringSplit.length; i++) {
          if (wordStringSplit[i] === lowerCase) {
            indexLetter.push(i);
          }
        }
        // Puts the letter at the correct array position in alphaGuessedCorrect
        for (var insertLetter = 0; insertLetter < indexLetter.length; insertLetter++) {
           alphaGuessedCorrect[indexLetter[insertLetter]] = lowerCase;
        }
        // Output includes the index position of all matching elements
        console.log(`Correct. The word contains ${lowerCase} at the ${indexLetter} index position(s).`);

        // Check if alphaGuessedCorrect is the same as the chosen word by turning the arrays into a string
        if (JSON.stringify(alphaGuessedCorrect) == JSON.stringify(wordStringSplit)) {
          console.log(`Congrats! ${words[randomIndex]} was the word!`);
          gameEnd();
        }
      }

      // User enters more than one letter
      // Last word from the bodyParts array is removed and put in hungBodyParts
      // numberGuesses left decreases by 1
      else if (lowerCase.length >= 2){
        hungBodyParts.push(bodyParts.pop());
        numberGuesses -= 1;
        console.log(`Only input one letter at a time.`);
      }

      // Letter guessed incorrectly
      // Last word from the bodyParts array is removed and put in hungBodyParts
      // Guessed letter is put in alphaGuessed array
      // numberGuesses left decreases by 1
      else {
        hungBodyParts.push(bodyParts.pop());
        alphaGuessedIncorrect.push(lowerCase);
        numberGuesses -= 1;
        console.log(`Incorrect.`);
      }
    }

    // If user enters an unrecognized command when prompted to choose word or letter
    else {
      console.log(`Please choose "word" or "letter".`);
    }
  }
}

gameEnd();

function gameEnd() {
  while (resetPrompt != "reset" && resetPrompt != "quit") {
    var resetPrompt = prompt(`Would you like to quit or reset? (quit/reset) `)
    if (resetPrompt === "reset") {
      game();
    }
    else if (resetPrompt === "quit") {
      process.exit();
    }
    else {
      console.log(`Please enter "quit" or "reset" `);
    }
  }
}

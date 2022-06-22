// Allow User input
const prompt = require('prompt-sync')();

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

// Create arrays that tracks correctly and incorrectly guessed letters
var alphaGuessedCorrect = [];
var alphaGuessedIncorrect = [];

// Create variables for prompts
var wordOrLetter = "";
var guessedLetter = "";
var guessedWord = "";

function getResponse() {
  console.log(`Your word is ${words[randomIndex].length} characters long`);

  // Loop: If the correct word is not guessed, the user is asked if they want to guess
  // a word or letter
  while (bodyParts.length > 0 && guessedWord != words[randomIndex]) {
    console.log(`Hung Body Parts: ${hungBodyParts}`);
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
      // Congrats messaged is outputed and program closes
      if (lowerCase === words[randomIndex]) {
        console.log(`Congrats! ${words[randomIndex]} was the word!`);
        break;
      }

      // Word is guessed incorrectly
      // Last word from the bodyParts array is removed and put in hungBodyParts
      // numberGuesses left decreases by 1
      else if (lowerCase != words[randomIndex]) {
        hungBodyParts.push(bodyParts.pop());
        numberGuesses -= 1;
        console.log(`Incorrect. You have ${numberGuesses} guesses left`);
      }
    }

    // If user wants to guess individual letters of the word
    else if (lowerCase === "letter") {
      guessedLetter = prompt (`What letter would you like to guess? `);
      lowerCase = guessedLetter.toLowerCase();

      // Loop: goes through each character of words[randomIndex]
      // Need something better that can check all letters in words[randomIndex] at same time
      for (var char = 0; char < words[randomIndex].length; char++) {

        // Letter guessed correctly
        // Guessed letter is put in alphaGuessed array
        // numberGuesses does not decrease
        if (words[randomIndex].charAt(char) === lowerCase) {
          // guessedLetter += word[randomIndex];
          alphaGuessedCorrect.push(lowerCase);
          console.log(`Correct. The word contains ${lowerCase}.
          You have ${numberGuesses} guesses left.`);
          break;
        }

        // Letter guessed incorrectly
        // Last word from the bodyParts array is removed and put in hungBodyParts
        // Guessed letter is put in alphaGuessed array
        // numberGuesses left decreases by 1
        else {
          hungBodyParts.push(bodyParts.pop());
          alphaGuessedIncorrect.push(lowerCase);
          numberGuesses -= 1;
          console.log(`Incorrect. You have ${numberGuesses} guesses left.`);
          break;
        }
      }
    }

    // If user enters an unrecognized command when prompted to choose word or letter
    else {
      console.log(`Please choose "word" or "letter".`);
    } // else
  } // while
} // function

// Call getResponse function
getResponse();

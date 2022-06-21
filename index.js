// Allow user input
const prompt = require('prompt-sync')();
var guessedLetter = "";
var guessedWord = "";

var bodyParts = ["Head", "Body", "Left Arm", "Right Arm", "Left Leg", "Right Leg"];
var numberGuesses = bodyParts.length;

var words = ["Jazz", "Books", "Window", "Picture", "Lamp"];
var randomIndex = Math.floor(Math.random() * words.length);

// Testing: Outputs word that needs to be guessed
console.log(randomIndex, words[randomIndex]);

function getResponse() {
  guessedWord = prompt (`Would you like to guess the word or a letter?`);
  console.log(`Your word is ${words[randomIndex].length} characters long`);

  if (guessedWord === "word" || guessedWord === "Word") {
    guessedWord = prompt (`What is your guess?`)
    do {
      if (guessedWord === words[randomIndex]) {
        console.log(words[randomIndex]);
      }
      else if (guessedWord != words[randomIndex]) {
        for (var i = 0; i < bodyParts.length; i++) {
          console.log(bodyParts.pop(bodyParts[i]));
          numberGuesses -= 1;
          console.log(`You have ${numberGuesses} guesses left`);
          guessedWord = prompt (`Incorrect. What character would you like to guess?`);
        }
      }
    } while (bodyParts.length > 1);
  }

  else if (guessedWord === "letter" || guessedWord === "Letter") {
    do {
      guessedLetter = prompt (`What is your guess?`);
      for (var char = 0; char < words[randomIndex].length; char++) {
        if (words[randomIndex].charAt(char) === guessedWord) {
          guessedLetter += word[randomIndex];
          numberGuesses -= 1;
          break;
          // console.log(`${numberGuesses} guesses left`);
        }
        else {
          for (var i = 0; i < bodyParts.length; i++) {
            console.log(bodyParts.pop(bodyParts[i]));
            numberGuesses -= 1;
            console.log(`You have ${numberGuesses} guesses left`);
            guessedWord = prompt (`Incorrect. What character would you like to guess?`);
          }
        }
      console.log(`${numberGuesses} guesses left`);
      }
    } while (word[randomIndex] != guessedLetter || numberGuesses > 1);
  }
  else {
    //
  }
}

getResponse();

/*
for (var char = 0; char < words[randomIndex].length; char++) {
  if (words[randomIndex].charAt(char) === guessedWord) {}
}

if (guessedWord === words[randomIndex]) {
  console.log(words[randomIndex]);
}

else if (guessedWord != words[randomIndex]) {
  while (guessedWord != words[randomIndex]) {
    guessedWord = prompt (`Incorrect. What character would you like to guess?`);
  }
}

else {console.log(words[randomIndex]);}
*/

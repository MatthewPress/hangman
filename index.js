// Allow user input
const prompt = require('prompt-sync')();
var guessedWord = "";

var bodyParts = ["Head", "Body", "Left Arm", "Right Arm", "Left Leg", "Right Leg"];

var words = ["Jazz", "Books", "Window", "Picture", "Lamp"];
var randomIndex = Math.floor(Math.random() * words.length);

console.log(randomIndex, words[randomIndex]);
console.log(`Your word is ${words[randomIndex].length} characters long`);

do {
  guessedWord = prompt (`What character would you like to guess?`);
  if (guessedWord === words[randomIndex]) {
    console.log(words[randomIndex]);
  }
  else if (guessedWord != words[randomIndex]) {
    for (var i = 0; i < bodyParts.length; i++) {
      console.log(bodyParts.pop(bodyParts[i]));
      guessedWord = prompt (`Incorrect. What character would you like to guess?`);
      break;
    }
  }
} while (guessedWord != words[randomIndex]);

/*
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

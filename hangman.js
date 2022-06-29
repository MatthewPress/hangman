const prompt = require('prompt-sync')();
//start of function
function startGame() {
  //intialize virables
  var wordFromUser;
  var userWord = "";
  var userLetters = "";
  //var lengthOfletter = 0;
  //intialize array for randomwords and body bodyParts for the GAME
  var wordList = ["Jazz", "Books", "Window", "Picture", "Lamp"];
  var bodyParts = ["Head", "Body", "Left Arm", "Right Arm", "Left Leg", "Right Leg"];
  var turnLift = bodyParts.length;
  //getting a random index
  var randomIndex = Math.floor(Math.random() * wordList.length);
  var randomWord = wordList[randomIndex].toUpperCase();

  while (turnLift !== 0 || userWord !== randomWord || userLetters.length !== randomWord.length) {
    wordFromUser = prompt("Do you want to guess a letter or a word? ").toUpperCase();
    userWord = wordFromUser.toUpperCase();
    console.log(randomWord);
    if (userWord === "WORD") {
      wordFromUser = prompt("What word do you want to guess? ").toUpperCase();
      userWord = wordFromUser.toUpperCase();
      //while loops that will run while the user guess the wrong word
      if (turnLift === 0) {
        console.log("GAME OVER!!!!");
      }
      if (userWord.toUpperCase() !== randomWord.toUpperCase() && turnLift !== 0) {
        //bodyParts.pop();
        userWord = wordFromUser.toUpperCase();
        turnLift--;
        console.log("you have lost your", bodyParts.pop());
        console.log("you have", turnLift, "Moves!");
        //wordFromUser = prompt("Do you want to guess a letter or a word? ").toUpperCase();
        //userWord = wordFromUser.toUpperCase();
        //checking if user has 0 number of guess left
        if (turnLift === 0) {
          console.log("Game Over!");
        }
        console.log(`Your Word is ${randomWord.length} letters long`);
        //wordFromUser = prompt("What word do you want to guess? ").toUpperCase();
        //userWord = wordFromUser.toUpperCase();
      } else if (wordFromUser === randomWord) {
        console.log("YOU WIN YOU HAVE GUESSED THE RIGHT WORD");
        //break;
      }
    } else if (wordFromUser === randomWord) {
      userWord = randomWord.toUpperCase();
      console.log("YOU WIN YOU HAVE GUESSED THE RIGHT WORD");
      //break;
    } else if (userWord === "LETTER") {
      //wordFromUser = prompt("What letter do you want to guess? ").toUpperCase();
      console.log(`Your Word is ${randomWord.length} letters long`);
      wordFromUser = prompt("What letter do you want to guess? ").toUpperCase();
      userGuessedChar = wordFromUser.toUpperCase();
      if (userGuessedChar.length === 1) {
        if (randomWord.includes(userGuessedChar) === false && turnLift !== 0) {
          turnLift--;
          console.log("you have", turnLift, "Moves!");
          console.log("you have lost your", bodyParts.pop());
          console.log("try again");
          wordFromUser = prompt("What letter do you want to guess? ").toUpperCase();
          userGuessedChar = wordFromUser.toUpperCase();
          //wordFromUser = prompt("Do you want to guess word or letter? ").toUpperCase();
          userGuessedChar = wordFromUser.toUpperCase();
        } else if (randomWord.includes(userGuessedChar) && userGuessedChar.length === 1) {
            //wordFromUser = prompt("What word do you want to guess? ").toUpperCase();
            userLetters += userGuessedChar;
            //lengthOfletter++;
            console.log("the right letters are: ", userLetters);
            if(userLetters.length === randomWord.length){
             console.log(`you have guessed the word ${randomWord}`);
             console.log("You win");
             break;
           }
            /*if (randomWord.length === lengthOfletter) {
              console.log(`you have guessed the word ${randomWord}`);
              console.log("You win");
              break;
            }
            //wordFromUser = prompt("What letter do you want to guess? ").toUpperCase();
            //userGuessedChar = wordFromUser.toUpperCase();
            //letting the user know how much more moves/guesses they have lift
          } else if (turn === 1) {
            console.log("lost guess");
            turnLift--;
          } else if (turnLift === 0) {
            console.log("Game OVER");
          }
        //checking if the characters are in the in the random string
      } else if (randomWord.includes(userGuessedChar) && userGuessedChar.length === 1) {
        console.log("the right letters are: ", userLetters);
        /*if (randomWord.length === lengthOfletter) {
          console.log(`you have guessed the word ${randomWord}`);
          console.log("You win");
          //breaking out of while loop if number of current letter are equel to the letter in the randomWord
          //break;
        }*/
      }else if (userGuessedChar.length > 1) {
          //break;
        }
      }
    }
  }
}

startGame();

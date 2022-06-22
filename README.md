# Hangman
## Uncompleted Tasks
* Does not display correctly guessed letters when there are duplicates in a word
* When all letters have been correctly guessed, the program should also say congrats and close. Right now it only does so when you choose "word" and enter the correct word
## Completed Tasks
* Git and GitHub (branches, add contributors)
* Prompt-sync
* Array of words for program to randomly choose
* Array of body parts to be crossed off and limit guess attempts
* Empty Array that stores hung body parts
* Empty Arrays that store correctly and incorrectly guessed letters
* While loop that keeps the user guessing until all body parts are removed or the word is guessed correctly
* Each correct guess either ends the program or adds letters to the correctly guessed letters array
* Each incorrect guess decreases the number of guess attempts left, adds a body part to the hung array, adds a letter to the incorrect letter guesses array, or ends the program when there are no more guess attempts left
* After each guess, the user is asked if they want to guess the word or a letter
* Any user input is converted to lowercase
* Check a guessed letter against all characters in the word at the same time
* A letter guess is not correct if the user inputs multiple letters in one prompt
* Shows all correctly guessed letters and where they're placed in the word

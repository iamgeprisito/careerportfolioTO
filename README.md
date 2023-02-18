# careerportfolioTO
The program is a simple implementation of the classic game Hangman, built using React. Here's an overview of how it works:

The program imports the React and useState modules from the react library, and defines the secretWord variable that represents the word to be guessed by the user.

The Hangman component is defined as a functional component that returns a user interface for the game.

Inside the Hangman component, the useState hook is used to declare two state variables: incorrectAttempts and wordDisplay.

The incorrectAttempts variable is an array that stores the letters that the user has guessed that are not part of the secretWord.
The wordDisplay variable is an array that stores the current state of the word to be guessed, with underscores representing letters that have not been guessed yet.
The useState hook is called for each of these variables, and each call returns a tuple with the current value of the variable and a function to update its value.

The Hangman component returns a user interface that consists of:

A heading that says "Playing HANGMAN...".
A paragraph that says "Start the game!".
A paragraph that displays the incorrect attempts made by the user, using the incorrectAttempts state variable.
A paragraph that displays the current state of the word to be guessed, using the wordDisplay state variable.
A paragraph that displays the hangman image corresponding to the number of incorrect attempts made by the user, using the getHangmanArt function.
A form that allows the user to input their guess, using an input element and a submit button.
A message that displays "You win!" if the user guesses the secretWord correctly, using a condition that compares the wordDisplay state variable to the secretWord variable.
A message that displays "You lose!" if the user makes 6 incorrect attempts, using a condition that checks the length of the incorrectAttempts array.
The getHangmanArt function is defined, which takes the number of incorrect attempts made by the user and returns the corresponding hangman image as a string.

The program exports the Hangman component as the default export of the module.

In terms of libraries and toolstack, this is a front-end application built using React, which does not include any back-end components. The implementation uses state management to keep track of the game's data and updates the UI accordingly. The data is stored in the client's browser and there is no communication with a server. The code does not require any additional libraries or tools beyond the React and useState modules from the react library, and uses inline styles to apply basic styling to the user interface. Overall, this implementation demonstrates the use of React's state management and event handling features to build a simple game.

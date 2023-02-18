import './App.css';
import React, { useState } from "react";

const secretWord = "react";

const Hangman = () => {
  const [incorrectAttempts, setIncorrectAttempts] = useState([]);
  const [wordDisplay, setWordDisplay] = useState(
    secretWord.split("").map(letter => "_")
  );

  const handleSubmit = event => {
    event.preventDefault();
    const guess = event.target.elements.guess.value;
    event.target.elements.guess.value = "";

    if (!secretWord.includes(guess)) {
      setIncorrectAttempts([...incorrectAttempts, guess]);
    } else {
      secretWord.split("").forEach((char, index) => {
        if (char === guess) {
          setWordDisplay(
            wordDisplay.map((char, i) =>
              i === index ? guess : char
            )
          );
        }
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2>Playing HANGMAN...</h2>
      <h3>Start the game!</h3>
      <p style={styles.incorrectAttempts}>
        Incorrect Attempts: {incorrectAttempts.join(", ")}
      </p>
      <p style={styles.wordDisplay}>{wordDisplay.join(" ")}</p>
      {incorrectAttempts.length > 0 && (
        <p style={styles.hangmanArt}>
          {getHangmanArt(incorrectAttempts.length)}
        </p>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="guess" style={styles.input} />
        <button type="submit" style={styles.button}>
          Guess
        </button>
      </form>
      {incorrectAttempts.length === 6 && (
        <p style={{color: 'red', fontWeight: 'bold', textTransform: 'uppercase'}}>You lose!</p>
      )}
      {wordDisplay.join("") === secretWord && (
        <p style={{color: 'green', fontWeight: 'bold', textTransform: 'uppercase'}}>You win!</p>
      )}
    </div>
  );
};

const getHangmanArt = incorrectAttempts => {
  const hangmanStages = [
    "",
    "O",
    "O\n|\n|",
    "O\n|\\\n|",
    "O\n|\\\n|/",
    "O\n|\\\n|/\n/",
    "O\n|\\\n|/\n/ \\"
  ];
  return hangmanStages[incorrectAttempts];
};


const styles = {
  container: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50
  },
  incorrectAttempts: {
  fontSize: 20,
  marginBottom: 20
  },
  wordDisplay: {
  fontSize: 30,
  marginBottom: 20
  },
  hangmanImage: {
  fontSize: 20,
  marginBottom: 20
  },
  form: {
  display: "flex"
  }
  };
  
  export default Hangman;
  
  
  
  
  

/* 
Question1.A.1: What are the key elements for this application?
Answer:
This Hangman game was implemented in React with these following elements:
- State management using useState hook
- Event handling with handleSubmit function
- Display of incorrect guesses and hangman image
- Display of the word to be guessed with underscores
- User input for letter guesses using a form and input element
- Game win and loss conditions
- Style applied using inline styles in the JSX code.

Question1.A.2: How would you manage these?
Answer:
To manage these elements, we would utilize React's state management features, such as the useState hook, 
to keep track of the data and update the UI accordingly.

Question1.A.3: Is a stage-managed solution appropriate here?
Answer:
It is not necessary to use a stage-managed solution in this case. 
The current implementation uses React's state management features, 
which are suitable for a simple hangman game like this.

Question1.B: Identify appropriate libraries and a toolstack. 
Think about how your choice of tools reflects the design. 
Can you avoid writing code (no code) or writing very little (low code)? 
Is this an entirely front-end application, back-end, or full-stack? 

Answer:
This is a front-end application. It is built using React, which is a JavaScript library for building user interfaces, 
and does not include any back-end components. The application uses state management to keep track of the game's data 
and updates the UI accordingly. The data is stored in the client's browser and there is no communication with a server.

This toolstack can allow for a low-code approach, where much of the functionality can be achieved 
through using existing libraries and tools, without writing a lot of code from scratch.
*/
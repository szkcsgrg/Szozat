import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    useContext(AppContext);
  // const letter = board[attemptValue][letterPosition];

  // const correct = correctWord[letterPosition] === letter;
  // const almost = !correct && letter !== "" && correctWord.includes(letter);

  // const letterState =
  //   currentAttempt.attempt > attemptValue
  //     ? correct
  //       ? "correct"
  //       : almost
  //       ? "almost"
  //       : "default"
  //     : "";

  // useEffect(() => {
  //   if (letter !== "" && !correct && !almost) {
  //     setDisabledLetters((prev) => [...prev, letter]);
  //   }
  // }, [currentAttempt.attempt, almost, correct, letter, setDisabledLetters]);

  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "default");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;

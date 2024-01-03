import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h4>
        {gameOver.guessedWord
          ? "Gratulálok! Nyertél! Kitaláltad a szót."
          : "Sajnos nem sikerült kitalálnod a szót."}
      </h4>
      <h4>A szó: {correctWord}</h4>
      {gameOver.guessedWord && (
        <span>Kitaláltad {currentAttempt.attempt} próbálkozásból.</span>
      )}
    </div>
  );
}

export default GameOver;

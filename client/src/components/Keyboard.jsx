import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Key from "./Key";

function Keyboard() {
  const { onDeleteLetter, onEnter, onSelectLetter, disabledLetters } =
    useContext(AppContext);
  const keys2 = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Z",
    "U",
    "I",
    "O",
    "P",
    "Ő",
    "Ú",
    "Ö",
  ];
  const keys3 = [
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "É",
    "Á",
    "Ű",
    "Ü",
  ];
  const keys4 = ["Í", "Y", "X", "C", "V", "B", "N", "M", "Ó"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDeleteLetter();
    } else {
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys4.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard row p-1" onKeyDown={handleKeyboard}>
      <div className="line col-12 gap-1">
        {keys2.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line col-12 gap-1">
        {keys3.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
      </div>
      <div className="line col-12 gap-1">
        <Key bigKey keyValue={"Beküld"} />
        {keys4.map((key) => {
          return (
            <Key
              key={key}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          );
        })}
        <Key bigKey keyValue={"Töröl"} />
      </div>
    </div>
  );
}

export default Keyboard;

import React from "react";
import { useState, useRef } from "react";

function HooksExample() {
  const [userInput, setUserInput] = useState("");
  const userTextBox = useRef("");

  function userInputhandler(e) {
    console.log(userInput);
    setUserInput(e.target.value);
    focusIfNeeded();
  }

  function focusIfNeeded() {
    //logic
    console.log(userInput);
    if ("arch" === userInput) {
      userTextBox.current.remove();
    }
  }
  return (
    <div>
      <input
        type="input"
        value={userInput}
        onChange={userInputhandler}
        ref={userTextBox}
      ></input>
    </div>
  );
}
export default HooksExample;

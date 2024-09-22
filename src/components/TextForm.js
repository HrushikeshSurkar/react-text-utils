import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div>
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-3 " onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleSpeak}>
          Speak
        </button>
      </div>
      {text.length > 0 && (
        <div className="mb-3 my-3">
          <h1>Your Text Summery</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <h1>{text} </h1>
        </div>
      )}
    </div>
  );
}

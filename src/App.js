import React, { useState } from "react";
import "./styles.css";
import emojiIcons from "./emojiIcons";

const emojis = Object.keys(emojiIcons);

export default function App() {
  const [emoteMeaning, setEmoteMeaning] = useState("");
  const [currentEmote, setCurrentEmote] = useState("");

  const handleChange = (event) => {
    if (emojis.includes(event.target.value)) {
      setEmoteMeaning(emojiIcons[event.target.value]);
      setCurrentEmote(event.target.value);
    } else {
      setEmoteMeaning("We're sorry! We don't have meaning for this emoji.");
      setCurrentEmote(event.target.value);
    }
  };

  const handleClick = (emoji) => {
    if (emojis.includes(emoji)) {
      setEmoteMeaning(emojiIcons[emoji]);
      setCurrentEmote(emoji);
    }
  };

  const emojisList = emojis.map((emoji, index) => {
    return (
      <div className="emoji" onClick={() => handleClick(emoji)} key={index}>
        {emoji}
      </div>
    );
  });

  return (
    <div className="App">
      <header>Sportmoji</header>
      <input type="text" onChange={handleChange} />
      <h2>
        {currentEmote}&nbsp;&nbsp;&nbsp;{emoteMeaning.toUpperCase()}
      </h2>
      <div className="card flex">{emojisList}</div>
    </div>
  );
}

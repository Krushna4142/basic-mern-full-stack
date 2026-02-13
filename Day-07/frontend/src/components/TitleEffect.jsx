import { useState, useEffect } from "react";

function TitleEffect() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text
      ? `Typing: ${text}`
      : "Day 07 – useEffect Hook";
  }, [text]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Dynamic Title Effect</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TitleEffect;

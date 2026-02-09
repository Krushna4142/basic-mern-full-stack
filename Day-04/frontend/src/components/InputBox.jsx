import { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Input State Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default InputBox;

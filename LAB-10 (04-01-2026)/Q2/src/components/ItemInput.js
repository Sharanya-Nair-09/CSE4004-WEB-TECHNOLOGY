import React, { useState } from "react";

function ItemInput({ addItem }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addItem(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ItemInput;
import React, { useState } from "react";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    if (text.trim() === "") return;

    const newItem = {
      id: Date.now(), // unique key
      name: text,
    };

    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div className="app-container">
      <h1 className="title">✨ Smart Item Manager</h1>

      <ItemInput addItem={addItem} />

      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
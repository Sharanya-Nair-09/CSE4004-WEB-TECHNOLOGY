import React from "react";

function ItemCard({ item, removeItem }) {
  return (
    <div className="item-card">
      <span>{item.name}</span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </div>
  );
}

export default ItemCard;
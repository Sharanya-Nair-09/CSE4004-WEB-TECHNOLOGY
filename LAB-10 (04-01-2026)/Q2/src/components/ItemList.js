import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items, removeItem }) {
  return (
    <div className="list-container">
      {items.length === 0 ? (
        <p className="empty">No items yet. Add something!</p>
      ) : (
        items.map((item) => (
          <ItemCard
            key={item.id}   // ✅ key requirement
            item={item}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
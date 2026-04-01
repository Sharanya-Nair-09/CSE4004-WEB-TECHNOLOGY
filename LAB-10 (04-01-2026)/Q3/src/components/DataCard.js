import React from "react";

function DataCard({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
}

export default DataCard;
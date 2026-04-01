import React from "react";
import DataFetcher from "./components/DataFetcher";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">🌿 API Data Viewer</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
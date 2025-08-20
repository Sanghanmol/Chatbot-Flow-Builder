import React from "react";
import FlowBuilder from "./components/FlowBuilder";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        🤖 Chatbot Flow Builder
      </div>
      <FlowBuilder />
    </div>
  );
}

export default App;

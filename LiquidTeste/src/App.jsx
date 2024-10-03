import React from "react";
import Leftsidebar from "./components/Leftsidebar"
import Maincontent from "./components/Maincontent"
import Rightsidebar from "./components/Rightsidebar"
import './App.css'; // Arquivo CSS

export default function App() {
  return (
    <div className="container">
      <div className="column left-sidebar">
        <Leftsidebar />
      </div>
      <div className="column main-content">
        <Maincontent />
      </div>
      <div className="column right-sidebar">
        <Rightsidebar />
      </div>
    </div>
  );
}

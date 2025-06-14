import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage("Could not fetch backend"));
  }, []);

  return (
    <div>
      <h1>DevQuest</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

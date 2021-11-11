import "./App.css";
import { useState, useEffect } from "react";

import Home from "./components/Home";
import Students from "./components/Students";
import Button from "./components/Button";

function App() {
  const [students, setStudents] = useState([]);
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.loh(err));
  }, []);

  const showResults = () => {
    let arr = [...students];
    arr = arr.filter((item) => item.house !== "");

    const chosen1 = arr[Math.floor(Math.random() * arr.length)];
    arr = arr.filter((item) => item.house !== chosen1.house);

    const chosen2 = arr[Math.floor(Math.random() * arr.length)];
    arr = arr.filter((item) => item.house !== chosen2.house);

    const chosen3 = arr[Math.floor(Math.random() * arr.length)];
    arr = arr.filter((item) => item.house !== chosen3.house);
    setChampions([chosen1, chosen2, chosen3]);
  };

  return (
    <div className="App">
      {!champions.length ? (
        <>
          <Home />
          <Button showResults={showResults} text={"Começar!"} />
        </>
      ) : (
        <>
          <Students champions={champions} />
          <Button showResults={showResults} text={"Tentar novamente"} />
        </>
      )}
    </div>
  );
}

export default App;

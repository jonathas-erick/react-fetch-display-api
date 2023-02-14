import { useState } from "react";
import "./App.css";
import useRandomChar from "./useRandomChar";

function App() {
  const [seed, setSeed] = useState("1");

  const generateChar = (e) => {
    e.preventDefault();
    setSeed(Math.floor(Math.random() * 826));
  };

  const char = useRandomChar(seed);

  return (
    <div className="app">
      <div className="container">
        <h1>{char.name}</h1>
        <img src={char.image} alt="CharImage" />
        <div className="characterContainer">
          <h2>
            Status: <span>{char.status}</span>
          </h2>

          <h2>
            Specie: <span>{char.species}</span>
          </h2>

          <h2>
            Type: <span>{char.type}</span>
          </h2>
          <h2>
            Gender: <span>{char.gender}</span>
          </h2>
          <h2>
            Origin: <span>{char?.origin?.name}</span>
          </h2>
          <h2>
            Location: <span>{char?.location?.name}</span>
          </h2>
        </div>
        <button onClick={generateChar}>Another One</button>
      </div>
    </div>
  );
}

export default App;

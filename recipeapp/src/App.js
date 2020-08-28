import React from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import Spaghetti from "../src/img/Spaghetti.jpg";

function App() {
  return (
    <div className="App">
      <Recipe
        title="pasta"
        ingredients={["flour", "water"]}
        instructions="Mix ingredients"
        img={Spaghetti}
      />
    </div>
  );
}

export default App;

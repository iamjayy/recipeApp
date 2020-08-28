import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeList from "../src/components/RecipeList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default App;

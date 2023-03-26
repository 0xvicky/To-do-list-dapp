import React from "react";
import "./App.css";
import { Navbar, Note, Footer } from "./container";

function App() {
  return (
    <>
      <Navbar />
      <Note />
    </>
  );
}

export default App;

//Create a navbar component, design it at the very end and add a connect wallet functionality
//Then create a note container
//note container consist of input for note taking and add button, whenever the note is taken, it should be added in an array
// and then using map function we get all the notes at the bottom
//then footer

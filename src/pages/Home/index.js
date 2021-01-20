import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import CharacterCounter from "../../components/CharacterCounter";
import TextField from "../../components/TextField";
import ToDoItems from "../../components/ToDoItems";

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
  },
};
const Home = () => {
  return (
    <header className="App-header">
      <div style={styles.container}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>State Management with Recoil</h1>
        <CharacterCounter />
        <TextField />
        <ToDoItems />
      </div>
    </header>
  );
};

export default Home;

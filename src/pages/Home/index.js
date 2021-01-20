import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import CharacterCounter from "../../components/CharacterCounter";
import TextField from "../../components/TextField";
import ToDoItems from "../../components/ToDoItems";
import styled from "styled-components";

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
  },
  link: {
    color: "white",
    hover: {
      color: "blue",
    },
  },
};

const Link = styled.a`
  color: teal;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
`;

const Home = () => {
  return (
    <header className="App-header">
      <div style={styles.container}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>State Management with Recoil</h1>
        <h6>
          By:{" "}
          <Link
            rel="noreferrer"
            href="https://github.com/Mitchell8210/react-with-recoil"
            target="_blank"
          >
            Mitchell Rhoads
          </Link>{" "}
        </h6>
        <CharacterCounter />
        <TextField />
        <ToDoItems />
      </div>
    </header>
  );
};

export default Home;

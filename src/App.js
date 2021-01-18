import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";
import TextField from "./components/TextField";
import ListItem from "./components/ListItem";

const styles = {
  container: {
    maxWidth: 600,
    margin: "auto",
  },
};

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <header className="App-header">
          <div style={styles.container}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>State Management with Recoil</h1>
            <CharacterCounter />
            <TextField />
            <ListItem />
          </div>
        </header>
      </RecoilRoot>
    </div>
  );
}

export default App;

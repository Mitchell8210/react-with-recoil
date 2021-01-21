import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyLists from "./pages/MyLists";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <MyLists path="/my-lists" />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;

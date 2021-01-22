import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyLists from "./pages/MyLists";
import SingleList from "./pages/SingleList";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RecoilRoot>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <MyLists path="/my-lists" />
          <SingleList path="/single-list/:id" />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;

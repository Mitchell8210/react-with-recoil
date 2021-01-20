import { RecoilRoot } from "recoil";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </div>
  );
}

export default App;

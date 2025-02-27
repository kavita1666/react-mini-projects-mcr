import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <HomePage />
      </HashRouter>
    </div>
  );
}

export default App;

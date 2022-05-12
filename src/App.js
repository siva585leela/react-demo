import { Greet } from "./components/Greet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="Sivaleela" heroName="Batsman" />
      <Greet name="balakrishna" heroName="Spiderman">
        <button>Action</button>
      </Greet>
      <Greet name="parvathi" heroName="Wonder man">
        <p>THis is children props</p>
      </Greet>
    </div>
  );
}

export default App;

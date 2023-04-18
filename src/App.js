import "./App.css";
import { Question1 } from "./Components/q1/Question1";
import { Question2 } from "./Components/q2/Question2";
import { Question3 } from "./Components/q3/Question3";
import { Question4 } from "./Components/q4/Question4";

function App() {
  return (
    <div className="main">
      <h1>React PS 5</h1>
      <div className="block">
        <div className="question">Question 1</div>
        <div className="output">
          <Question1 />
        </div>
      </div>
      <div className="block">
        <div className="question">Question 2</div>
        <div className="output">
          <Question2 />
        </div>
      </div>
      <div className="block">
        <div className="question">Question 3</div>
        <div className="output">
          <Question3 />
        </div>
      </div>
      <div className="block">
        <div className="question">Question 4</div>
        <div className="output">
          <Question4 />
        </div>
      </div>
    </div>
  );
}

export default App;

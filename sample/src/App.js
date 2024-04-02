import "./App.css";
import { useState } from "react";

function App() {
  const [result, setresult] = useState("");

  const handle = (e) => {
    e.preventDefault();
    setresult(result.concat(e.target.value));
  };
  const evaluate = (e) => {
    e.preventDefault();
    setresult(eval(result).toString());
  };

  const clear = (e) => {
    e.preventDefault();
    setresult("");
  };
  return (
    <div className="App">
      <div className="ads">
        <input type="text" value={result} />
        <br></br>
        <br></br>
        <button onClick={clear} className="bt">
          {" "}
          AC
        </button>{" "}
        <button onClick={handle} className="bt">
          {" "}
          +/-
        </button>{" "}
        <button onClick={handle} className="bt" value="%">
          {" "}
          %
        </button>{" "}
        <button value="/" onClick={handle} className="btn">
          ÷
        </button>
        <br></br>{" "}
        <button onClick={handle} value="7">
          {" "}
          7
        </button>{" "}
        <button value="8" onClick={handle}>
          {" "}
          8
        </button>{" "}
        <button value="9" onClick={handle}>
          9
        </button>{" "}
        <button value="*" onClick={handle} className="btn">
          *
        </button>
        <br></br>{" "}
        <button onClick={handle} value="4">
          {" "}
          4
        </button>{" "}
        <button value="5" onClick={handle}>
          {" "}
          5
        </button>{" "}
        <button onClick={handle} value="6">
          {" "}
          6
        </button>{" "}
        <button onClick={handle} className="btn" value="-">
          -
        </button>
        <br></br>
        <button onClick={handle} value="1">
          {" "}
          1
        </button>
        <button onClick={handle} value="2">
          2
        </button>{" "}
        <button onClick={handle} value="3">
          {" "}
          3
        </button>{" "}
        <button onClick={handle} className="btn" value="+">
          +
        </button>
        <br></br>
        <button value="0" onClick={handle} className="o">
          {" "}
          0
        </button>
        <button onClick={handle} value=".">
          .
        </button>{" "}
        <button onClick={evaluate} className="btn">
          =
        </button>
      </div>
    </div>
  );
}

export default App;

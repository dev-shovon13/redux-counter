import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="counter py-5">
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-primary px-4 mx-2"
        >
          -
        </button>
        <h4 className="d-inline">{counter}</h4>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary px-4 mx-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

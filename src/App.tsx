import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/Features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="border-solid border-lime-500 border-2 p-2 m-3 rounded-md"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="border-solid border-red-500 border-2 p-2 m-3 rounded-md"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
      <button
        className="border-solid border-red-500 border-2 p-2 m-3 rounded-md"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        IncrementByValue
      </button>
    </>
  );
}

export default App;

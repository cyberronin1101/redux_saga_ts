import stylus from "./App.module.css";

import { counterCustomStep } from "../../redux/counter/counter.actions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";

function App() {
  const count = useSelector((store: IStore) => store.counter.count);
  const dispatch = useDispatch();

  const updateCount = (step: number = 1) => {
    dispatch(counterCustomStep(step));
  };

  return (
    <div className={stylus.app}>
      <button onClick={() => updateCount(-1)}>-</button>
      <button onClick={() => updateCount()}>+</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

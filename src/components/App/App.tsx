import stylus from "./App.module.css";

import { counterCustomStep } from "../../redux/counter/counter.actions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { getLatestNews } from "../../redux/news/news.actions";

function App() {
  const count = useSelector((store: IStore) => store.counter.count);
  const dispatch = useDispatch();

  const updateCount = (step: number = 1) => {
    dispatch(counterCustomStep(step));
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };
  return (
    <div className={stylus.app}>
      <div>
        <button onClick={() => updateCount(-1)}>-</button>
        <button onClick={() => updateCount()}>+</button>
        <h1>{count}</h1>
      </div>

      <div>
        <button onClick={handleNews}>Get News</button>
      </div>
    </div>
  );
}

export default App;

import stylus from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { getLatestNews, getPopularNews } from "../../redux/news/news.actions";
import News from "../News/News";
import Button from "../Button/Button";

function App() {
  const latestNews = useSelector((store: IStore) => store.news.latestNews);
  const popularNews = useSelector((store: IStore) => store.news.popularNews);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getLatestNews());
    dispatch(getPopularNews());
  };
  return (
    <div className={stylus.app}>
      <div className={stylus.header}>
        <Button onClick={handleNews}>Get News</Button>
      </div>
      <div className={stylus.content}>
        <News news={latestNews} title={"Latest News"} />
        <News news={popularNews} title={"Popular News"} />
      </div>
    </div>
  );
}

export default App;

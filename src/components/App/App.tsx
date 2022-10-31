import stylus from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { getNews } from "../../redux/news/news.actions";
import { Button, News } from "..";

export function App() {
  const { popularNews, latestNews, popularNewsError, latestNewsError } =
    useSelector((store: IStore) => store.news);

  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };
  return (
    <div className={stylus.app}>
      <div className={stylus.header}>
        <Button onClick={handleNews}>Get News</Button>
      </div>
      <div className={stylus.content}>
        <News news={latestNews} title={"Latest News"} error={latestNewsError} />
        <News
          news={popularNews}
          title={"Popular News"}
          error={popularNewsError}
        />
      </div>
    </div>
  );
}

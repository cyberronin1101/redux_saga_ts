import { withLayout } from "../../layout";
import { News } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { useEffect } from "react";
import { getLatestNews, getPopularNews } from "../../redux/news/news.actions";

const Home = (): JSX.Element => {
  const { popularNews, latestNews, popularNewsError, latestNewsError } =
    useSelector((store: IStore) => store.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestNews());
    dispatch(getPopularNews());
  }, [dispatch]);

  return (
    <div>
      <News news={latestNews} title={"Latest News"} error={latestNewsError} />
      <News
        news={popularNews}
        title={"Popular News"}
        error={popularNewsError}
      />
    </div>
  );
};

export const HomePage = withLayout(Home);

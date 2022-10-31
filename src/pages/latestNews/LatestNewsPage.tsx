import { withLayout } from "../../layout";
import { News } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { useEffect } from "react";
import { getLatestNews } from "../../redux/news/news.actions";

const LatestNews = (): JSX.Element => {
  const { latestNews, latestNewsError } = useSelector(
    (store: IStore) => store.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestNews());
  }, [dispatch]);

  return (
    <div>
      <News news={latestNews} title={"Latest News"} error={latestNewsError} />
    </div>
  );
};

export const LatestNewsPage = withLayout(LatestNews);

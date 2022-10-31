import { withLayout } from "../../layout";
import { News } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/store";
import { useEffect } from "react";
import { getPopularNews } from "../../redux/news/news.actions";

const PopularNews = (): JSX.Element => {
  const { popularNews, popularNewsError } = useSelector(
    (store: IStore) => store.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularNews());
  }, [dispatch]);

  return (
    <div>
      <News news={popularNews} title={"Latest News"} error={popularNewsError} />
    </div>
  );
};

export const PopularNewsPage = withLayout(PopularNews);

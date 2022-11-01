import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const LatestNews = (): JSX.Element => {
  const { latestNews, latestNewsError, isLoading } = useSelector(
    (store: IStore) => store.news
  );

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <News news={latestNews} title={"Latest News"} error={latestNewsError} />
      )}
    </div>
  );
};

export const LatestNewsPage = withLayout(LatestNews);

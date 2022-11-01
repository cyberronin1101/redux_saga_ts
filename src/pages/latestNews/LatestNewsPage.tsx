import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const LatestNews = (): JSX.Element => {
  const { latestNews, latestNewsError } = useSelector(
    (store: IStore) => store.news
  );

  return (
    <div>
      <News news={latestNews} title={"Latest News"} error={latestNewsError} />
    </div>
  );
};

export const LatestNewsPage = withLayout(LatestNews);

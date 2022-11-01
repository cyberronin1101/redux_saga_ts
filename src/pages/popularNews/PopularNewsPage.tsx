import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const PopularNews = (): JSX.Element => {
  const { popularNews, popularNewsError } = useSelector(
    (store: IStore) => store.news
  );

  return (
    <div>
      <News news={popularNews} title={"Latest News"} error={popularNewsError} />
    </div>
  );
};

export const PopularNewsPage = withLayout(PopularNews);

import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const PopularNews = (): JSX.Element => {
  const { popularNews, popularNewsError, isLoading } = useSelector(
    (store: IStore) => store.news
  );

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <News
          news={popularNews}
          title={"Latest News"}
          error={popularNewsError}
        />
      )}
    </div>
  );
};

export const PopularNewsPage = withLayout(PopularNews);

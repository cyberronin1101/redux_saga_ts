import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const Home = (): JSX.Element => {
  const { popularNews, latestNews, popularNewsError, latestNewsError } =
    useSelector((store: IStore) => store.news);

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

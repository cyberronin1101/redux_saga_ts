import { withLayout } from "../../layout";
import { News } from "../../components";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/store";

const Home = (): JSX.Element => {
  const {
    popularNews,
    latestNews,
    popularNewsError,
    latestNewsError,
    isLoading,
  } = useSelector((store: IStore) => store.news);

  return (
    <div>
      {isLoading && <h3>Loading....</h3>}
      {!isLoading && (
        <>
          <News
            news={latestNews}
            title={"Latest News"}
            error={latestNewsError}
          />
          <News
            news={popularNews}
            title={"Popular News"}
            error={popularNewsError}
          />
        </>
      )}
    </div>
  );
};

export const HomePage = withLayout(Home);

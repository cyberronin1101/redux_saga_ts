import { withLayout } from "../../layout";

const NotFound = (): JSX.Element => {
  return (
    <div>
      <h1>error 404</h1>
      <p>Page not found</p>
    </div>
  );
};

export const PageNotFound = withLayout(NotFound);

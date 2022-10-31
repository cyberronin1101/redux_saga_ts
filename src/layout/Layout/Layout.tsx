import { FC, PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return <div>{children}</div>;
};

export const withLayout = <T extends JSX.IntrinsicAttributes>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

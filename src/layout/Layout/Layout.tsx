import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.css";
import { Header } from "..";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
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

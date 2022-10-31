import { headerProps } from "./Header.props";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

export const Header = ({ className }: headerProps) => {
  const isActive = ({ isActive }: { isActive: boolean; isPending: boolean }) =>
    isActive ? styles.active : "";

  return (
    <header className={cn(className, styles.header)}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <NavLink to={"/"} end className={isActive}>
            Home
          </NavLink>
          <NavLink to={"/news/latest"} className={isActive}>
            Latest news
          </NavLink>
          <NavLink to={"/news/popular"} className={isActive}>
            Popular news
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

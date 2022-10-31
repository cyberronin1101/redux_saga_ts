import cn from "classnames";
import { headerProps } from "./Header.props";
import styles from "./Header.module.css";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { getNews } from "../../redux/news/news.actions";

export const Header = ({ className }: headerProps) => {
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };
  return (
    <header className={cn(className, styles.header)}>
      <Button onClick={handleNews}>Get News</Button>
    </header>
  );
};

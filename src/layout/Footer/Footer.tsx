import { footerProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className }: footerProps) => {
  return (
    <footer className={cn(className, styles.footer)}>
      <div className={styles.wrapper}>footer</div>
    </footer>
  );
};

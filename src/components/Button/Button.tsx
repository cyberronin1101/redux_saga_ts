import { buttonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  children,
  className,
  ...props
}: buttonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

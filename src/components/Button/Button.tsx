import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  textButton: string;
}
const Button: React.FC<ButtonProps> = ({ textButton }) => {
  return (
    <button className={styles.signButton} type="submit">
      {textButton}
    </button>
  );
};

export default Button;

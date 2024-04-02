import React from "react";
import styles from "./LinkRedirection.module.scss";
import { Link } from "react-router-dom";

interface LinkProps {
  existAccountText: string;
  linkText: string;
  link: string;
}

const LinkRedirection: React.FC<LinkProps> = ({
  existAccountText,
  linkText,
  link,
}) => {
  return (
    <p className={styles.linkRedirect}>
      {existAccountText} <Link to={link}>{linkText}</Link>
    </p>
  );
};

export default LinkRedirection;

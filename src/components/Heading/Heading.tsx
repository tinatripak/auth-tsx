import React from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  headingText: string;
}

const Heading: React.FC<HeadingProps> = ({ headingText }) => {
  return <p className={styles.heading}>{headingText}</p>;
};

export default Heading;

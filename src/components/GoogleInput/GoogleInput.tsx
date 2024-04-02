import React from "react";
import styles from "./GoogleInput.module.scss";
import { FaGoogle } from "react-icons/fa";

const GoogleInput: React.FC = () => {
  return (
    <div className={styles.signInGoogle}>
      <button>
        <FaGoogle size={20} />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleInput;

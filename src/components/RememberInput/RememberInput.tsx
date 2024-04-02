import React from "react";
import styles from "./RememberInput.module.scss";

const RememberInput: React.FC = () => {
  return (
    <div className={styles.rememberMe}>
      <input
        type="checkbox"
        id="rememberMe"
        name="rememberMe"
        value="remember"
      />

      <label htmlFor="rememberMe"> Remember Me</label>
    </div>
  );
};

export default RememberInput;

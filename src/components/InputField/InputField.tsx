import React from "react";
import styles from "./InputField.module.scss";

type InputProps = {
  typeInput: string;
  idInput: string;
  labelText: string;
};

const InputField: React.FC<InputProps> = ({
  typeInput,
  idInput,
  labelText,
}) => {
  return (
    <div className={styles.field}>
      <input
        type={typeInput}
        id={idInput}
        required
        className={styles.field__input}
      />

      <label htmlFor={idInput} className={styles.field__label}>
        {labelText}
      </label>
    </div>
  );
};

export default InputField;

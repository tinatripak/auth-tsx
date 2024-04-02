import React from "react";
import styles from "./Instruction.module.scss";

interface InstructionProps {
  instructionText: string;
}

const Instruction: React.FC<InstructionProps> = ({ instructionText }) => {
  return <p className={styles.instruction}>{instructionText}</p>;
};

export default Instruction;

import React from "react";
import styles from "./SignIn.module.scss";
import ImageBlock from "../../components/ImageBlock/ImageBlock";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import LinkRedirection from "../../components/LinkRedirection/LinkRedirection";
import Heading from "../../components/Heading/Heading";
import Instruction from "../../components/Instruction/Instruction";
import GoogleInput from "../../components/GoogleInput/GoogleInput";
import RememberInput from "../../components/RememberInput/RememberInput";

const SignIn: React.FC = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signIn__block}>
        <Heading headingText={"Sign In"} />
        <Instruction
          instructionText={
            "Please enter your information here to view details."
          }
        />
        <div className={styles.signInMethods}>
          <form action="" className={styles.signInForm}>
            <InputField
              typeInput={"text"}
              idInput={"email"}
              labelText={"E-mail"}
            />
            <InputField
              typeInput={"password"}
              idInput={"password"}
              labelText={"Password"}
            />
            <div className={styles.passwordOptions}>
              <RememberInput />
              <p className={styles.forgetPassword}>Forget password</p>
            </div>
            <Button textButton={"Sign In"} />
          </form>
          <p className={styles.orMethod}>OR</p>
          <GoogleInput />
          <LinkRedirection
            existAccountText={"Not registered yet?"}
            link={"/register"}
            linkText={"Create An Account"}
          />
        </div>
      </div>
      <ImageBlock />
    </div>
  );
};

export default SignIn;

import React from "react";
import styles from "./SignUp.module.scss";
import ImageBlock from "../../components/ImageBlock/ImageBlock";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import LinkRedirection from "../../components/LinkRedirection/LinkRedirection";
import Heading from "../../components/Heading/Heading";

const SignUp: React.FC = () => {
  return (
    <div className={styles.signUp}>
      <ImageBlock />
      <div className={styles.signUp__block}>
        <Heading headingText={"Sign Up"} />
        <div className={styles.signUpMethods}>
          <form action="" className={styles.signUpForm}>
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
            <InputField
              typeInput={"password"}
              idInput={"password"}
              labelText={"Confirm Password"}
            />
            <Button textButton={"Sign Up"} />
          </form>
          <LinkRedirection
            existAccountText={"Do you have an account?"}
            link={"/"}
            linkText={"Sign In"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

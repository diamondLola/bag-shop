import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, styleType }) => {
  const buttonStyle = styleType === "style1" ? styles.style1 : styles.style2;
  return <button className={`${styles.button} ${buttonStyle}`}>{text}</button>;
};

export default Button;

// <Button text="Click me" styleType="style1" />

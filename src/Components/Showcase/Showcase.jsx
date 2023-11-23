import React from "react";
import showScss from "./Showcase.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Showcase({
  title,
  secondTitle,
  text,
  useH1,
  buttonText,
  buttonStyle,
}) {
  const SecondTitle = useH1 ? "h1" : "h4";
  return (
    <div>
      <div className={showScss.showcase}>
        <p className={showScss.title}>{title}</p>
        <SecondTitle className={showScss.secondTitle}>
          {secondTitle}
        </SecondTitle>
        <p className={showScss.text}>{text}</p>
        <Link>
          <Button text={buttonText} styleType={buttonStyle} />
        </Link>
      </div>
    </div>
  );
}
//<MyComponent
// title="First Title"
// secondTitle="Second Title"
// text="Some text here..."
// useH1={true}
// buttonText="text"
// buttonStyle="style1"
// />

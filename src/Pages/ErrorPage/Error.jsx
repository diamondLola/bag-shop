import React from "react";
import { Link } from "react-router-dom";
import errScss from "./Error.module.scss";
import Button from "../../Components/Button/Button";

export default function Error() {
  return (
    <div className={errScss.err}>
      <h1>Error page</h1>
      <Link to="/">
        <Button text="back to home page" styleType="style2" />
      </Link>
    </div>
  );
}

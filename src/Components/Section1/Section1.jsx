import React from "react";
import Section1Scss from "./Section1.module.scss";
import Button from "../Button/Button";
import CardForBag from "../CardForBag/CardForBag";

export default function Section1() {
  return (
    <div className={Section1Scss.section1}>
      <div className={Section1Scss.wrap}>
        <div className={Section1Scss.title}>
          <h4>our available product</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <CardForBag />
        <Button text="see more" styleType="style2" />
      </div>
    </div>
  );
}

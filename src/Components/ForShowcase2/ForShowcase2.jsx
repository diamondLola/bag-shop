import React from "react";
import bigBag from "../../assets/bigBag.png";
import blueBag from "../../assets/blueBag.png";
import redBag from "../../assets/redBag.png";
import for2Scss from "./ForShowcase2.module.scss";
import Showcase from "../Showcase/Showcase";

export default function ForShowcase2() {
  return (
    <div>
      <div className={for2Scss.forShow}>
        <div className={for2Scss.wrap}>
          <div className={for2Scss.boxForImg}>
            <img className={for2Scss.biggy} src={bigBag} alt="stylish bags" />
            <img src={blueBag} alt="stylish bags" />
            <img src={redBag} alt="stylish bags" />
          </div>

          <div className={for2Scss.boxForShow}>
            <Showcase
              title="Creative bag only for you."
              secondTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              useH1={false}
              buttonStyle="style1"
              buttonText="see more"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

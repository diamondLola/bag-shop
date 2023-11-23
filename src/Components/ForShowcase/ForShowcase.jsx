import React from "react";
import girl from "../../assets/girl.png";
import forScss from "./ForShowcase.module.scss";
import Showcase from "../Showcase/Showcase";

export default function ForShowcase() {
  return (
    <div>
      <div className={forScss.forShow}>
        <div className={forScss.wrap}>
          <div className={forScss.boxForShow}>
            <Showcase
              title="Look Stylish Be Stylish."
              secondTitle="Look Stylish Be Stylish."
              text="Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses."
              useH1={true}
              buttonStyle="style1"
              buttonText="join now"
            />
          </div>
          <div className={forScss.boxForImg}>
            <img src={girl} alt="stylish bags" />
          </div>
        </div>
      </div>
    </div>
  );
}

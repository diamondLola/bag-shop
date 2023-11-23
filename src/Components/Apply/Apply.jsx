import React from "react";
import applyScss from "./Apply.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
export default function Apply() {
  return (
    <div>
      <div className={applyScss.apply}>
        <div className={applyScss.wrap}>
          <div className={applyScss.box1}></div>
          <div className={applyScss.box2}>
            <h4>Lorem ipsum dolor sit amet adipiscing elit.</h4>
            <div className={applyScss.topInputs}>
              <Input placeholder="name" type="text" width="45%" />
              <Input placeholder="email" type="email" width="45%" />
            </div>
            <Input placeholder="address" type="text" width="100%" />
            <div className={applyScss.form}>
              <div className={applyScss.label}>
                <input type="checkbox" id="accept" />
                <label htmlFor="accept">Lorem ipsum dolor sit.</label>
              </div>
              <Button text="join now" styleType="style1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

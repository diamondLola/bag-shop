import React from "react";
import { Link } from "react-router-dom";
import footScss from "./Footer.module.scss";
import logo from "../../../assets/logo.png";
import ForFooter from "../../ForFooter/ForFooter";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

export default function Footer() {
  return (
    <div>
      <div className={footScss.footer}>
        <div className={footScss.wrap}>
          <div className={footScss.img}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod.
            </p>
          </div>
          <div className={footScss.box1}>
            <ForFooter
              h6Text="special catagories"
              pText={[
                "water resistant",
                "charging system",
                "artificial leather",
              ]}
            />
          </div>
          <div className={footScss.box2}>
            {" "}
            <ForFooter
              h6Text="contact us"
              pText={[
                "(808) 555-0111",
                "michelle.rivera@example.com",
                "http://www.codehow.com",
              ]}
            />
          </div>
          <div className={footScss.box3}>
            <h6>news latter</h6>
            <Input width="100%" placeholder="enter your email" type="email" />
            <Button styleType="style1" text="subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import navScss from "./Navbar.module.scss";
import Button from "../../Button/Button";
import logo from "../../../assets/logo.png";
let ForLinks = [
  { name: "Home", link: "/" },
  { name: "Feature", link: "/" },
  { name: "About", link: "/" },
  { name: "Product", link: "/" },
];

export default function Navbar() {
  return (
    <div>
      <div class={navScss.nav}>
        <div className={navScss.wrap}>
          <div className={navScss.img}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className={navScss.pages}>
            <div className={navScss.links}>
              {ForLinks.map((item, i) => (
                <Link style={{ textDecoration: "none" }} to={item.link} key={i}>
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
            <Link to="/">
              <Button text="shop now" styleType="style1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

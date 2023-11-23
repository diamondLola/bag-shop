import React from "react";
import logoScss from "./Logos.module.scss";
import logo1 from "../../assets/logoC4.png";
import logo2 from "../../assets/logoC2.png";
import logo3 from "../../assets/logoC3.png";
import logo from "../../assets/logoC.png";
import { Link } from "react-router-dom";
let ArrForLogos = [
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo3 },
  { logo: logo },
];

export default function Logos() {
  return (
    <div>
      <div className={logoScss.boxLogos}>
        <div className={logoScss.wrap}>
        {ArrForLogos.map((rasm, i) => {
          return (
            <div className={logoScss.logochalar}>
              <Link to='/'><img key={i} src={rasm.logo} alt="loading" /></Link>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

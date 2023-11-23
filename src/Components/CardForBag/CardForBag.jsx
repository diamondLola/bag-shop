import React from "react";
import bagCardStyle from "./CardForBag.module.scss";
import img1 from "../../assets/bag.png";
import img2 from "../../assets/bag2.png";
import img3 from "../../assets/bag3.png";
import img4 from "../../assets/bag4.png";
import img5 from "../../assets/bag5.png";
import img6 from "../../assets/bag6.png";
import img7 from "../../assets/bag7.png";
import img8 from "../../assets/bag8.png";

let imgForBag = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
];

export default function CardForBag() {
  return (
    <div>
      <div className={bagCardStyle.container}>
        {imgForBag.map((item, i) => {
          return (
            <div key={i} className={bagCardStyle.card}>
              <img src={item.img} alt="bag" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

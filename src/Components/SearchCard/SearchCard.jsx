import React from "react";
import cardScss from "./SearchCard.module.scss";

const Card = (props) => {
  return (
    <div className={cardScss.card}>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default Card;

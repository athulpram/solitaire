import React from "react";
const COLOR = {
  heart: "playing-card-red",
  spade: "playing-card-black",
  clubs: "playing-card-black",
  diamond: "playing-card-red"
};

const Card = function(props) {
  return (
    <div className={COLOR[props.cardProps.suit]}>
      <span>{props.cardProps.card}</span>
    </div>
  );
};

export default Card;

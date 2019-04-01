import React from "react";
const PLAYING_CARD = "playing-card";

const Card = function(props) {
  return <div className={props.cardType}>{props.card}</div>;
};

export default Card
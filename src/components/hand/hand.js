import React from "react";
import "./hand.css";

import Card from "../card/card";

export default function Hand(props) {
  
  return (
    <div className="Hand">
      {props.hand && props.hand.map(card => (
        <div
          key={card.id}
        >
          <Card {...card} key={card.id} />
        </div>
      ))}
    </div>
  );
}

import React from "react";
import "./deck.css";

import Card from "../card/card";

export default function Deck(props) {
  
  return (
    <div className="Deck">
      {props.deck && props.deck.map(card => (
        <div
          key={card.id}
          onClick={() => props.onClick(card)}
        >
          <Card {...card} key={card.id} />
        </div>
      ))}
    </div>
  );
}

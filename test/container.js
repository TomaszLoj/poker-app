import React, { useState } from "react";
import "./container.css";

import Deck from "../deck/deck";
import Hand from "../hand/hand";
import deckGenerator from "../deckGenerator";

export default function Container() {
  const [deck, setDeck] = useState(deckGenerator());
  const [hand, setHand] = useState([]);

  let [, setState] = useState();

  function handleUpdate() {
    setState({});
  }

  const chooseCard = card => {
    if (hand.length < 5) {
      setHand([...hand, card]);
      setDeck(deck.filter(i => i.id !== card.id));
    } else {
      // checkHand()
    }
  };
  const choseRandomCards = () => {
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * (48 - i));
      hand.push(...deck.splice(randomNumber, 1));
    }
    handleUpdate();
    // checkHand();
  };

  return (
    <div className="Deck">
      <h1>Wybierz 5 kart lub kliknij losuj</h1>
      <button onClick={choseRandomCards}>Losuj</button>
      <Hand hand={hand}></Hand>
      <Deck deck={deck} onClick={chooseCard}></Deck>
    </div>
  );
}

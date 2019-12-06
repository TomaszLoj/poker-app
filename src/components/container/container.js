import React, { useState } from "react";
import "./container.css";

import Deck from "../deck/deck";
import Hand from "../hand/hand";
import deckGenerator from "../deckGenerator";
import checkHand from "../checkHand";

export default function Container() {
  const [deck, setDeck] = useState(deckGenerator());
  const [hand, setHand] = useState([]);
  const [pokerHand, setPokerHand] = useState([]);

  const arrayDeleter = (deck, card) => {
    let newCard = card.pop();
    let newDeck = deck.filter(i => i.id !== newCard.id);

    if (card.length > 0) {
      return arrayDeleter(newDeck, card);
    } else {
      return newDeck;
    }
  };

  const chooseCard = (...card) => {
    if (hand.length < 5 || card.length === 5) {
      let newHand = [...hand, ...card];
      newHand.sort((a, b) => a.weight - b.weight);
      setHand(newHand);
      setDeck(arrayDeleter(deck, card));

      newHand.length === 5 && setPokerHand(checkHand(newHand));
    }
  };

  const choseRandomCards = () => {
    let cardSet = [];
    let i = 0;

    while (i < 5) {
      let randomNumber = Math.floor(Math.random() * 48);

      if (!cardSet.includes(deck[randomNumber])) {
        cardSet.push(deck[randomNumber]);
        i++;
      }
    }
    chooseCard(...cardSet);
  };

  return (
    <div className="Container">
      <div className="Title">
        <h3>Choose five cards or click</h3>
        <button onClick={choseRandomCards} disabled={hand.length > 0}>
          random
        </button>
        <h3>{pokerHand}</h3>
      </div>
      <Hand hand={hand}></Hand>
      <Deck deck={deck} onClick={chooseCard}></Deck>
    </div>
  );
}

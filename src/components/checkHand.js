const countCards = hand => {
  let suits = {};
  let weights = {};

  for (const card of hand) {
    weights[card.weight] ? weights[card.weight]++ : (weights[card.weight] = 1);
    suits[card.suit] ? suits[card.suit]++ : (suits[card.suit] = 1);
  }
  return {
    suits,
    weights
  };
};

const sameSuit = suits => (Object.keys(suits).length === 1 ? true : false);

const sameWeight = (weights, length, include) =>
  Object.values(weights).length === length &&
  Object.values(weights).includes(include)
    ? true
    : false;

const straight = hand => (hand[4].weight - hand[0].weight === 4 ? true : false);

const hands = {
  royalFlush: ( { suits }, hand ) =>hand[4].weight === 12 && straight(hand) && sameSuit(suits)? "Royal Flush": false,
  straightFlush: ( { suits } ,hand) =>straight(hand) && sameSuit(suits) ? "Straight Flush" : false,
  fourKind: ({ weights }) =>sameWeight(weights, 2, 4) ? "Four Of a Kind" : false,
  fullHouse: ({ weights }) => (sameWeight(weights, 2, 3) ? "Full House" : false),
  flush: ({ suits }) => (sameSuit(suits) ? "flush" : false),
  straight: ( { suits } ,hand) => straight(hand) ? "straight" : false,
  threeKind: ({ weights }) =>sameWeight(weights, 3, 3) ? "Three Of a Kind" : false,
  twoPair: ({ weights }) => (sameWeight(weights, 3, 2) ? "Two Pair" : false),
  onePair: ({ weights }) => (sameWeight(weights, 4, 2) ? "One Pair" : false),
  highCard: ({ weights }) => (sameWeight(weights, 5, 1) ? "High Card" : false),
};

export default function checkHand(hand) {

  let count = countCards(hand);
  
  let pokerHand = false;

  for (const method in hands) {
    pokerHand =hands[method](count,hand);
    if (pokerHand) break;
  }
  
  return pokerHand
}

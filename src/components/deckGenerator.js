function imagePathGenerate(suit, value) {
    return `images/${value}${suit}.png`;
  }
  
  export default function deck() {
    let i = 0;
    let deck = [];
    let suit = ["H", "D", "C", "S"];
    let value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  
    suit.forEach(suit =>
      value.forEach((value, weight) => {
        deck.push({
          id: i,
          suit,
          value,
          weight,
          url: imagePathGenerate(suit, value)
        });
        i++;
      })
    );
  
    return deck;
  }
  
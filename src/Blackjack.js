import React, { useState, useEffect } from 'react';
import './Blackjack.css'
import Player from './Player.js';

const generate_card = () => {
  const suits = ["C", "S", "D", "H"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

  const card = {
    suit: suits[Math.floor(Math.random() * suits.length)],
    value: values[Math.floor(Math.random() * values.length)],
  }
  return card;
}

export const get_value = (hand) => {
  let hand_values = [0];

  for (let card of hand) {
    switch (card.value) {
        case "A":
            let low = hand_values.map((v) => v + 1);
            let high = hand_values.map((v) => v + 11);
            
            hand_values = low.concat(high);
            break;
        case "K":
        case "Q":
        case "J":
            hand_values = hand_values.map((v) => v + 10);
            break;
        default:
            hand_values = hand_values.map((v) => v + Number(card.value));
    }
  }

  const non_busted = hand_values.filter((v) => v < 22);

  if (!(non_busted.length == 0)) {
      hand_values = non_busted;
  }

  return Math.max(...hand_values);
}

const Blackjack = () => {
  const [player_hand, set_player_hand] = useState([generate_card()])
  const [dealer_hand, set_dealer_hand] = useState([generate_card()])
 
  const [player_busted, set_player_busted] = useState(false);
  const [dealer_busted, set_dealer_busted] = useState(false);

  const [player_turn, set_player_turn] = useState(true);

  useEffect(() => {
    const set_busted = (hand, set_busted) => {
      if (get_value(player_hand) > 21) {
          set_busted(true);
      }
      else {
        set_busted(false);
      }
    }

    set_busted(player_hand, set_player_busted);
    set_busted(dealer_hand, set_dealer_busted);
  }, [player_hand]);

  const handle_hit = (hand, set_hand) => {
    set_hand(hand.concat(generate_card()));
  }

  return (
    <>
      <div className="dealer">
        <Player cards={dealer_hand}/>
      </div>
      <div className="players">
        <Player cards={player_hand}/>
      </div>
      {!player_busted && <div className="buttons">
          <button onClick={() => handle_hit(player_hand, set_player_hand)}>Hit</button>
          <button>Stand</button>
      </div>}
    </>
  );
}

export default Blackjack;

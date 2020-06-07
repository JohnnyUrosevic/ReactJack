import React, { useState, useEffect, useCallback, useRef } from 'react';
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

const is_soft_17 = (hand) => {
  return hand.length === 2 && ((hand[0].value === "A" && hand[1].value === "6")
    || (hand[0].value === "6" && hand[1].value === "A"));
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

  if (!(non_busted.length === 0)) {
      hand_values = non_busted;
  }

  return Math.max(...hand_values);
}

const handle_hit = (set_hand) => {
  set_hand(hand => hand.concat(generate_card()));
}

const Blackjack = () => {
  const [player_hand, set_player_hand] = useState([generate_card(), generate_card()]);
  const [dealer_hand, set_dealer_hand] = useState([generate_card()]);
 
  const [player_busted, set_player_busted] = useState(false);

  const [player_turn, set_player_turn] = useState(true);
  const [betting, set_betting] = useState(true);

  const [bet, set_bet] = useState(100);

  const [balance, set_balance] = useState(1000);

  const [status, set_status] = useState("Player's Turn");

  const player_turn_ref = useRef(player_turn);
  player_turn_ref.current = player_turn;

  const player_hand_ref = useRef(player_hand);
  player_hand_ref.current = player_hand;

  const dealer_hand_ref = useRef(dealer_hand);
  dealer_hand_ref.current = dealer_hand;

  const bet_ref = useRef(bet);
  bet_ref.current = bet;

  const end_round = useCallback(() => {
    const player_value = get_value(player_hand_ref.current);
    const dealer_value = get_value(dealer_hand_ref.current);

    if (player_busted || (dealer_value > player_value && dealer_value <= 21)) {
      set_status("House Wins");
    }
    else if (player_value === dealer_value) {
      set_balance(balance => balance + bet_ref.current)
      set_status("Tie Round");
    }
    else {
      set_balance(balance => balance + bet_ref.current * 2)
      set_status("Player Wins");
    }

    setTimeout(() => {
      set_player_hand([generate_card(), generate_card()]);
      set_dealer_hand([generate_card()]);
      set_player_turn(true);
      set_betting(true);
      set_status("Player's Turn");
    }, 1000);
  }, [player_busted, bet]);

  const run_dealer_turn = useCallback(() => {
    const value = get_value(dealer_hand_ref.current);
    if (value >= 17 && !is_soft_17(dealer_hand_ref.current)) {
      end_round();
      return;
    }

    handle_hit(set_dealer_hand);

    setTimeout(run_dealer_turn, 500);
  }, []);

  useEffect(() => {
    const set_busted = (set_busted) => {
      if (get_value(player_hand) > 21) {
          set_busted(true);
      }
      else {
        set_busted(false);
      }
    }

    set_busted(set_player_busted);
  }, [player_hand, run_dealer_turn]);

  useEffect(() => {
    if (player_busted) {
      set_player_turn(false);
      end_round();
    }
  }, [player_busted]);

  useEffect(() => {
    if (!player_turn && !player_busted) {
      set_status("Dealer's turn");
      run_dealer_turn();
    }
  }, [player_turn]);

  return (
    <>
      <h1>{status}</h1>
      <p>Balance: {balance}</p>
      <div className="dealer">
        <Player cards={dealer_hand}/>
      </div>
      <div className="players">
        <Player cards={player_hand}/>
      </div>
      {betting && <div className="bet">
        <strong>Place a bet:</strong>
        <input value={bet} onChange={(e) => set_bet(e.target.value)}></input>
        <button onClick={() => {set_betting(false); set_balance(balance => balance - bet)}}>Submit</button>
      </div>
      }
      {player_turn && !betting && <div className="buttons">
          <button onClick={() => handle_hit(set_player_hand)}>Hit</button>
          <button onClick={() => set_player_turn(false)}>Stand</button>
      </div>}
    </>
  );
}

export default Blackjack;

import React from 'react';
import './Blackjack.css'
import Player from './Player.js';

function Blackjack() {
  const sample_cards = [{suit: "S", value: "A"}, {suit: "C", value: "2"}, {suit: "H", value: "10"}];
  return (
    <div className="Table">
      <Player cards={sample_cards}/>
    </div>
  );
}

export default Blackjack;

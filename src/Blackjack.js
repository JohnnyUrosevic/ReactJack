import React from 'react';
import Card from './Card.js'
import './Blackjack.css'

function Blackjack() {
  return (
    <div className="Table">
      <Card suit="S" value="A"/>
      <Card suit="C" value="3"/>
    </div>
  );
}

export default Blackjack;

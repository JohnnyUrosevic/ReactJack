import React from 'react';
import Card from './Card.js'
import './Player.css'
import { get_value } from './Blackjack.js';

const Player = (props) => {
    const card_to_html = (card, i) => <Card key={i} style={{marginTop: i * 2 + "%"}} suit={card.suit} value={card.value} />
    const card_html = props.cards.map(card_to_html);

    const text_color = (get_value(props.cards) < 22) ? "white" : "red";

    return (
        <div className="cards">
            {props.cards.length > 0 && <p style={{color: text_color}}>{get_value(props.cards)}</p>}
            {card_html}
        </div>
    );
}

export default Player;

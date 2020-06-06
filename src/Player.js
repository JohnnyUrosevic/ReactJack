import React from 'react';
import Card from './Card.js'
import './Player.css'

const Player = (props) => {
    let hand_values = [0];

    for (let card of props.cards) {
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

    const card_to_html = (card, i) => <Card key={i} style={{marginTop: i * 2 + "%"}} suit={card.suit} value={card.value} />
    const card_html = props.cards.map(card_to_html);
    return (
        <div className="cards">
            {props.cards.length > 0 && <p>{Math.max(...hand_values)}</p>}
            {card_html}
        </div>
    );
}

export default Player;

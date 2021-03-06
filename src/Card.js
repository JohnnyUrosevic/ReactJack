import React from 'react';
import './Card.css'

const Card = (props) => {

    const image_file = process.env.PUBLIC_URL + '/cards/' 
        + (props.hidden ? 'red_back' : props.value + props.suit) + '.png';
    return <img style={props.style} className="card" src={image_file} alt={props.value + props.suit}/>
}

export default Card;

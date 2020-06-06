import React from 'react';
import './Card.css'

const Card = (props) => {
    const image_file = process.env.PUBLIC_URL + '/cards/' 
        + props.value + props.suit + '.png';
    return <img src={image_file} alt={props.value + props.suit}/>
}

export default Card;

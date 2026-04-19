import React from 'react';
import {use} from 'react';

const Cards = ({cardJson}) => {

    const cards = use(cardJson);
    console.log(cards);
    return (
        <div>
            
        </div>
    );
};

export default Cards;
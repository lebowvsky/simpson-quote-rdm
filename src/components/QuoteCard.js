import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({simpsonChar}) => {
    return (
        <figure className="QuoteCard">
            <img
            src={simpsonChar.image}
            alt={simpsonChar.character} />
            <figcaption>
                <blockquote>{simpsonChar.quote}</blockquote>
                <p>
                    <cite>{simpsonChar.character}</cite>
                </p>
            </figcaption>
        </figure>
    )
}



export default QuoteCard;
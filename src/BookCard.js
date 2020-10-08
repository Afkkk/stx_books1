import React from 'react';
import "./BookCard.css";
import TextTruncate from 'react-text-truncate';

const BookCard = (props) => {
    return (
        <div className="BookCard__card">
            <img src={props.image} alt="" className="BookCard__image" />
            <div className="BookCard__cardtext">
                <h4>{props.title}</h4>
                <p><TextTruncate
                line={4}
                element="span"
                truncateText="..."
                text={props.description}               
                /></p>
            </div>
        </div>
    )
}

export default BookCard;

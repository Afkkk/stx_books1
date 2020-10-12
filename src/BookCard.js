import React from 'react';
import "./BookCard.css";
import TextTruncate from 'react-text-truncate';

const BookCard = (props) => {
    return (
        <div className="BookCard__card">
               
               <a href={props.url} target="_blank"><img src={props.image} alt="Loading..."  className="BookCard__image" /></a>  
                <div className="BookCard__cardtext">
                <h4>{props.title}</h4>
                <p><TextTruncate
                line={2}
                element="span"
                truncateText="..."
                text={props.description}               
                /></p>
            </div>
        </div>
    )
}

export default BookCard;

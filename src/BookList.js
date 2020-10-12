import React from 'react'
import BookCard from './BookCard.js';
import "./BookList.css";

const BookList = (props) => {
    return (
        <div className="BookList__list">
            {
                props.books.map((book, i)=>{

                    return <BookCard 
                    
                    key={i}
                    url={book.volumeInfo.previewLink}
                    ttitle={book.volumeInfo.title?book.volumeInfo.title:"No Title"}
                    description={book.volumeInfo.description?book.volumeInfo.description:"No Description"}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: "Loading..." }
                    
                     />
                })
            }
        </div>
    )
}

export default BookList;

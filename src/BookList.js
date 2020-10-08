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
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}

                     />
                })
            }
        </div>
    )
}

export default BookList;

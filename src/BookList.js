import React, {useEffect} from 'react'
import BookCard from './BookCard.js';
import "./BookList.css";

const BookList = (props) => {
    
    

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            
            if(document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight){
                
                document.getElementById("SearchArea__Click").click();         
            }
            
        });

        return ()=>{
            
            window.removeEventListener("scroll");

        }

        
    },[])

        
    

    return (
        <div className="BookList__list">  
            {
                props.books.map((book, i)=>{

                    return <BookCard 
                    key={i}
                    url={book.volumeInfo.previewLink}
                    title={book.volumeInfo.title?book.volumeInfo.title:"No Title"}
                    description={book.volumeInfo.description?book.volumeInfo.description:"No Description"}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: "Loading..." }
                    
                     />
                })
            }
          
        </div>
    )
}

export default BookList;

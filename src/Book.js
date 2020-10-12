import React, { Component} from 'react';
import SearchArea from './SearchArea.js'
import request from 'superagent';
import BookList from './BookList.js';
import API_KEY from './requests.js';



class Book extends Component{

    
    
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: "",
            searchAuthor: "",
            searchSubject: "",
            choseFilter: "partial",
            startIndex: 0,
            
        }
        
    }


     searchBookByName = (e) =>{
       e.preventDefault();
       
       
    

        if(this.state.searchField!==""&&this.state.searchAuthor===""&&this.state.searchSubject==="")//szukanie po Tytule
        {   
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                 if(data.body.items){
                     this.setState({books: [...this.state.books,...data.body.items]})
                 }
                 
                //this.setState({books:[...data.body.items]?{books: [...this.state.books,...data.body.items]}:console.log("brak wyszukiwan")})
            })
        }else if(this.state.searchField===""&&this.state.searchAuthor!==""&&this.state.searchSubject==="")//szukanie po Autorze
        {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=+inauthor: "+this.state.searchAuthor+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                }
            })
        }else if(this.state.searchField===""&&this.state.searchAuthor===""&&this.state.searchSubject!=="")//szukanie po Temacie
        {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=+subject: "+this.state.searchSubject+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                    console.log("jest")
                }
        })
        }else if(this.state.searchField!==""&&this.state.searchAuthor!==""&&this.state.searchSubject==="")//szukanie po Tytule i Autorze
            {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+inauthor: "+this.state.searchAuthor+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                }
            })
        }
        else if(this.state.searchField!==""&&this.state.searchAuthor===""&&this.state.searchSubject!=="")//szukanie po Tytule i Temacie
        {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+subject: "+this.state.searchSubject+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                }
            })

        }
        else if(this.state.searchField===""&&this.state.searchAuthor!==""&&this.state.searchSubject!=="")//szukanie po Autorze i Temacie
        {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=inauthor: "+this.state.searchAuthor+"&subject: "+this.state.searchSubject+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                }
            })


        }
        else if(this.state.searchField!==""&&this.state.searchAuthor!==""&&this.state.searchSubject!=="")//szukanie po każdym polu 
        {
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+inauthor: "+this.state.searchAuthor+"&subject: "+this.state.searchSubject+"&startIndex="+this.state.startIndex+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                if(data.body.items){
                    this.setState({books: [...this.state.books,...data.body.items]})
                }
            })

        }
       
        this.setState({startIndex: this.state.startIndex+12})
     }


    handleSearch = (e) =>{
        this.setState({searchField: e.target.value })
        this.setState({startIndex:0})
        this.setState({ books: []})
    }

    handleAuthor = (e) =>{
        this.setState({searchAuthor: e.target.value})
        this.setState({startIndex:0})
        this.setState({ books: []})
    }

    handleSubject = (e) =>{
        this.setState({searchSubject: e.target.value})
        this.setState({startIndex:0})
        this.setState({ books: []})
    }

    handleFilter = (e) =>{
        this.setState({choseFilter: e.target.value})
        this.setState({startIndex:0})
        this.setState({ books: []})
    }


    render(){
        

        return(
            <div>
                <SearchArea searchBookByName={this.searchBookByName} handleSearch={this.handleSearch} handleAuthor={this.handleAuthor} handleSubject={this.handleSubject} handleFilter={this.handleFilter}/>
                <BookList books={this.state.books} /> 
                
            </div>
        );
    }
}

export default Book;

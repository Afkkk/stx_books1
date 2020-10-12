import React, {Component} from 'react';
import SearchArea from './SearchArea.js'
import request from 'superagent';
import BookList from './BookList.js';
import API_KEY from './requests.js';
//import Axios from 'axios';


class Book extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: "",
            searchAuthor: "",
            searchSubject: "",
            choseFilter: "partial"
        }
    }

     searchBookByName = (e) =>{
       e.preventDefault();


        if(this.state.searchField!==""&&this.state.searchAuthor===""&&this.state.searchSubject==="")//szukanie po Tytule
        {
            console.log("if1")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })
        }else if(this.state.searchField===""&&this.state.searchAuthor!==""&&this.state.searchSubject==="")//szukanie po Autorze
        {
            console.log("if2")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=+inauthor:"+this.state.searchAuthor+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })
        }else if(this.state.searchField===""&&this.state.searchAuthor===""&&this.state.searchSubject!=="")//szukanie po Temacie
        {
            console.log("if3")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=+subject:"+this.state.searchSubject+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
        })
        }else if(this.state.searchField!==""&&this.state.searchAuthor!==""&&this.state.searchSubject==="")//szukanie po Tytule i Autorze
            {
                console.log("if4")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+inauthor:"+this.state.searchAuthor+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })
        }
        else if(this.state.searchField!==""&&this.state.searchAuthor===""&&this.state.searchSubject!=="")//szukanie po Tytule i Temacie
        {
            console.log("if5")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+subject:"+this.state.searchSubject+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })

        }
        else if(this.state.searchField===""&&this.state.searchAuthor!==""&&this.state.searchSubject!=="")//szukanie po Autorze i Temacie
        {
            console.log("if6")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q=inauthor:"+this.state.searchAuthor+"&subject:"+this.state.searchSubject+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })


        }
        else//inne przypadki
        {
            console.log("if7")
            request
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"+inauthor:"+this.state.searchAuthor+"&subject"+this.state.searchSubject+"&key="+API_KEY+"&maxResults=12&filter="+this.state.choseFilter)
            .then((data) =>{
                console.log(data.body.items);
                this.setState({ books: [...data.body.items]})
            })

        }
        
         
     }
    


    handleSearch = (e) =>{
        console.log(e.target.value)
        this.setState({searchField: e.target.value })
    }

    handleAuthor = (e) =>{
        console.log(e.target.value)
        this.setState({searchAuthor: e.target.value})
    }

    handleSubject = (e) =>{
        console.log(e.target.value)
        this.setState({searchSubject: e.target.value})
    }
    handleFilter = (e) =>{
        console.log(e.target.value)
        this.setState({choseFilter: e.target.value})
    }

    render(){
        return(
            <div>
                <SearchArea searchBookByName={this.searchBookByName} handleSearch={this.handleSearch} handleAuthor={this.handleAuthor} handleSubject={this.handleSubject} handleFilter={this.handleFilter}/>
                <BookList books={this.state.books}/> 
            </div>
        );
    }
}

export default Book;

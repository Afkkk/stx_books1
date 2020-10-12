import React from 'react';
import './SearchArea.css';
import { Button, OutlinedInput, Select,FormControl } from '@material-ui/core';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

const SearchArea = (props) => {
    return (
        <div className="SearchArea__holderDiv">
            <h1 className="SearchArea__titleText"><LibraryBooksOutlinedIcon className="SearchArea__IconSearch"/><i className="SearchArea__titleItalicText"> Search books </i><LibraryBooksOutlinedIcon className="SearchArea__IconSearch"/></h1>
            <form onSubmit={props.searchBookByName} action="" className="SearchArea__holderForm">
                <p className="SearchArea__textP1"><b className='SearchArea__text'> Title: </b> <OutlinedInput type="text" onChange={props.handleSearch} placeholder="Enter book name" className="SearchArea__textInput"/></p>
                <p className="SearchArea__textP2"><b className='SearchArea__text'>Author: </b><OutlinedInput type="text" onChange={props.handleAuthor} placeholder="Enter Author name" className="SearchArea__textInput"/></p>
                <p className="SearchArea__textP3"><b className='SearchArea__text'>Subjet: </b><OutlinedInput type="text" onChange={props.handleSubject} placeholder="Enter Subjet" className="SearchArea__textInput"/></p>
                <p className="SearchArea__textP4"><b className='SearchArea__text'>Availability: </b><FormControl variant="outlined"><Select native className="SearchArea__selectInput" onChange={props.handleFilter}>
                    <option value="partial">partial</option>
                    <option value="full" >full</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="ebooks">ebooks</option>
                    </Select></FormControl></p><p className="SearchArea__buttonSubmitP"><b className='SearchArea__textHidden' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><Button  variant="outlined" type="submit" className="SearchArea__buttonSubmit">Search</Button></p>
            </form>
        </div>
    )
}

export default SearchArea;

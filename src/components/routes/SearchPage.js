import React from 'react'

import {
    Link
} from "react-router-dom";
import Book from "../subComponents/Book";

class SearchPage extends React.Component {

    onSearchInputChange = (e) => {
        console.log(e.target.value);
        this.props.onSearchChange(e.target.value);
    }

    onSelectFormChange = async (a, b)  => {
        this.props.onSelectChange(a, b);
    }
    
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to = '/'><button className="close-search" >Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onSearchInputChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.props.search_books.map((book) => {
                                return <Book
                                    onSelectChange = {this.onSelectFormChange}
                                    key = {book.id}
                                    style = {{ width: 128,
                                        height: 188,
                                        backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
                                    title = {book.title}
                                    author ={book.author}
                                    id = {book.id}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage

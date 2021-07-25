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
    addShelfAttr = () => {
        let shelfBook = {}
        this.props.books.forEach((book) => {
            shelfBook[book.title] = book.shelf;
        })
        let x = this.props.search_books.error !== "empty query" ? this.props.search_books ? this.props.search_books.forEach((searchBook) => {
            if(searchBook.title in shelfBook){
                searchBook.shelf = shelfBook[searchBook.title]
            }
            else{
                searchBook.shelf = 'none'
            }
        }): "":""
        console.log("shelfBook", shelfBook);
        return x
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
                        {console.log("bookss", this.props.books)}
                        {console.log(this.addShelfAttr())}

                        {console.log("search bookss", this.props.search_books)}

                        {
                            this.props.search_books ? this.props.search_books.error !== "empty query" ? this.props.search_books.map((book) => {
                                return <Book
                                    onSelectChange = {this.onSelectFormChange}
                                    shelf = {book.shelf}
                                    key = {book.id}
                                    style = {{ width: 128,
                                        height: 188,
                                        backgroundImage:book.imageLinks? `url("${book.imageLinks.thumbnail}")`:`url()` }}
                                    title = {book.title}
                                    author ={book.authors}
                                    id = {book.id}
                                />
                            }) : "" : ""
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage

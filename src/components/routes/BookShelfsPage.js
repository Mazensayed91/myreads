import React from 'react'
import BookShelf from "../subComponents/BookShelf";

import {
    Link
} from "react-router-dom";

class BookShelfPage extends React.Component {

    state = {
        books: this.props.books
    }
    onSelectFormChange = async (a, b)  => {
        this.props.onSelectChange(a, b);
    }

    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf status = 'Currently Reading' books = {this.props.books.filter((book) =>  book.shelf === 'currentlyReading')} onSelectChange = {this.onSelectFormChange}/>
                        <BookShelf status = 'Want to Read' books = {this.props.books.filter((book) =>  book.shelf === 'wantToRead')} onSelectChange = {this.onSelectFormChange}/>
                        <BookShelf status = 'Read' books = {this.props.books.filter((book) =>  book.shelf === 'read')} onSelectChange = {this.onSelectFormChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default BookShelfPage
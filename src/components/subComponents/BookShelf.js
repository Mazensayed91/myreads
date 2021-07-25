import React from 'react'
import Book from "./Book";


class BookShelf extends React.Component {

    onSelectFormChange = async (a, b)  => {
        this.props.onSelectChange(a, b);
    }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.status}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map((book) => {
                                return <Book
                                        onSelectChange = {this.onSelectFormChange}
                                        shelf = {this.props.shelf}
                                        key = {book.id}
                                        style = {{ width: 128,
                                                    height: 188,
                                                    backgroundImage:book.imageLinks? `url("${book.imageLinks.thumbnail}")`:`url()` }}
                                        title = {book.title}
                                        author ={book.authors}
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

export default BookShelf

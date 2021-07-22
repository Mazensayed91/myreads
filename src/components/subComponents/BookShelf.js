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

export default BookShelf

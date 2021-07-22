import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/routes/SearchPage'
import BookShelfPage from './components/routes/BookShelfsPage'

import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {search, update} from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.state = {
      books: [],
      search_books: []
    };
  }

  async componentDidMount() {
    let books = await BooksAPI.getAll();

    this.setState({books: books});
  }

  onSelectFormChange = async (book_id, shelf) => {
    await update(book_id, shelf);
    let books = await BooksAPI.getAll();
    this.setState({
      books: books
    })
  }
  onSearchChange = async (query) => {
    console.log("query", query);
    let search_books = await search(query);
    console.log("books", search_books);
    this.setState({
      search_books: search_books
    })

  }

  render() {
    return (
        <div className="app">
          <Router>
            <Switch>
              <Route path="/search">
                <SearchPage search_books={this.state.search_books} onSearchChange={this.onSearchChange}  onSelectChange={this.onSelectFormChange}/>
              </Route>
              <Route path="/">
                <BookShelfPage books={this.state.books} onSelectChange={this.onSelectFormChange}/>
              </Route>
            </Switch>
          </Router>
        </div>
    )
  }
}
export default BooksApp

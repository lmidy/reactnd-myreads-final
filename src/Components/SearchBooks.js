import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  state = {
      books: [],
      booksOnMyList: [],
      booksQuery: ''
  }

  componentDidMount() {
   BooksAPI.getAll().then(allBooks => {
     this.setState({
       booksOnMyList: allBooks.filter(book => book.shelf !== 'none')
        })
      })
    }

    handleBookShelfChange = (book, shelf) => {
        this.props.onBookShelfChange(book, shelf);
    }

    updateQuery(booksQuery) {
        this.setState({ booksQuery })
      }
    //find books that are in my list and in the searched query list and update to match the my shelf state
    searchBooks(booksQuery) {
        const { booksOnMyList } = this.state
        console.log(booksOnMyList)
  	     this.updateQuery(booksQuery)
        if (booksQuery) {
          BooksAPI.search(booksQuery, 20).then((results) => {
            if (results && results.length > 0) {
              console.log(results)
              let searchResults = results
          	  searchResults.map((book) => book.shelf = 'none' )
          	  booksOnMyList.map((book) => {
                  const updateIndex = searchResults.findIndex(s => s.id === book.id)
        		      if (searchResults[updateIndex] ) {
        		          searchResults[updateIndex].shelf = book.shelf
                    }
                  return searchResults;

                  })
              this.setState({ books: searchResults })

            } else {
              this.setState({ books: [] })
            }
          })
        } else {
          this.setState({ books: [] })

        }
      }

      onShelfUpdate = (book, shelfName) => {
        BooksAPI.update(book, shelfName)
        const { books } = this.state
   	    const updateIndex = books.findIndex(b => b.id === book.id)
        const updateBook = books[updateIndex]
        updateBook.shelf = shelfName
        this.setState({
          books: [...books.slice(0, updateIndex), updateBook, ...books.slice(updateIndex + 1)]
        })
      }

      clearQuery = () => {
              this.setState({
                books: [],
                booksOnMyList: [],
                booksQuery: ''
              })
          }


    render() {
      const { books } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                 	  <Link to="/"
                      className="close-search"
                      onClick={this.clearQuery}
                      >Close
                    </Link>
                    <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(e) => this.searchBooks(e.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onShelfUpdate={this.onShelfUpdate}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks

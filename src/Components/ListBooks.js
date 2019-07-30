import React , { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI'

class ListBooks extends Component {

  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll()
        .then((books) => {
          this.setState({ books: books });
        })
  }

  onShelfUpdate = (book, shelfName) => {
   const { books } = this.state
 	    const updateIndex = books.findIndex(b => b.id === book.id)
   const updateBook = books[updateIndex]
   updateBook.shelf = shelfName

   this.setState({
     books: [...books.slice(0, updateIndex), updateBook, ...books.slice(updateIndex + 1)]
     })

     BooksAPI.update(book, shelfName)
   }

    render() {
      const { books } = this.state
        return (
          <div className="list-books">
            <div className="list-books-content">
                <div>
                    <BookShelf
                        title="Currently Reading"
                        books={books.filter(book => book.shelf === 'currentlyReading')}
                        onShelfUpdate={this.onShelfUpdate}
                    />
                    <BookShelf
                        title="Want to Read"
                        books={books.filter(book => book.shelf === 'wantToRead')}
                        onShelfUpdate={this.onShelfUpdate}
                    />
                    <BookShelf
                        title="Read"
                        books={books.filter(book => book.shelf === 'read')}
                        onShelfUpdate={this.onShelfUpdate}
                    />
                </div>
            </div>
          </div>
        )
    }
}

export default ListBooks

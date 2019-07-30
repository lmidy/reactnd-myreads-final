import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const {title, books, onShelfUpdate} = this.props
      return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.map((book) => (
                          <li key={book.id}>
                              <Book
                                  book={book}
                                  onShelfUpdate={onShelfUpdate}
                              />
                          </li>
                      ))}
                  </ol>
              </div>
          </div>
        )
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onShelfUpdate: PropTypes.func
}

export default BookShelf

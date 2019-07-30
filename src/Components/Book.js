import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {
      const {book, onShelfUpdate} = this.props
      if(book.imageLinks === undefined ) {
            book.imageLinks = ['thumbnail'];
            book.imageLinks.thumbnail = '';
        }

      return (
          <div className="book">
              <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193 }}>
                      <img alt="" src={book.imageLinks.thumbnail} style={{ width: 128, height: 193 }}/>
                  </div>
                  <div className="book-shelf-changer">
                      <select onChange={e => onShelfUpdate(book, e.target.value)} value={book.shelf}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading" >Currently Reading</option>
                          <option value="wantToRead" >Want to Read</option>
                          <option value="read" >Read</option>
                          <option value="none" >None</option>
                      </select>
                  </div>
              </div>
              <div className="book-title">{book.title ? book.title : ''}</div>
              <div className="book-authors">{book.authors ? book.authors.join(', ') : 'No Author Found'}</div>
          </div>
        )
      }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfUpdate: PropTypes.func
}

export default Book

import React from 'react';
import ListBooks from './ListBooks';
import OpenSearch from './OpenSearch'

const Home = (props) => {
  return (
    <div className="home">
      <div className="list-books-title">
          <h1>My Reads</h1>
          </div>
      <ListBooks />
      <OpenSearch />
    </div>
  )
}

export default Home

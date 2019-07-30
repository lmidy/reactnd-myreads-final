## Udacity React Nanodegree My Reads Assignment 

In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

I followed the top down approach to thinking in react


## Starter files for working on this project:

[Reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)


# How to run myreads project

Download this git repo a local folder, Navigate to the myreads folder
```
cd reactnd-project-myreads-final
```
Install your npm project dependencies
```
npm install
```
Then run the application:
```
npm start
```
Browse the application at this URL:
```
Compiled successfully!

You can now view myreads-app in the browser.

  Local:            http://localhost:3000/
 ```
Validate My Reads home page loads:

![MyReads Home Screenshot](https://github.com/lmidy/reactnd-project-myreads-final/blob/master/MyReads_Home.jpeg)

Navigate to search page

![MyReads Search Page Screenshot Sample](https://github.com/lmidy/reactnd-project-myreads-final/blob/master/MyReads_search.jpeg)

Execute some of the scenarios identified in [Rubric](https://review.udacity.com/#!/rubrics/918/view)
* Go to search page and search "react" and add a book to any shelf
* Select several books from the search page and identify differnt shelf values
* Use the back button to go to home and validate books are in proper shelves


## Udacity provided myReads Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

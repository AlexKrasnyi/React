const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

export const bookAdded = (bookId) => {
  return {
    type: 'BOOK_ADDED',
    payload: bookId
  }
}

export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_FROM_CARD',
    payload: bookId
  }
}

export const allBookRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_FROM_CARD',
    payload: bookId
  }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequest())
  bookstoreService.getBooks()
  .then((data) => {dispatch(booksLoaded(data))})
  .catch((e) => dispatch(booksError(e)));
  }

export { fetchBooks };
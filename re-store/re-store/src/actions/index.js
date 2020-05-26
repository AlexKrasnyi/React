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

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequest())
  bookstoreService.getBooks()
  .then((data) => {dispatch(booksLoaded(data))})
  .catch((e) => dispatch(booksError(e)));
  }
export { fetchBooks };
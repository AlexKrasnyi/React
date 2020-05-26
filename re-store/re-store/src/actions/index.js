const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksUpdated = () => {
  return {
    type: 'BOOKS_UPDATED'
  };
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  };
};

export { booksLoaded, booksUpdated, booksError };
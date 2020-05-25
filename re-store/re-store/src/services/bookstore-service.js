import React, { Component } from 'react';

export default class BookstoreService extends Component {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Мастер и Маргарита', 
        author: 'М. Булгаков'
      },
      {
        id: 2,
        title: 'Белая гвардия', 
        author: 'М. Булгаков'
      }
    ];
  };
};

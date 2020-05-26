import { Component } from 'react';

export default class BookstoreService extends Component {

   data = [
    {
      id: 1,
      title: 'Мастер и Маргарита', 
      author: 'М. Булгаков',
      price: 25,
      coverImage: 'https://knigamir.com/upload/resizer2/12/690/69037444c3cd93854fb5cb5a93d7d8c1.JPG'
    },
    {
      id: 2,
      title: 'Белая гвардия', 
      author: 'М. Булгаков',
      price: 20,
      coverImage: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/1/8/181134_13292476.jpg'
    }
  ];
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000);
    });
  };
};

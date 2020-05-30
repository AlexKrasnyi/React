import React from 'react';
import BookListComponent from '../book-list.js';
import ShopingCartTable from '../shoping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookListComponent />
      <ShopingCartTable />
    </div>
  );
};

export default HomePage;
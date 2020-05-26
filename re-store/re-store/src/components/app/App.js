import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopHeader from '../shop-header';
// import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { CartPage, HomePage } from '../pages';




const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks())
  return (
    <div>
      <main role="main" className="container">
        <ShopHeader numItems={5} total={210} />
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/cart' component={CartPage} exact />
        </Switch>
      </main>
    </div>
  );
};

export default withBookstoreService()(App);

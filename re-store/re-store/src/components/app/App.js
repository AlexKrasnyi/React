import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loader from '../loader'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'
import { CartPage, HomePage } from '../pages'




const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks())
  return (
    <div>
      <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/cart' component={CartPage} exact />
      </Switch>
    </div>
  )
}

export default withBookstoreService()(App)

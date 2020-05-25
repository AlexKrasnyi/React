import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/error-bounary'
import { BookStoreServiceProvider } from './components/bookstore-service-context'
import { BrowserRouter as Router } from 'react-router-dom'
import BookstoreService from './services/bookstore-service'
import store from './store'

const bookstoreService = new BookstoreService()


ReactDom.render(
  <Provider store={store}>
		<ErrorBoundary>
			<BookStoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookStoreServiceProvider>
		</ErrorBoundary>
  </Provider>
    , document.getElementById('root'))

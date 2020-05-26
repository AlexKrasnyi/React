import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import Loader from '../loader'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksUpdated, booksError } from '../../actions';
import BookListItem from '../book-list-item.js';
import './BookList.css';

class BookList extends Component {

	componentDidMount() {
		this.props.fetchBooks()
		// const { 
		// 	bookstoreService, 
		// 	booksLoaded, 
		// 	booksUpdated, 
		// 	booksError } = this.props;
		
		// 	booksUpdated()
		// bookstoreService.getBooks()
		// .then((data) => {booksLoaded(data)})
		// .catch((e) => booksError(e) );

	};

	render() {
		const { books, loading, error } = this.props;
		if(loading) {
			return <Loader />
		};

		if(error) {
			return <ErrorIndicator />
		}

		return (
			<ul className="book-list">
				{ books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem book={book} />
						</li>
					);
				} ) }
			</ul>
		);
	};
};

const mapStateToProps = (state) => {
	return  { 
		books: state.books,
		loading: state.loading,
		error: state.error
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ booksLoaded }, dispatch)
// };
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchBooks: () => {

		const { bookstoreService } = ownProps;

		dispatch(booksUpdated())
		bookstoreService.getBooks()
		.then((data) => {dispatch(booksLoaded(data))})
		.catch((e) => dispatch(booksError(e)));
		}
	};
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
